const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/', async (req, res) => {
    try {
        let students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.post('/', async (req, res) => {
    let { name, email, phone, adress, goal } = req.body;

    try {
        let student = await Student.create({
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
    let { name, email, phone, adress, goal } = req.body;

    try {
        let student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, adress, goal },
            { new: true }
        );
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;
