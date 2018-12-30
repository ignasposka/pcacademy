const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const Album = require('../models/album');
const filter = require('express-validator/filter');
const fs = require('fs');

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
    Album.findByIdAndUpdate(req.params._albumId, {
        $push: { mediaItems: req.files.map((file) => file.filename) }
    },
    (err, result) => {
        if (err) {
            next(err);
        } else if (result) {
            res.status(201).send({ filenames: req.files.map((file) => file.filename) });
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
            } else if (album.mediaItems.indexOf(requestData._id) > -1) {
                res.sendFile(`${process.env.ROOT_DIR}/uploads/${requestData._id}`);
            } else {
                res.sendStatus(404);
            }
        });
    }
};

exports.delete = (req, res, next, validator) => {
    const validationErrors = validator.validationResult(req);

    if (validationErrors.isEmpty()) {
        const requestData = filter.matchedData(req);
        Album.findByIdAndUpdate(requestData._albumId,
            { $pull: { mediaItems: requestData._id } }, (err, data) => {
                if (err) {
                    next(err);
                } else if (data.mediaItems.includes(requestData._id)) {
                    deleteFile(`uploads/${requestData._id}`)
                        .then(() => res.status(204).send())
                        .catch((err) => {
                            if (err.errno === -4058) {
                                res.status(204).send();
                            }
                        });
                } else {
                    res.status(404).send();
                }
            });
    }
};

function deleteFile(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
