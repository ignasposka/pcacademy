/* eslint-disable no-unused-expressions */
const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/PATCH album', () => {
        it('it should return no content', (done) => {
            chai.request(apiUrl)
                .patch(`/albums/${process.env.CREATED_ALBUM_ID}`)
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 200) {
                        console.log(res.body);
                    }
                    res.should.have.status(200);
                    res.body.should.contain.keys('name', 'access', 'mediaItems', '_id');
                    expect(res.body).to.have.property('access').to.be.a('array');
                    expect(res.body).to.have.property('mediaItems').to.be.a('array');
                    done();
                });
        });
    });
};
