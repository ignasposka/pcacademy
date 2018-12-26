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
const rimraf = require('rimraf');

const apiUrl = 'http://localhost:8080';
require('../index.js');

const testAlbumsUsual = () => {
    albumsUsual.post(apiUrl);
    albumsUsual.patch(apiUrl);
    albumsUsual.get(apiUrl);
};

const testAlbumsIncorrect = () => {
    albumsIncorrect.post(apiUrl);
    albumsIncorrect.patch(apiUrl);
    albumsIncorrect.get(apiUrl);
};

const testMediaItemsUsual = () => {
    mediaItemsUsual.post(apiUrl);
};

chai.should();
chai.use(chaiHtpp);

loadToken().then(() => {
    describe('Main test', () => {
        before((done) => {
            AlbumModel.deleteMany({}, (err) => {
                rimraf('uploads/*', () => done());
            });
        });

        testAlbumsUsual();
        // testAlbumsIncorrect();
        testMediaItemsUsual();
    });
});
