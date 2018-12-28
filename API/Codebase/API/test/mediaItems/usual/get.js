const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
chai.use(require('chai-bytes'));

module.exports = (apiUrl) => {
    describe('/GET single picture', () => {
        it('it should return 200 (Created) and pictures\' array in body', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/${process.env.CREATED_FILE_ID}`)
                .end((err, res) => {
                    if (res.status !== 200) {
                        console.log(res.body);
                    }
                    res.should.have.status(200);
                    const fileToMatch = fs.readFileSync(`uploads/${process.env.CREATED_FILE_ID}`);
                    expect(res.body).to.be.equalBytes(fileToMatch);
                    done();
                });
        });
    });
};
