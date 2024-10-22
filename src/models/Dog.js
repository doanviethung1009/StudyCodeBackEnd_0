const mongoose = require('mongoose')

//declare variables for schema
const dogSchema = new mongoose.Schema({
    name: String
});

// declare function and call to create schema
const dog = mongoose.model('dog', dogSchema);

module.exports = dog;