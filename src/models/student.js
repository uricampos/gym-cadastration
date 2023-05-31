// importing mongoose
const mongoose = require('mongoose');

// creating student Schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    adress: { type: String },
    goal: { type: String },
    workout: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workout',
            required: true,
        },
    ],
});

module.exports = mongoose.model('Student', studentSchema);
