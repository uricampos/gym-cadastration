// importing express and express router
const express = require('express');
const router = express.Router();

// importing workouts controller
const workoutsController = require('../controllers/workoutsController');

// creating routes - get/get:id/post/put:id/delete:id - and using controller to manipulate data
router.get('/', workoutsController.get);

router.get('/:id', workoutsController.getId);

router.post('/', workoutsController.post);

router.put('/:id', workoutsController.put);

router.delete('/:id', workoutsController.delete)

module.exports = router;
