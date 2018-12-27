const chai = require('chai');

module.exports = (apiUrl) => {
    describe('/POST picture', () => {
        it('it should return 201 (Created)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems`)
                .attach('picture', 'D:\\IT fun pictures\\spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .end((err, res) => {
                    if (res.status !== 201) {
                        console.log(res.body);
                    }
                    res.should.have.status(201);
                    res.body.should.contain.key('filename');
                    process.env.CREATED_FILE_ID = res.body.filename;
                    done();
                });
        });
    });
};
