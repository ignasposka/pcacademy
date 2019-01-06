const Album = require('../models/album');
const filter = require('express-validator/filter');
const jwtDecode = require('jwt-decode');

exports.get = (req, res, next) => {
    const jwtToken = req.get('Authorization');
    const { sub: userId } = jwtDecode(jwtToken);
    // eslint-disable-next-line array-callback-return
    Album.find({ 'access.0.collaborator': userId }, (err, albums) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(albums);
        }
    });
};

exports.getSingle = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        Album.findById(requestData._id, (err, album) => {
            if (err) {
                next(err);
            } else if (album) {
                res.status(200).send(album);
            } else {
                res.send(404);
            }
        });
    } else {
        validationErrors.array().forEach((err) => {
            if (err.msg.includes('You have no access')) {
                res.status(403).json({ errors: validationErrors.array() });
            }
        });
        res.status(400).json({ errors: validationErrors.array() });
    }
};

exports.create = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        const jwtToken = req.get('Authorization');
        const userInfo = jwtDecode(jwtToken);
        const album = new Album({
            name: requestData.name,
            access: [{ collaborator: userInfo.sub, rights: 'admin' }, ...requestData.access]
        });

        album.save((err, createdAlbum) => {
            if (err) {
                next(err);
            } else {
                res.status(201).send(createdAlbum);
            }
        });
    } else {
        res.status(400).json({ errors: validationErrors.array() });
    }
};

exports.patch = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        const updateProperties = {};

        Object.keys(requestData).forEach((key) => {
            if (key !== '_id') {
                updateProperties[key] = requestData[key];
            }
        });

        Album.findByIdAndUpdate(requestData._id, updateProperties, (err, result) => {
            if (err) {
                next(err);
            } else if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send();
            }
        });
    } else {
        validationErrors.array().forEach((err) => {
            if (err.msg.includes('You have no access')) {
                res.status(403).json({ errors: validationErrors.array() });
            }
        });
        res.status(400).json({ errors: validationErrors.array() });
    }
};

exports.delete = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        Album.findByIdAndDelete(requestData._id, (err, deleted) => {
            if (err) {
                next(err);
            } else if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        });
    } else {
        validationErrors.array().forEach((err) => {
            if (err.msg.includes('You have no access')) {
                res.status(403).json({ errors: validationErrors.array() });
            }
        });
        res.status(400).json({ errors: validationErrors.array() });
    }
};

exports.doesUserHaveAccess = (jwt, albumId, getMethod) => new Promise((resolve, reject) => {
    Album.findById(albumId, (err, album) => {
        if (err) {
            throw err;
        } else if (album) {
            if (getMethod && album.access.map((acc) => acc.collaborator).includes('*')) {
                resolve(true);
            } else if (jwt) {
                const userInfo = jwtDecode(jwt);
                const userId = userInfo.sub;
                if (album.access.map((acc) => acc.collaborator).includes(userId)) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        } else {
            resolve(true);
        }
    });
});
