const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movies");
const handleError = require("./middleware/handleError");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

app.use(handleError);

module.exports = app;
