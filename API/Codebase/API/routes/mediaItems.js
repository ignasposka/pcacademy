const express = require('express');
const validator = require('express-validator/check');
const mediaItemsController = require('../controllers/mediaItems');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { upload } = require('../controllers/mediaItems');

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
        upload.single('picture'),
        mediaItemsController.createCb
    ]);

module.exports = router;
