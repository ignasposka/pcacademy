const express = require('express');
const albumsController = require('../controllers/albums');
const validator = require('express-validator/check');
const albumPolicy = require('../policies/album');

const router = express.Router();

router.route('/albums')
    .get(albumsController.get)
    .post([
        validator.checkSchema(albumPolicy),
        albumsController.create]);

module.exports = router;
