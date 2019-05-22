const mongoose = require('mongoose');

module.exports = function(req, res, next) {
    mongoose.connect('mongodb://mongo/chats', {
        useNewUrlParser: true
    }).then(() => {
        console.log('MongoDB Connected')
        next();
    }).catch(err => {
        console.log(err)
        req.send(500, 'Error connecting MongoDB')
    });
};