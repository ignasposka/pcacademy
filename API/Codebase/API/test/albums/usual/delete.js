const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/DELETE album', () => {
        it('it should delete album, return 204', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.CREATED_ALBUM_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 204) {
                        console.log(res.body);
                    }
                    res.should.have.status(204);
                    done();
                });
        });
    });
};
