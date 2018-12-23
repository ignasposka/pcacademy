const express = require('express');
const validator = require('express-validator/check');
const mediaItemsController = require('../controllers/mediaItems');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://ignasposka.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'space-saver',
    issuer: 'https://ignasposka.eu.auth0.com/',
    algorithms: ['RS256']
});

const router = express.Router();

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
let u;

const upload = multer({ storage });

upload.single('picture');

router.route('/albums/:_id/mediaItems')
    .post([
        upload.single('picture'),
        (req, res, next) => {
            res.status(201).send();
        }
    ]);

module.exports = router;
