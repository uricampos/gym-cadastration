// importing express and express router
const express = require('express');
const router = express.Router();

// importing Students model to use its Schema and methods
const Students = require('../models/student');

// creating routes - get/get:id/post/put:id/delete:id
router.get('/', async (req, res) => {
    try {
        let students = await Students.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let student = await Students.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.post('/', async (req, res) => {
    let { name, email, phone, adress, goal } = req.body;

    try {
        let student = await Students.create({
            name,
            email,
            phone,
            adress,
            goal,
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.put('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
    try {
        let student = await Students.findByIdAndDelete(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;
