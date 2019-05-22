const express = require('express');
const router = express.Router();
const ChatMessage = require('../mongoose-models/ChatMessage');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/history/:room', (req, res) => {
    const room = req.params.room;
    const limit = 100;

    var result = ChatMessage.find({
        room: room
    }).sort({
        date: -1
    }).limit(limit).then(r => {
        res.send(r.reverse());
    });
});


module.exports = router;