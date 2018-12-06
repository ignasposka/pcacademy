const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlbumSchema = new Schema({
    name: { type: String, required: true, max: 50 },
    visualElements: { type: [String] },
    access: {
        type: [{
            collaborator: mongoose.Schema.Types.ObjectId,
            rights: { type: String, enum: ['admin', 'write', 'read'] }
        }],
        required: true
    }
});

module.exports = mongoose.model('Album', AlbumSchema);
