const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlbumSchema = new Schema({
    name: { type: String, required: true, max: 50 },
    mediaItems: { type: [String] },
    access: {
        type: [{
            collaborator: String,
            rights: { type: String, enum: ['admin', 'write', 'read'] }
        }],
        required: true
    }
});

module.exports = mongoose.model('Album', AlbumSchema);
