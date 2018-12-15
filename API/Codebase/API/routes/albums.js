const express = require('express');
const albumsController = require('../controllers/albums');
const validator = require('express-validator/check');
const albumPolicy = require('../policies/album');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwks = require('jwks-rsa');

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

router.route('/albums')
    .get(albumsController.get)
    .post([
        validator.checkSchema(albumPolicy.create),
        (req, res, next) => albumsController.create(req, res, next, validator)]);

router.route('/albums/:_id')
    .get([
        jwtCheck,
        validator.checkSchema(albumPolicy.get),
        (req, res, next) => albumsController.getSingle(req, res, next, validator)
    ])
    .patch([
        validator.checkSchema(albumPolicy.patch),
        (req, res, next) => albumsController.patch(req, res, next, validator)
    ])
    .delete([
        validator.checkSchema(albumPolicy.delete),
        (req, res, next) => albumsController.delete(req, res, next, validator)
    ]);

module.exports = router;
