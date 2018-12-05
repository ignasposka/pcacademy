const mongoose = require('mongoose');

module.exports = (callback) => {
    const connString = process.env.NODE_ENV && process.env.NODE_ENV === 'test'
        ? process.env.CONNECTION_STRING_TEST : process.env.DB_CONNECTION_STRING;

    mongoose.connect(connString, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
};
