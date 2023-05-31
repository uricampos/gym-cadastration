const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://localhost/gym-cadastration', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB database');
    })
    .catch((err) => console.log(err));
