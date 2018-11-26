const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

router.post('', studentController.create);
router.get('', studentController.get);
router.patch('', studentController.patch);
router.get('/:_id', studentController.getOne);
router.delete('/:_id', studentController.delete);

module.exports = router;