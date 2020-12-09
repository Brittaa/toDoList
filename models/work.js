const mongoose = require('mongoose');
//const Task = require('./taskFromFile');
const Schema = mongoose.Schema;

const workSchema = new Schema({
    description: {
        type: String
    }
});

mongoose.model('Task', workSchema);
