const mongoose = require('mongoose');

module.exports = function(req, res, next) {
    mongoose.connect('mongodb://chat_io_mongo/chats', {
        useNewUrlParser: true
    }).then(() => {
        console.log('MongoDB Connected')
        next();
    }).catch(err => {
        console.log(err)
        req.send(500, 'Error connecting MongoDB')
    });
};
