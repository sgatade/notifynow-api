const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    updates: [{
        title: {
            type: String
        },
        message: {
            type: String
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    messages: [{
        message: {
            type: String
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;