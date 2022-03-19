const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    Description:{
        type: String,
        required: true
    },
    Completed:{
        type: Boolean,
        required: true
    }
});

const tasks=mongoose.model('tasks',taskSchema);

module.exports=tasks;

