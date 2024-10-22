
const mongoose = require('mongoose');

//name database which is test is defaullt
//create schema
//sau khi tạo schema thì phải tạo model
//shape data
const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
const Kitten = mongoose.model('Kitten', kittySchema);

//create schema
const abcSchema = new mongoose.Schema({
    name: String
});
const abc = mongoose.model('abc', abcSchema);




module.exports = Kitten;

