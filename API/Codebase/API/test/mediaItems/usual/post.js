const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/POST album', () => {
        it('it should return 201 (Created)', (done) => {
            chai.request(apiUrl)
                .post(`/albums/${process.env.CREATED_ALBUM_ID}/mediaItems`)
                .attach('picture', 'D:\\IT fun pictures\\spending_rest_life_in_emacs.jpg', 'spending_rest_life_in_emacs.jpg')
                .end((err, res) => {
                    if (res.status !== 201) {
                        console.log(res.body);
                    }
                    res.should.have.status(201);
                    done();
                });
        });
    });
};
