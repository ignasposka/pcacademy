const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
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
};
