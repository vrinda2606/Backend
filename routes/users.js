const mongoose = require('mongoose');

mongoose.connect("mongoose://127.0.0.1:27017/PracticedB");

const userschema = mongoose.Schema({
    username : String,
    name : String,
    age : Number
});

module.exports = mongoose.model("user",userschema);