process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../models/album');
const app = require('../index.js');

chai.should();
chai.use(chaiHtpp);

describe('Albums', () => {

    beforeEach(done => {
        AlbumModel.deleteMany({}, (err) =>{
            done();
        });
    });

    describe('/GET albums', () => {
        it('it should return albums', done => {
            chai.request('http://localhost:8080')
                .get('/albums')
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });
});

