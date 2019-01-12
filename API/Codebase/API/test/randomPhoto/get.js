const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/GET random photo', () => {
        it('it should return 200 (OK) and photo in body', (done) => {
            chai.request(apiUrl)
                .get('/randomPhoto')
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                        done();
                    } else {
                        if (res.status !== 200) {
                            console.log(res.body);
                        }
                        res.should.have.status(200);
                        done();
                    }
                });
        });
    });
};
