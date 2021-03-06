const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    organizationId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    roomId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);