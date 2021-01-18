const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("authorization");

    if (!token) {
        return res.status(401).json({ message: "You need a valid token" });
    }

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "You need a valid token" });
        }

        req.user_id = decoded.id;
        next();
    });
};
