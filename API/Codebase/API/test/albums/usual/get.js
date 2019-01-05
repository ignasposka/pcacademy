/* eslint-disable no-unused-expressions */
const chai = require('chai');
const { expect } = require('chai');
const jwtDecode = require('jwt-decode');
chai.use(require('chai-shallow-deep-equal'));

module.exports = (apiUrl) => {
    const userToken = process.env.ACCESS_TOKEN;
    const { sub: userId } = jwtDecode(userToken);


    describe('/GET single album', () => {
        it('it should return created album', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.CREATED_ALBUM_ID}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 200) {
                        console.log(res.body);
                    }
                    res.should.have.status(200);
                    expect(res.body).to.have.property('_id').to.be.equal(process.env.CREATED_ALBUM_ID);
                    expect(res.body).to.have.property('name').to.be.equal('patched!');
                    res.body.should.shallowDeepEqual({
                        access: [{
                            collaborator: userId
                        }]
                    });
                    done();
                });
        });
    });

    describe('/GET albums', () => {
        it('it should return albums', (done) => {
            chai.request(apiUrl)
                .get('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 200) {
                        console.log(res.body);
                    }
                    res.should.have.status(200);
                    expect(res.body).to.have.length(1);
                    res.body.forEach((album) => {
                        album.should.shallowDeepEqual({
                            access: [{
                                collaborator: userId
                            }]
                        });
                    });
                    done();
                });
        });
    });
};
