process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const AlbumModel = require('../../../models/album');
const testGet = require('./get');
const testPost = require('./post');
const testPatch = require('./patch');
const testDelete = require('./delete');

const apiUrl = 'http://localhost:8080';
process.env.ANOTHER_USER_ID = 'new_user';
require('../../../index.js');

chai.should();
chai.use(chaiHtpp);

describe('Albums', () => {
    before((done) => {
        AlbumModel.deleteMany({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                createAnotherUserAlbum(done);
            }
        });
    });

    testGet(apiUrl);
    testPost(apiUrl);
    testPatch(apiUrl);
    testDelete(apiUrl);
});

function createAnotherUserAlbum(cb) {
    const album = new AlbumModel({
        name: 'new',
        access: [{ collaborator: process.env.ANOTHER_USER_ID, rights: 'admin' }]
    });
    album.save((err, createdAlbum) => {
        if (err) {
            console.log(err);
        } else {
            process.env.ANOTHER_USER_ALBUM_ID = createdAlbum._id;
            cb();
        }
    });
}
