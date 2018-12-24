const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const crypto = require('crypto');
const mime = require('mime');

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
    res.status(201).send();
};
