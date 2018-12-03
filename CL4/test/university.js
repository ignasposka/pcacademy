process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const UniversityModel = require('../models/university');

chai.should();
chai.use(chaiHtpp);

describe('Universities', () => {

    beforeEach(done => {
        UniversityModel.remove({}, err => {
            done();
        });
    });

    describe('/GET with unauthorized access', () => {
        it('it should return unauthorized', done => {
            chai.request(app)
                .get('/universities')
                .end((error, response) => {
                    response.should.have.status(401);
                    done();
                });
        });
    });

    describe('/GET universities', () => {
        it('it should return universities', done => {
            chai.request(app)
                .get('/universities')
                .set('token', CONFIG.TOKEN_TEST)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/CREATE universities', () => {
        it('university should be created', done => {
            chai.request(app)
                .post('/universities')
                .set('content-type', 'application/json')
                .set('token', CONFIG.TOKEN_TEST)
                .send({
                    "name": "KTU"
                })
                .end((error, response) => {
                    response.should.have.status(201);
                    done();
                });
        });
    });

    describe('/DELETE universities', () => {
        it('university should be deleted', done => {
            chai.request(app)
                .del('/universities')
                .set('content-type', 'application/json')
                .set('token', CONFIG.TOKEN_TEST)
                .send({
                    "name": "KTU"
                })
                .end((error, response) => {
                    response.should.have.status(201);
                    done();
                });
        });
    });
});
