// importing express and express router
const express = require('express');
const router = express.Router();

// importing Exercises model to use its Schema and methods
const Exercises = require('../models/exercise');

// creating routes - get/get:id/post/put:id/delete:id - and using controller to manipulate data
router.get('/', async (req, res) => {
    try {
        let exercises = await Exercises.find({});
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let exercise = await Exercises.findById(req.params.id);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.post('/', async (req, res) => {
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
});

router.put('/:id', async (req, res) => {
    let { name, muscle, description } = req.body;
    try {
        let exercise = await Exercises.findByIdAndUpdate(
            req.param.id,
            { name, muscle, description },
            { new: true }
        );
        res.status(200).json(exercise);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let exercise = await Exercises.findByIdAndDelete(req.params.id);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;
