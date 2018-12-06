const express = require('express');
const albumsController = require('../controllers/albums');

const router = express.Router();

router.route('/albums')
    .get(albumsController.get)
    .post(albumsController.create);

module.exports = router;
