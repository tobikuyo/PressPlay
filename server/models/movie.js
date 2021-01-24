const mongoose = require("mongoose");
const Actor = require("./actor");

const movieSchema = mongoose.Schema({
    _id: {
        type: Number,
        unique: true
    },
    title: String,
    overview: String,
    poster: String,
    backdrop: String,
    cast: [Actor]
});

module.exports = movieSchema;
