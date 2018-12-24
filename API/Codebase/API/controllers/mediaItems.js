const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

exports.create = (req, res, next) => {
    const upload = multer({ dest: 'uploads/' });

    upload.single('picture');
};
