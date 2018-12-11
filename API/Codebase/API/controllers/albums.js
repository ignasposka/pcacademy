const Album = require('../models/album');
const filter = require('express-validator/filter');

exports.get = async (req, res) => {
    Album.find((err, albums) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(albums)
        }
    })
};

exports.create = (req, res, next) => {
    const album = new Album({
        name: req.body.name,
        access: req.body.access
    });

    album.save((err, createdAlbum) => {
        if (err) {
            next(err);
        } else {
            res.status(201).send(createdAlbum);
        }
    });
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

        Album.findOneAndUpdate(requestData._id, updateProperties, (err, result) => {
            if (err) {
                next(err);
            } else if (result) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        });
    } else {
        res.status(400).json({ errors: validationErrors.array() });
    }
};
