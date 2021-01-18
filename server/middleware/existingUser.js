const User = require("../models/user");

module.exports = role => async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user && role === "login") {
            return res.status(404).json({
                message: "No registered user with that email"
            });
        }

        if (user && role === "register") {
            return res.status(400).json({
                message: "This email has already been registered"
            });
        }

        req.existingUser = user;
        next();
    } catch (error) {
        next(error);
    }
};
