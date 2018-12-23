const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

exports.create = (req, res, next) => {
    // const s3 = new aws.S3();

    // const upload = multer({
    //     storage: multerS3({
    //         s3,
    //         bucket: 'capsaver',
    //         metadata(req, file, cb) {
    //             cb(null, { fieldName: file.fieldname });
    //         },
    //         key(req, file, cb) {
    //             cb(null, Date.now().toString());
    //         }
    //     })
    // });

    const upload = multer({ dest: 'uploads/' });

    upload.single('picture');
};
