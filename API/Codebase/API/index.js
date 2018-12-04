/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const async = require('async');
const debug = require('debug')('SpaceSaver');
const models = require('./models');

require('dotenv').config();

debug('Hey');

async.auto(
    {
        init: initialize,
        exec: ['init', execute]
    }
);

function execute(results, callback) {
    process.once('SIGTERM', callback);
}

function initialize(callback) {
    async.auto(
        {
            db: (callback) => initDbConnection(mongoose, callback),
            listener: ['db', initHTTPListener]
        },
        callback
    );

    function initDbConnection(mongoose, callback) {
        const db = mongoose.connection;

        if (process.env.NODE_ENV === 'development') {
            mongoose.set('debug', true);
        }

        db.once('error', (e) => callback(e));

        db.once('connected', () => {
            models.forEach((model) => model());
            callback(null, db);
        });

        mongoose.connect(process.env.DB_CONNECTION_STRING);
    }

    function initHTTPListener(db, callback) {
        const app = express();

        async.parallel(
            [
                (callback) => require('./lib/visualContent').configure(db, callback)
                // (callback) => require('./lib/studyCourses').configure(db, fawn, callback)
            ],
            (err, routers) => {
                if (err) {
                    callback(err);
                } else {
                    routers.forEach((router) => app.use(`/${process.env.API_VERSION}`, router));

                    app.use((req, res, next) => res.status(418).send());

                    app.use((err, req, res, next) => {
                        if (process.env.NODE_ENV === 'development') {
                            res.status(err.status || 500).json({ errors: err.message });
                        } else {
                            res.status(err.status || 500).send();
                        }
                    });

                    app.listen(process.env.API_PORT);

                    console.log(`Successfully listening ${process.env.API_PORT} port.`);

                    callback(null);
                }
            }
        );
    }
}
