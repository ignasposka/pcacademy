const { ObjectId } = require('mongoose').Types;
const { doesUserHaveAccess } = require('../controllers/albums');

exports.getSingle = {
    _albumId: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id) => ObjectId.isValid(id)
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
                .then(([result, message = `You have no access to modify album with id: ${id}`]) => {
                    if (!result) {
                        return Promise.reject(new Error(message));
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
