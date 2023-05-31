const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    name: { type: String, required: True },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercises',
        },
    ],
});

module.exports = mongoose.model('Workout', workoutSchema);
