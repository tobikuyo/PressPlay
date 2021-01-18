const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    _id: {
        type: Number,
        unique: true
    },
    title: String,
    overview: String,
    poster: String,
    backdrop: String,
    rating: Number,
    genres: [String],
    release_date: String
});

module.exports = movieSchema;
