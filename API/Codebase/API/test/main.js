process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../models/album');
const mlog = require('mocha-logger');
const loadToken = require('./loadToken');
const albumsUsual = require('./albums/usual');
const albumsIncorrect = require('./albums/incorrect_data');
const mediaItemsUsual = require('./mediaItems/usual');
const mediaItemsIncorrect = require('./mediaItems/incorrect');
const rimraf = require('rimraf');

const apiUrl = 'http://localhost:8080';
require('../index.js');

const testAlbumsUsual = () => {
    albumsUsual.post(apiUrl);
    albumsUsual.patch(apiUrl);
    albumsUsual.get(apiUrl);
};

const testAlbumsIncorrect = () => {
    albumsIncorrect.delete(apiUrl);
    albumsIncorrect.post(apiUrl);
    albumsIncorrect.patch(apiUrl);
    albumsIncorrect.get(apiUrl);
};

const testMediaItemsUsual = () => {
    mediaItemsUsual.post(apiUrl);
    mediaItemsUsual.get(apiUrl);
    mediaItemsUsual.delete(apiUrl);
};

const testMediaItemsIncorrect = () => {
    mediaItemsIncorrect.get(apiUrl);
};

chai.should();
chai.use(chaiHtpp);

loadToken().then(() => {
    describe('Main test', () => {
        before((done) => {
            rimraf('uploads/*', () => done());
        });

        testAlbumsUsual();
        // testAlbumsIncorrect();
        testMediaItemsIncorrect();
        testMediaItemsUsual();
        albumsUsual.delete(apiUrl);
    });
});
