/* eslint-disable no-unused-expressions */
const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/DELETE try pass incorrect id in params', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .delete('/albums/123')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
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
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/DELETE another user\'s album', () => {
        it('it should return 403 (Forbidden)', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.ANOTHER_USER_ALBUM_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(403);
                    done();
                });
        });
    });
};
