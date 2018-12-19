const chai = require('chai');

module.exports = (apiUrl) => {
    describe('/PATCH album with incorrect id', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/aaa')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
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

    describe('/PATCH not existing album', () => {
        it('it should return 404 (Not Found)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'patched!'
                })
                .end((err, res) => {
                    if (res.status !== 404) {
                        console.log(res.body);
                    }
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/PATCH album with incorrect access object', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
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

    describe('/PATCH album with visual elements object instead of array', () => {
        it('it should return 400 (Bad Request)', (done) => {
            chai.request(apiUrl)
                .patch('/albums/54759eb3c090d83494e2d804')
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
