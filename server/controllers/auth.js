const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 14);
        const user = await User.create({ name, email, password: hash });

        res.status(201).json({ user_id: user._id });
    } catch (error) {
        next(error);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const { password } = req.body;
        const isValid = await bcrypt.compare(password, req.existingUser.password);

        if (!isValid) {
            return res.status(403).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ id: req.existingUser._id }, process.env.SECRET);
        res.header("authorization", token).json({ token });
    } catch (error) {
        next(error);
    }
};
