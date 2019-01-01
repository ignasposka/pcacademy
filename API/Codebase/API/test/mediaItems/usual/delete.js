const chai = require('chai');
chai.use(require('chai-bytes'));
const { expect } = require('chai');
const Album = require('../../../models/album');

module.exports = (apiUrl) => {
    describe('/DELETE single picture', () => {
        it('it should return 204 (No Content)', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/${process.env.CREATED_FILE_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .end((err, res) => {
                    if (res.status !== 204) {
                        console.log(res.body);
                    }
                    res.should.have.status(204);
                    isPhotoDeleted()
                        .then((isDeleted) => {
                            expect(isDeleted).to.be.equals(true);
                            done();
                        })
                        .catch((err) => { throw err; });
                });
        });
    });
};

function isPhotoDeleted(albumId) {
    return new Promise((resolve, reject) => {
        Album.findById(albumId, (err, result) => {
            if (err) {
                reject(err);
            } else if (result) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}
