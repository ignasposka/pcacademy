const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
chai.use(require('chai-bytes'));

module.exports = (apiUrl) => {
    describe('/POST picture to not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .post('/albums/507f1f77bcf86cd799439011/mediaItems')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe('/POST picture with incorrect album id', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums/123/mediaItems')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/POST with no files added', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/POST picture to other user album', () => {
        it('it should return 403 (Forbidden)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.ANOTHER_USER_ALBUM_ID}/mediaItems`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 403) {
                        console.log(res.body);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });

    describe('/POST picture to public album without authentification', () => {
        it('it should return 401 (Unauthorized)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_PUBLIC_ALBUM_ID}/mediaItems`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 401) {
                        console.log(res.body);
                    }
                    res.should.have.status(401);
                    done();
                });
        });
    });
};
