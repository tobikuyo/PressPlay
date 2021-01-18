const mongoose = require("mongoose");
const Movie = require("./movie");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    movies: [Movie]
});

module.exports = mongoose.model("user", userSchema);
