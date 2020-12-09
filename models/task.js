const mongoose = require('mongoose');
//const Task = require('./taskFromFile');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String
    }
});

mongoose.model('Task', taskSchema);
