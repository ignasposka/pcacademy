const University = require('../models/university');

exports.create = async function (request, response) {
    let university = new University({
        name: request.body.name
    });

    try {
        await university.save();
        response.send(201);
    }
    catch (e){
        response.status(500).send(e.message);
    }
}

exports.get = async function (request, response) {
    let universities = await University.find().populate('lectors');
    response.send(universities);
}