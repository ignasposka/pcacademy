const chai = require('chai');

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
                    res.body.should.be.an('array');
                    done();
                });
        });
    });
};
