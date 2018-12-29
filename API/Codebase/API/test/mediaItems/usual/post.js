const chai = require('chai');

module.exports = (apiUrl) => {
    describe('/POST picture', () => {
        it('it should return 201 (Created)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems`)
                .attach('picture', 'test/mediaItems/usual/spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .attach('picture', 'test/mediaItems/usual/paypal bugs.png', 'paypal bugs.png')
                .end((err, res) => {
                    if (res.status !== 201) {
                        console.log(res.body);
                    }
                    res.should.have.status(201);
                    res.body.should.contain.key('filenames');
                    [process.env.CREATED_FILE_ID] = res.body.filenames;
                    done();
                });
        });
    });
};
