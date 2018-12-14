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
    before((done) => {
        AlbumModel.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/GET albums with not ObjectId in params', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .get('/albums/aaa')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/GET not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .get('/albums/54759eb3c090d83494e2d804')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/POST album without name', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .send({
                    access: {
                        collaborator: '54759eb3c090d83494e2d804',
                        rights: 'admin'
                    }
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/POST album without access object', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .send({
                    name: 'Holiday!'
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/PATCH album with incorrect id', () => {
        it('it should return no content', (done) => {
            chai.request(apiUrl)
                .patch('/albums/aaa')
                .set('content-type', 'application/json')
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
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
