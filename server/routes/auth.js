const router = require("express").Router();
const { createUser, loginUser } = require("../controllers/auth");
const { validateLogin, validateRegister } = require("../middleware/validate");
const checkExistingUser = require("../middleware/existingUser");

router
    .route("/register")
    .post(validateRegister, checkExistingUser("register"), createUser);
    
router
    .route("/login")
    .post(validateLogin, checkExistingUser("login"), loginUser);

module.exports = router;
