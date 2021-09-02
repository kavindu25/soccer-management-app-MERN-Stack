import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    iscoach: {
        type: Boolean,
        default: false
    },
    team: {
        type: Number
    },
    speed: {
        type: Number,
        enu: [1, 2, 3]
    },
    strength: {
        type: Number,
        enu: [1, 2, 3]
    },
    endurance: {
        type: Number,
        enu: [1, 2, 3]
    },
    sability: {
        type: Number,
        enu: [1, 2, 3]
    },
    techniques: {
        type: Number,
        enu: [1, 2, 3]
    },
    tactical: {
        type: Number,
        enu: [1, 2, 3]
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});