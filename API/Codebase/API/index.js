/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./connectToDb');
const handleError = require('./handleError');
const albumsRoute = require('./routes/albums');

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
    app.use(albumsRoute);
    app.use(handleError);

    app.listen(process.env.API_PORT, () => {
        console.log(`Server started! Listening on ${process.env.API_PORT} port.`);
    });
}
