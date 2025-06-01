const mongoose = require("mongoose");
require('dotenv').config();
const mongoURL = process.env.MONGO_URL 
mongoose.connect(mongoURL);

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}