const router = require('express').Router();

exports.configure = (db, callback) => {
    router.route('./visualContent').get((req, res, next) => { res.status(200).send('Hello'); });
};
