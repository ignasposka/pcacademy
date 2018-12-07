process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../models/album');
const apiUrl = 'http://localhost:8080';
require('../index.js');

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
            chai.request(apiUrl)
                .get('/albums')
                .end((error, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST album', () => {
        it('it should return created album', done => {
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
                res.should.have.status(201);
                res.body.should.contain.keys('name', 'access', 'visualElements', '_id')
                done();
            })
        })
    })
});

