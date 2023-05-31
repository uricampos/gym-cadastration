const express = require('express');

const router = express.Router();

const Workout = require('../models/workout');

router.get('/', async (req, res) => {
    try {
        let workout = await Workout.find({});
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let workout = await Workout.findById(req.params.id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.post('/', async (req, res) => {
    let { name, exercises, students } = req.body;

    try {
        let workout = await Workout.create({
            name,
            exercises,
            students,
        });
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.put('/:id', async (req, res) => {
    let { name, exercises, students } = req.body;

    try {
        let workout = await Workout.findByIdAndUpdate(
            req.params.id,
            { name, exercises, students },
            { new: true }
        );
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let workout = await Workout.findByIdAndDelete(req.params.id)
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
