// importing express and routes
const express = require('express');
const studentsRouter = require('./src/routes/students');
const workoutsRouter = require('./src/routes/workouts');
const exercisesRouter = require('./src/routes/exercises');

// using the database config file
require('./config/database');

// using express
const app = express();

// using express.json
app.use(express.json());

// using routes
app.use('/students', studentsRouter);
app.use('/workouts', workoutsRouter);
app.use('/exercises', exercisesRouter);

// server listener
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
