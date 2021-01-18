module.exports = (error, req, res, next) => {
    console.log("INTERNAL", error);
    res.status(500).json({ message: "Something went wrong" });
};
