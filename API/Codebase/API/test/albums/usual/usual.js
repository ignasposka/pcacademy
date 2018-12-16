process.env.NODE_ENV = 'test';

const chai = require('chai');
const { expect } = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../../../models/album');
const mlog = require('mocha-logger');
const getToken = require('../../loadToken');
const testGet = require('./get');

const apiUrl = 'http://localhost:8080';
require('../../../index.js');

chai.should();
chai.use(chaiHtpp);
getToken().then(() => {
    describe('Albums', () => {
        before((done) => {
            AlbumModel.deleteMany({}, (err) => {
                done();
            });
        });

        describe('/POST album', () => {
            it('it should return created album', (done) => {
                chai.request(apiUrl)
                    .post('/albums')
                    .send({
                        name: 'test',
                        access: {
                            collaborator: '54759eb3c090d83494e2d804',
                            rights: 'admin'
                        }
                    })
                    .end((err, res) => {
                        if (res.status !== 201) {
                            console.log(res.body);
                        } else {
                            process.env.CREATED_ALBUM_ID = res.body._id;
                        }
                        res.should.have.status(201);
                        res.body.should.contain.keys('name', 'access', 'visualElements', '_id');
                        done();
                    });
            });
        });

        describe('/PATCH album', () => {
            it('it should return no content', (done) => {
                chai.request(apiUrl)
                    .patch(`/albums/${process.env.CREATED_ALBUM_ID}`)
                    .set('content-type', 'application/json')
                    .send({
                        name: 'patched!'
                    })
                    .end((err, res) => {
                        if (res.status !== 204) {
                            console.log(res.body);
                        }
                        res.should.have.status(204);
                        done();
                    });
            });
        });

        describe('/GET albums', () => {
            it('it should return albums', (done) => {
                chai.request(apiUrl)
                    .get('/albums')
                    .end((error, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('array');
                        done();
                    });
            });
        });

        testGet(apiUrl);

        describe('/DELETE album', () => {
            it('it should delete album, return 204', (done) => {
                chai.request(apiUrl)
                    .delete(`/albums/${process.env.CREATED_ALBUM_ID}`)
                    .end((err, res) => {
                        if (res.status !== 204) {
                            console.log(res.body);
                        }
                        res.should.have.status(204);
                        done();
                    });
            });
        });
    });
});
