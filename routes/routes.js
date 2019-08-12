const express = require('express');
const router = express.Router();
const ChatMessage  = require('../mongoose-models/ChatMessage');
const SessionChecker = require('../services/SessionChecker');

router.get('/history/:roomId/:sessionId/:lastOne?', (req, res) => {

    const roomId = req.params.roomId;
    const sessionId = req.params.sessionId;
    const lastOne = req.params.lastOne;
    const limit = 10;
    const sort = {
        date: -1 
    };

    const cond = {
        roomId: roomId,
    };

    if (/[a-f\d]{24}/.test(lastOne)) {
        cond._id = {
            $lt: lastOne
        }
    }

    if (! SessionChecker(sessionId)) {
        res.status(404).send('Not found');
    }

    //implement pagination for lazy load
    var result = ChatMessage.find(cond, {}, {sort}).limit(limit).then(r => {
        res.send(r.reverse());
    }).catch(e => {
        res.status(500).send(e);
    })
});

module.exports = router;