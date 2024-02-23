const { getMovies, getMovieById, getMoviesByCategory, putMovie, postMovie, deleteMovie } = require("../controllers/movies");

const moviesRouter = require("express").Router();

moviesRouter.get("/category/:category", getMoviesByCategory);
moviesRouter.get("/:id", getMovieById);
moviesRouter.get("/", getMovies);
moviesRouter.post("/", postMovie);
moviesRouter.put("/:id", putMovie);
moviesRouter.delete("/:id", deleteMovie);

module.exports = moviesRouter;