const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
chai.use(require('chai-bytes'));

module.exports = (apiUrl) => {
    describe('/GET single picture with not existing filename', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/notExistingFile.fake`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    expect(err).to.be.equals(null);
                    done();
                });
        });
    });

    describe('/GET single picture with incorrect album id', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .get(`/albums/123/mediaItems/${process.env.CREATED_FILE_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    expect(err).to.be.equals(null);
                    done();
                });
        });
    });

    describe('/GET single picture with not existing album id', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .get(`/albums/507f1f77bcf86cd799439011/mediaItems/${process.env.CREATED_FILE_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    expect(err).to.be.equals(null);
                    done();
                });
        });
    });
};
