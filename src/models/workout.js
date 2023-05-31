// importing mongoose
const mongoose = require('mongoose');

// creating workout Schema
const workoutSchema = mongoose.Schema({
    name: { type: String, required: true },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercises',
            requires: true,
        },
    ],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true,
        },
    ],
});

module.exports = mongoose.model('Workout', workoutSchema);
