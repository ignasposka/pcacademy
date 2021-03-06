const chai = require('chai');

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

    describe('/GET another user album', () => {
        it('it should return 403 (Forbidden)', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.ANOTHER_USER_ALBUM_ID}`)
                .end((err, res) => {
                    res.should.have.status(403);
                    done();
                });
        });
    });
};
