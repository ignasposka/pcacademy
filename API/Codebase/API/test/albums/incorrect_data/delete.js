const chai = require('chai');

module.exports = (apiUrl) => {
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

    describe('/DELETE try delete not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .delete('/albums/54759eb3c090d83494e2d804')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
};
