process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../../../models/album');
const mlog = require('mocha-logger');
const loadToken = require('../../loadToken');
const testGet = require('./get');
const testPost = require('./post');
const testPatch = require('./patch');

const apiUrl = 'http://localhost:8080';
require('../../../index.js');

chai.should();
chai.use(chaiHtpp);
loadToken().then(() => {
    describe('Albums', () => {
        before((done) => {
            AlbumModel.deleteMany({}, (err) => {
                done();
            });
        });

        testPost(apiUrl);
        testPatch(apiUrl);
        testGet(apiUrl);
    });
});
