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
                        mlog.error(res.body);
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
                .patch('/albums/5c0fa93fb12acf2df4de0ab9')
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
});
