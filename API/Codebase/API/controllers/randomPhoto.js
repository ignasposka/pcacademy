const fetch = require('node-fetch');

exports.get = (req, res, next) => {
    fetch('https://api.pexels.com/v1/curated?per_page=1&page=1', {
        method: 'get',
        headers: { Authorization: process.env.PEXELS_API_KEY }
    })
        .then((response) => response.json())
        .then((data) => {
            fetch(data.photos[0].src.large).then((photo) => {
                res.status(200).send(photo);
            });
        })
        .catch((err) => next(err));
};
