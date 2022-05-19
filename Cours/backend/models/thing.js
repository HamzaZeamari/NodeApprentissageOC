const mongoose = require('mongoose');

const thing_schema = mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, require: true},
    imageUrl: { type: String, require: true},
    userId: { type: String, require: true},
    price: { type: Number, require: true},
});

module.exports = mongoose.model('Thing',thing_schema);