const chai = require('chai');
const { expect } = require('chai');

module.exports = (apiUrl) => {
    describe('/POST album', () => {
        it('it should return created album', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'test',
                    access: {
                        collaborator: '54759eb3c090d83494e2d804',
                        rights: 'admin'
                    }
                })
                .end((err, res) => {
                    if (res.status !== 201) {
                        console.log(res.body);
                    } else {
                        process.env.CREATED_ALBUM_ID = res.body._id;
                    }
                    res.should.have.status(201);
                    res.body.should.contain.keys('name', 'access', 'visualElements', '_id');
                    done();
                });
        });
    });
};
