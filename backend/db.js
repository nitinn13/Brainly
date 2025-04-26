const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const adminSchema = new Schema({
    name: { required: true, type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const contentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    votes: {
        type: Number,
        default: 0
    },
    Link: {
        type: String
    },
    status: {
        type: String,
        default: "public"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    upvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    downvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
})

const adminModel = mongoose.model('admin', adminSchema);
const contentModel = mongoose.model('content', contentSchema);
const userModel = mongoose.model('user', userSchema);

module.exports = {
    adminModel,
    userModel,
    contentModel
};