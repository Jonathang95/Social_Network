const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type: String, Required: true, Unique: true, Trimmed: true},
    email:{type: String, Required: true, Unique: true},
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;