const express = require('express');
const albumsController = require('../controllers/albums');
const validator = require('express-validator/check');
const albumPolicy = require('../policies/album');

const router = express.Router();

router.route('/albums')
    .get(albumsController.get)
    .post([
        validator.checkSchema(albumPolicy.create),
        albumsController.create]);

router.route('/albums/:_id')
    .get([
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
