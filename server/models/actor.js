const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({
    name: String,
    profile_path: String
});

module.exports = actorSchema;
