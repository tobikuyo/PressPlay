const User = require("../models/user");

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.user_id);
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};
