const mongoose = require("mongoose");
const Actor = require("./actor");

const movieSchema = mongoose.Schema({
    _id: Number,
    title: String,
    overview: String,
    poster: String,
    backdrop: String,
    cast: [Actor]
});

module.exports = movieSchema;
