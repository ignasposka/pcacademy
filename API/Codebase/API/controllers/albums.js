const Album = require('../models/album');

exports.get = async (req, res) => {
    const albums = await Album.find();
    res.status(200).send(albums);
};

exports.create = (req, res, next) => {
    const album = new Album({
        name: req.body.name,
        access: req.body.access
    });

    album.save((err, createdAlbum) => {
        if (err) {
            next(err);
        } else {
            res.status(201).send(createdAlbum);
        }
    });
};
