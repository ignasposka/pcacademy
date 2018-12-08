module.exports = {
    name: {
        in: ['body'],
        errorMessage: 'Album\'s name should be supplied'
    },
    visualElements: {
        in: ['body'],
        isArray: true,
        custom: {
            options: (arr) => arr.every((element) => typeof element === 'string')
        },
        errorMessage: 'Visual elements should be an array composed of string values'
    },
    access: {
        in: ['body'],
        custom: {
            options: (obj) => typeof obj === 'object'
                && obj.collaborator
                && obj.rights
                && ['admin', 'write', 'read'].contains(obj.rights)
        }
    }
};
