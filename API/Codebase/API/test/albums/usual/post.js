/* eslint-disable no-unused-expressions */
const chai = require('chai');
const { expect } = require('chai');
const jwtDecode = require('jwt-decode');

module.exports = (apiUrl) => {
    const collaborator = jwtDecode(process.env.ACCESS_TOKEN).sub;
    describe('/POST album', () => {
        it('it should return created album', (done) => {
            chai.request(apiUrl)
                .post('/albums')
                .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
                .send({
                    name: 'test',
                    access: [{
                        collaborator: '54759eb3c090d83494e2d804',
                        rights: 'admin'
                    }]
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    if (res.status !== 201) {
                        console.log(res.body);
                    } else {
                        process.env.CREATED_ALBUM_ID = res.body._id;
                    }
                    res.should.have.status(201);
                    res.body.should.contain.keys('name', 'access', 'mediaItems', '_id');
                    expect(res.body).to.have.property('access').to.be.a('array');
                    expect(res.body.access[0].collaborator).to.be.equals(collaborator);
                    done();
                });
        });
    });

    // describe('/POST public album', () => {
    //     it('it should return created album with * collaborator', (done) => {
    //         chai.request(apiUrl)
    //             .post('/albums')
    //             .set('Authorization', `Bearer ${process.env.ACCESS_TOKEN}`)
    //             .send({
    //                 name: 'test',
    //                 access: [{
    //                     collaborator: '*',
    //                     rights: 'read'
    //                 }]
    //             })
    //             .end((err, res) => {
    //                 expect(err).to.be.null;
    //                 if (res.status !== 201) {
    //                     console.log(res.body);
    //                 } else {
    //                     process.env.CREATED_PUBLIC_ALBUM_ID = res.body._id;
    //                 }
    //                 res.should.have.status(201);
    //                 res.body.should.contain.keys('name', 'access', 'mediaItems', '_id');
    //                 expect(res.body).to.have.property('access').to.be.a('array');
    //                 expect(res.body.access[1].collaborator).to.be.equals('*');
    //                 done();
    //             });
    //     });
    // });
};
