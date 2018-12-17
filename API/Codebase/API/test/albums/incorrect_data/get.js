const chai = require('chai');
const { expect } = require('chai');
const chaiHtpp = require('chai-http');

module.exports = (apiUrl) => {
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
};
