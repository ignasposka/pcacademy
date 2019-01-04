const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
chai.use(require('chai-bytes'));
const Album = require('../../../models/album');

module.exports = (apiUrl) => {
    before((done) => {
        const album = new Album({
            name: 'public',
            access: [{ collaborator: '*', rights: 'read' }],
            mediaItems: [process.env.CREATED_FILE_ID]
        });

        album.save((err, createdAlbum) => {
            if (err) {
                console.log(err);
            } else {
                process.env.CREATED_PUBLIC_ALBUM_ID = createdAlbum._id;
                done();
            }
        });
    });

    describe('/GET single picture', () => {
        it('it should return 200 (Created) and pictures\' array in body', (done) => {
            chai.request(apiUrl)
                .get(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems/${process.env.CREATED_FILE_ID}`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
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
