const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UniversitySchema = new Schema({
    name: {type: String, required: true, max: 100}
}, {toJSON: {virtuals: true}});

UniversitySchema.virtual('lectors', {
    ref: 'Lector',
    localField: '_id',
    foreignField: 'university'
})

module.exports = mongoose.model('University', UniversitySchema);