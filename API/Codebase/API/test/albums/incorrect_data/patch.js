/* eslint-disable no-unused-expressions */
const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/PATCH album with incorrect id', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/aaa')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/PATCH not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/PATCH album with incorrect access object', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    access: [{
                        allow: 'all'
                    }]
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/PATCH album with visual elements object instead of array', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    mediaItems: {
                        seaPicture: '54759eb3c090d83494e2d804'
                    }
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/PATCH another user album', () => {
        it('it should return 403 (Forbidden)', (done) => {
            chai.request(apiUrl)
                .patch(`/albums/${process.env.ANOTHER_USER_ALBUM_ID}`)
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 403) {
                        console.log(res.body);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
};
