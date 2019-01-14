const express = require('express');
const randomPhoto = require('../controllers/randomPhoto');

const router = express.Router();

router.route('/randomPhoto')
    .get(randomPhoto.get);

module.exports = router;
