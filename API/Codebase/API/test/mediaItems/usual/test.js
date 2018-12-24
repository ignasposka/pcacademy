process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../../../models/album');
const testPost = require('./post');
const rimraf = require('rimraf');

const apiUrl = 'http://localhost:8080';
require('../../../index.js');

chai.should();
chai.use(chaiHtpp);

describe('Media Items', () => {
    before((done) => {
        rimraf('/some/directory', () => done());
    });

    testPost(apiUrl);
});
