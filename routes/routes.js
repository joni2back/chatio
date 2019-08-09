const express = require('express');
const router = express.Router();
const ChatMessage  = require('../mongoose-models/ChatMessage');
const SessionChecker = require('../services/SessionChecker');

router.get('/history/:roomId/:sessionId', (req, res) => {

    const roomId = req.params.roomId;
    const sessionId = req.params.sessionId;
    const limit = 100;

    if (! SessionChecker(sessionId)) {
        res.status(404).send('Not found');
    }

    //implement pagination for lazy load
    var result = ChatMessage.find({
        roomId: roomId
    }).sort({
        date: -1
    }).limit(limit).then(r => {
        res.send(r.reverse());
    });
});

module.exports = router;