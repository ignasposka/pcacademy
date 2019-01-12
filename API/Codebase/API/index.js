/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./connectToDb');
const handleError = require('./handleError');
const albumsRouter = require('./routes/albums');
const mediaItemsRouter = require('./routes/mediaItems');
const randomPhotoRouter = require('./routes/randomPhoto');

require('dotenv').config();

connectToDb((err) => {
    if (err) {
        console.log(err);
    } else {
        initialize();
    }
});

function initialize() {
    setRootDir();
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(albumsRouter);
    app.use(mediaItemsRouter);
    app.use(randomPhotoRouter);
    app.use(handleError);

    app.listen(process.env.API_PORT, () => {
        console.log(`Server started! Listening on ${process.env.API_PORT} port.`);
    });
}

function setRootDir() {
    process.env.ROOT_DIR = __dirname;
}
