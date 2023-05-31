const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    name: { type: String, required: true },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercises',
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
