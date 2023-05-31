const mongoose = require('mongoose');

const exercisesSchema = mongoose.Schema({
    name: { type: String, required: true },
    muscle: { type: String, required: true },
    description: { type: String },
});

module.exports = mongoose.model('Exercises', exercisesSchema);
