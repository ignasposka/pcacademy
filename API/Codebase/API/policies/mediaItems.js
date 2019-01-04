const { ObjectId } = require('mongoose').Types;
const { doesUserHaveAccess } = require('../controllers/albums');

exports.getSingle = {
    _albumId: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id, { req }) => ObjectId.isValid(id) && doesUserHaveAccess(req.get('Authorization'), id, true)
                .then((result) => {
                    if (!result) {
                        return Promise.reject(new Error(`You have no access to modify album with id: ${id}`));
                    }
                })
                .catch((err) => Promise.reject(err))
        }
    },
    _id: {
        in: ['params'],
        errorMessage: 'MediaItem id must be provided'
    }
};

exports.delete = {
    _albumId: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id, { req }) => ObjectId.isValid(id) && doesUserHaveAccess(req.get('Authorization'), id)
                .then((result) => {
                    if (!result) {
                        return Promise.reject(new Error(`You have no access to modify album with id: ${id}`));
                    }
                })
                .catch((err) => Promise.reject(err))
        }
    },
    _id: {
        in: ['params'],
        errorMessage: 'MediaItem id must be provided'
    }
};

exports.post = {
    _albumId: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id, { req }) => ObjectId.isValid(id) && doesUserHaveAccess(req.get('Authorization'), id)
                .then((result) => {
                    if (!result) {
                        return Promise.reject(new Error(`You have no access to modify album with id: ${id}`));
                    }
                })
                .catch((err) => Promise.reject(err))
        }
    }
};
