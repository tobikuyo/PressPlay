const router = require("express").Router();
const restrict = require("../middleware/restrict");
const findUser = require("../middleware/findUser");
const { 
    addMovie, 
    getAllMovies, 
    removeMovie, 
    getMovieDetails, 
    getMovieIds
} = require("../controllers/movies");

router
    .route("/")
    .get(restrict, findUser, getAllMovies)
    .put(restrict, findUser, addMovie);

router
    .route("/ids")
    .get(restrict, findUser, getMovieIds);
    
router
    .route("/:id")
    .get(restrict, findUser, getMovieDetails)
    .delete(restrict, findUser, removeMovie);

module.exports = router;