const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const Album = require('../models/album');

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
