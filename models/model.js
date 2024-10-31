const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    announcement: {
        type: String,
        require: true
    }
}, { TimeRanges: true });

module.exports = mongoose.model('Ann', userSchema);