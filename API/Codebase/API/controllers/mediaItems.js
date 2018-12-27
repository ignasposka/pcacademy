const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const Album = require('../models/album');
const filter = require('express-validator/filter');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        crypto.pseudoRandomBytes(16, (err, raw) => {
            cb(null, `${raw.toString('hex') + Date.now()}.${mime.getExtension(file.mimetype)}`);
        });
    }
});

const upload = multer({ storage });

exports.upload = upload;

exports.createCb = (req, res, next) => {
    Album.findByIdAndUpdate(req.params._albumId, { $push: { mediaItems: req.file.filename } },
        (err, result) => {
            if (err) {
                next(err);
            } else if (result) {
                res.status(201).send({ filename: req.file.filename });
            } else {
                res.status(404).send();
            }
        });
};

exports.getSingle = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        Album.findById(requestData._albumId, (err, album) => {
            if (err) {
                next(err);
            } else if (album.indexOf(requestData._id) > -1) {
                res.sendFile(`uploads/${requestData._id}`);
            } else {
                res.sendStatus(404);
            }
        });
    }
};
