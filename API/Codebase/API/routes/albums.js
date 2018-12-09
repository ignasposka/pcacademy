const express = require('express');
const albumsController = require('../controllers/albums');
const validator = require('express-validator/check');
const albumPolicy = require('../policies/album');

const router = express.Router();

router.route('/albums')
    .get(albumsController.get)
    .post([
        validator.checkSchema(albumPolicy.create),
        albumsController.create])
    .patch([validator.checkSchema(albumPolicy.patch),
        (req, res, next) => albumsController.patch(req, res, next, validator)]);

module.exports = router;
