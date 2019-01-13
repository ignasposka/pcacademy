const fetch = require('node-fetch');

exports.get = (req, res, next) => {
    fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${getRandomInt()}`, {
        method: 'get',
        headers: { Authorization: process.env.PEXELS_API_KEY }
    })
        .then((response) => response.json())
        .then((data) => {
            fetch(data.photos[0].src.large).then(({ body }) => {
                body.pipe(res);
            });
        })
        .catch((err) => next(err));
};

function getRandomInt() {
    const min = 1;
    const max = 50;
    return Math.floor(Math.random() * (max - min)) + min;
}
