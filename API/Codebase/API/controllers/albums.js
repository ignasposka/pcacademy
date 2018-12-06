const Album = require('../models/album');

exports.get = async (request, response) => {
    const albums = await Album.find();
    response.status(200).send(albums);
};
