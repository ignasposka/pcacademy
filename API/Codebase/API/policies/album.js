const { ObjectId } = require('mongoose').Types;

exports.create = {
    name: {
        in: ['body'],
        required: true,
        errorMessage: 'Album\'s name should be supplied',
        isString: true
    },
    visualElements: {
        in: ['body'],
        isArray: true,
        optional: true,
        custom: {
            options: (arr) => arr.every((element) => typeof element === 'string')
        },
        errorMessage: 'Visual elements should be an array composed of string values'
    },
    access: {
        in: ['body'],
        optional: true,
        custom: {
            options: (obj) => typeof obj === 'object'
                && obj.collaborator
                && obj.rights
                && ['admin', 'write', 'read'].includes(obj.rights)
        }
    }
};

exports.patch = {
    _id: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id) => ObjectId.isValid(id)
        }
    },
    name: {
        in: ['body'],
        optional: true,
        errorMessage: 'Album\'s name should be supplied'
    },
    visualElements: {
        in: ['body'],
        isArray: true,
        optional: true,
        custom: {
            options: (arr) => arr.every((element) => typeof element === 'string')
        },
        errorMessage: 'Visual elements should be an array composed of string values'
    },
    access: {
        in: ['body'],
        optional: true,
        custom: {
            options: (obj) => typeof obj === 'object'
                && obj.collaborator
                && obj.rights
                && ['admin', 'write', 'read'].includes(obj.rights)
        }
    }
};

exports.get = {
    _id: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id) => ObjectId.isValid(id)
        }
    }
};

exports.delete = {
    _id: {
        in: ['params'],
        errorMessage: 'Album id is invalid',
        custom: {
            options: (id) => ObjectId.isValid(id)
        }
    }
};
