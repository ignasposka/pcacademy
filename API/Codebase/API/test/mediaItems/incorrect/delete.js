const chai = require('chai');
chai.use(require('chai-bytes'));
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/DELETE picture with not existing filename', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/123`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/DELETE picture with not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .delete('/albums/507f1f77bcf86cd799439011/mediaItems/123')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/DELETE other user\'s picture', () => {
        it('it should return 403 (Forbidden)', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.ANOTHER_USER_ALBUM_ID}/mediaItems/${process.env.CREATED_FILE_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 403) {
                        console.log(res.body);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
};
