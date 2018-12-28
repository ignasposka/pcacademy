const { ObjectId } = require('mongoose').Types;

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
