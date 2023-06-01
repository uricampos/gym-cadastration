// importing Workouts models to use its Schema and methods
const Workouts = require('../models/workout');

module.exports = {
    get: async (req, res) => {
        try {
            let workouts = await Workouts.find({});
            res.status(200).json(workouts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getId: async (req, res) => {
        try {
            let workout = await Workouts.findById(req.params.id);
            res.status(200).json(workout);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    post: async (req, res) => {
        let { name, exercises, students } = req.body;

        try {
            let workout = await Workouts.create({ name, exercises, students });
            res.status(200).json(workout);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    put: async (req, res) => {
        let { name, exercises, students } = req.body;
        try {
            let workout = await Workouts.findByIdAndUpdate(
                req.params.id,
                { name, exercises, students },
                { new: true }
            );
            res.status(200).json(workout);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            let workout = await Workouts.findByIdAndDelete(req.params.id);
            res.status(200).json(workout);
        } catch (error) {
            res.status(422).json(error);
        }
    },
};
