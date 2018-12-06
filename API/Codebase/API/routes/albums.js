const express = require('express');
const albumsController = require('../controllers/albums');

const router = express.Router();

// router.post('', albumsController.create);
// router.get('', albumsController.get);

router.route('/albums')
    .get(albumsController.get);

module.exports = router;
