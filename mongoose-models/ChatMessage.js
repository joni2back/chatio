const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
    },
    orgname: {
        type: String,
        required: true
    },
    userid: {
        type: Number,
        required: true
    },
    orgid: {
        type: Number,
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    room: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);