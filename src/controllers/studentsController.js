// importing Workouts models to use its Schema and methods
const Students = require('../models/student');

module.exports = {
    get: async (req, res) => {
        try {
            let students = await Students.find({});
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getId: async (req, res) => {
        try {
            let student = await Students.findById(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    post: async (req, res) => {
        let { name, email, phone, adress, goal, workout } = req.body;

        try {
            let student = await Students.create({
                name,
                email,
                phone,
                adress,
                goal,
                workout,
            });
            res.status(200).json(student);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    put: async (req, res) => {
        let { name, email, phone, adress, goal, workout } = req.body;

        try {
            let student = await Students.findByIdAndUpdate(
                req.params.id,
                { name, email, phone, adress, goal, workout },
                { new: true }
            );
            res.status(200).json(student);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            let student = await Students.findByIdAndDelete(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            req.status(422).json(error);
        }
    },
};
