// const multer = require('multer');
// const { v1: uuidv1 } = require('uuid');

// const MIME_TYPE_MAP = {
//   'image/png': 'png',
//   'image/jpeg': 'jpeg',
//   'image/jpg': 'jpg',
// };

// const fileUpload = multer({
//   limits: 500000,
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/images');
//     },
//     filename: (req, file, cb) => {
//       const ext = MIME_TYPE_MAP[file.mimetype];
//       cb(null, uuidv1() + '.' + ext);
//     },
//   }),
//   fileFilter: (req, file, cb) => {
//     const isValid = !!MIME_TYPE_MAP[file.mimetype];
//     let error = isValid ? null : new Error('Invalid mime type !');
//     cb(error, isValid);
//   },
// });

// module.exports = fileUpload;

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    secretKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const fileUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'testing_META_DATA' });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : new Error('Invalid mime type !');
        cb(error, isValid);
    },
});

module.exports = fileUpload;
