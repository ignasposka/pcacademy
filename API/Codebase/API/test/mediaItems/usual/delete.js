const chai = require('chai');
const fs = require('fs');
const path = require('path');
chai.use(require('chai-bytes'));

module.exports = (apiUrl) => {
    describe('/DELETE single picture', () => {
        it('it should return 204 (No Content)', (done) => {
            chai.request(apiUrl)
                .delete(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/${process.env.CREATED_FILE_ID}`)
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
