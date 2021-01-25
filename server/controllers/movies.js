exports.getAllMovies = (req, res) => {
    res.status(200).json({
        results: req.user.movies.length,
        movies: req.user.movies
    });
};

exports.getMovieIds = (req, res) => {
    let ids = [];
    req.user.movies.forEach(movie => ids.push(movie._id));
    res.status(200).json({ results: ids.length, ids });
};

exports.getMovieDetails = (req, res) => {
    const { id } = req.params;
    const movies = req.user.movies.filter(movie => movie._id === Number(id));

    if (movies.length === 0) {
        return res.status(404).json({ message: "There is no movie with that id" });
    }

    res.status(200).json({ movie: movies[0] });
};

exports.addMovie = (req, res) => {
    const { user } = req;
    user.movies.addToSet(req.body);
    user.save();
    res.status(201).json({ movie: user.movies[user.movies.length - 1] });
};

exports.removeMovie = (req, res) => {
    const { user } = req;
    const { id } = req.params;
    user.movies.pull(id);
    user.save();
    res.status(204).end();
};
