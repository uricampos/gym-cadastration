// importing express and express router
const express = require('express');
const router = express.Router();

// importing Workouts models to use its Schema and methods
const Workouts = require('../models/workout');

// creating routes - get/get:id/post/put:id/delete:id
router.get('/', async (req, res) => {
    try {
        let workouts = await Workouts.find({});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let workout = await Workouts.findById(req.params.id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.post('/', async (req, res) => {
    let { name, exercises, students } = req.body;

    try {
        let workout = await Workouts.create({
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
        let workout = await Workouts.findByIdAndUpdate(
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
        let workout = await Workouts.findByIdAndDelete(req.params.id)
        res.status(200).json(workout);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
