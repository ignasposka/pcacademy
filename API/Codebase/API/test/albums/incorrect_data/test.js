process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../../../models/album');
const testGet = require('./get');
const testPost = require('./post');
const testPatch = require('./patch');
const testDelete = require('./delete');

const apiUrl = 'http://localhost:8080';
require('../../../index.js');

chai.should();
chai.use(chaiHtpp);

describe('Albums', () => {
    before((done) => {
        AlbumModel.deleteMany({}, (err) => {
            done();
        });
    });

    // testGet(apiUrl);
    testPost(apiUrl);
    testPatch(apiUrl);
    testDelete(apiUrl);
});
