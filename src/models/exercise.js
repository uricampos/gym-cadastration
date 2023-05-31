// importing mongoose
const mongoose = require('mongoose');

// creating exercises Schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    muscle: { type: String, required: true },
    description: { type: String },
});

module.exports = mongoose.model('Exercises', exerciseSchema);
