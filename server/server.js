const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = app;
