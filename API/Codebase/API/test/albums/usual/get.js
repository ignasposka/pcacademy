const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/GET single album', () => {
        it('it should return created album', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.CREATED_ALBUM_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 200) {
                        console.log(res.body);
                    }
                    res.should.have.status(200);
                    expect(res.body).to.have.property('_id').to.be.equal(process.env.CREATED_ALBUM_ID);
                    expect(res.body).to.have.property('name').to.be.equal('patched!');
                    done();
                });
        });
    });
};
