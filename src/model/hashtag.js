const mongoose = require('mongoose');

const hashtagSchma = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
},{timestamps: true});

const Hashtag = mongoose.model('Hashtag',hashtagSchma);
module.exports = Hashtag;