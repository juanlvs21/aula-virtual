const mongoose = require('mongoose');

// const URI = 'mongodb://juanlvs21:jl.97.vs@ds243212.mlab.com:43212/mern-tasks';
const URI = 'mongodb://localhost/aula-virtual';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;