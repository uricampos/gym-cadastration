// importing express and express router
const express = require('express');
const router = express.Router();

// importing exercises controller
const exercisesController = require('../controllers/exercisesController');

// creating routes - get/get:id/post/put:id/delete:id - and using controller to manipulate data
router.get('/', exercisesController.get);

router.get('/:id', exercisesController.getId);

router.post('/', exercisesController.post);

router.put('/:id', exercisesController.put);

router.delete('/:id', exercisesController.delete);

module.exports = router;
