process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../models/album');
const mlog = require('mocha-logger');

const apiUrl = 'http://localhost:8080';
require('../index.js');

chai.should();
chai.use(chaiHtpp);

describe('Albums', () => {
    let createdAlbumId;

    before((done) => {
        AlbumModel.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/GET albums', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .get('/albums/aaa')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/DELETE try pass incorrect id in params', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .delete('/albums/123')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });
});
