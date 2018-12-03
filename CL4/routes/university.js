const express = require('express');
const universityController = require('../controllers/university');

const router = express.Router();

router.post('', universityController.create);
router.get('', universityController.get);

module.exports = router;