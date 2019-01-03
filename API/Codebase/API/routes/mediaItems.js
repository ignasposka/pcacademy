const express = require('express');
const validator = require('express-validator/check');
const mediaItemsController = require('../controllers/mediaItems');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { upload } = require('../controllers/mediaItems');
const mediaItemsPolicy = require('../policies/mediaItems');

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


router.route('/albums/:_albumId/mediaItems')
    .post([
        jwtCheck,
        validator.checkSchema(mediaItemsPolicy.post),
        upload.array('picture'),
        (req, res, next) => mediaItemsController.createCb(req, res, next, validator)
    ]);

router.route('/albums/:_albumId/mediaItems/:_id')
    .get([
        validator.checkSchema(mediaItemsPolicy.getSingle),
        (req, res, next) => mediaItemsController.getSingle(req, res, next, validator)
    ])
    .delete([
        jwtCheck,
        validator.checkSchema(mediaItemsPolicy.delete),
        (req, res, next) => mediaItemsController.delete(req, res, next, validator)
    ]);

module.exports = router;
