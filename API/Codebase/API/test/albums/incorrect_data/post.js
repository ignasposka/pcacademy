const chai = require('chai');

module.exports = (apiUrl) => {
    describe('/POST album without name', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    access: [{
                        collaborator: '54759eb3c090d83494e2d804',
                        rights: 'admin'
                    }]
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/POST album with incorrect access object', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    access: [{
                        allow: 'all'
                    }]
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/POST album with visual elements object instead of array', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    visualElements: {
                        seaPicture: '54759eb3c090d83494e2d804'
                    }
                })
                .end((err, res) => {
                    if (res.status !== 400) {
                        console.log(res.body);
                    }
                    res.should.have.status(400);
                    done();
                });
        });
    });
};
