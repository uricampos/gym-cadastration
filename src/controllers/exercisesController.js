// importing Exercises model to use its Schema and methods
const Exercises = require('../models/exercise');

module.exports = {
    get: async (req, res) => {
        try {
            let exercises = await Exercises.find({});
            res.status(200).json(exercises);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getId: async (req, res) => {
        try {
            let exercise = await Exercises.findById(req.params.id);
            res.status(200).json(exercise);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    post: async (req, res) => {
        let { name, muscle, description } = req.body;

        try {
            let exercise = await Exercises.create({
                name,
                muscle,
                description,
            });
            res.status(200).json(exercise);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    put: async (req, res) => {
        let { name, muscle, description } = req.body;

        try {
            let exercise = await Exercises.findByIdAndUpdate(
                req.params.id,
                { name, muscle, description },
                { new: true }
            );
            res.status(200).json(exercise);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            let exercise = await Exercises.findByIdAndDelete(req.params.id);
            res.status(200).json(exercise);
        } catch (error) {
            res.status(422).json(error);
        }
    },
};
