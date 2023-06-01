// importing express and express router
const express = require('express');
const router = express.Router();

// importing students controller
const studentsController = require('../controllers/studentsController');

// creating routes - get/get:id/post/put:id/delete:id - and using controller to manipulate data
router.get('/', studentsController.get);

router.get('/:id', studentsController.getId);

router.post('/', studentsController.post);

router.put('/:id', studentsController.put);

router.delete('/:id', studentsController.delete);

module.exports = router;
