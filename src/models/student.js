const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    adress: { type: String },
    goal: { type: String },
    Workout: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workout',
        },
    ],
});

module.exports = mongoose.model('Student', studentSchema);
