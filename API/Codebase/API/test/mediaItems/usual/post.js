const chai = require('chai');
const Album = require('../../../models/album');

module.exports = (apiUrl) => {
    describe('/POST picture', () => {
        it('it should return 201 (Created)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems`)
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 201) {
                        console.log(res.body);
                    }
                    res.should.have.status(201);
                    res.body.should.contain.key('filenames');
                    [process.env.CREATED_FILE_ID] = res.body.filenames;
                    updatePublicAlbum(done);
                });
        });
    });
};

function updatePublicAlbum(done) {
    Album.findByIdAndUpdate(process.env.CREATED_PUBLIC_ALBUM_ID, {
        $push: { mediaItems: { name: process.env.CREATED_FILE_ID } }
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            done();
        }
    });
}
