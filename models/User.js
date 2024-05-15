const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type: String, Required: true, Unique: true, Trimmed: true},
    email:{type: String, Required: true, Unique: true, match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please enter a valid email address']},
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
}, 
{
    toJSON: {
        getters: true,
    }
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;