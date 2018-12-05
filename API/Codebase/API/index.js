/* eslint-disable no-console */
const express = require('express');
const debug = require('debug')('SpaceSaver');
const models = require('./models');
const bodyParser = require('body-parser');
const connectToDb = require('./connectToDb');

require('dotenv').config();

connectToDb((err) => {
    if (err) {
        console.log(err);
    } else {
        initialize();
    }
});

function initialize() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.listen(process.env.API_PORT, () => {
        console.log('Server started!');
    });
}
