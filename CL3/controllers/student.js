const Student = require('../models/student');

exports.create = function (request, response) {
    let student = new Student({
        name: request.body.name,
        age: request.body.age
    });

    student.save((err) => {
        if (err) {
            response.status(400).send(err.message);
        }
        response.send(201);
    });
}

exports.get = function (request, response) {
    Student.find((error, students) => {
        response.send(students);
    })
}

exports.patch = (req, res) => {
    student = {
        name: req.body.name,
        age: req.body.age
    };
    Student.findOneAndUpdate({ _id: req.body._id }, student, (err) => {
        if (err) {
            res.status(400).send(err.message);
        }
        res.send(204);
    })
}

exports.delete = (req, res) => {
    Student.findByIdAndDelete(req.params._id, (err) => {
        if(err){
            res.status(404).send(err.message);
        }
        res.send(204)
    })
}

exports.getOne = (req, res) => {
    Student.findById(req.params._id, (err, data) => {
        if (err) {
            console.log(err.message);
            res.status(400).send(err.message);
        }
        console.log(data);
        res.send(data);
    })
};