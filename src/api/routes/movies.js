const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getMovies, getMovieById, getMoviesByCategory, putMovie, postMovie, deleteMovie } = require("../controllers/movies");

const moviesRouter = require("express").Router();

moviesRouter.get("/category/:category",[isAuth], getMoviesByCategory);
moviesRouter.get("/:id", [isAuth],  getMovieById);
moviesRouter.get("/", getMovies);
moviesRouter.post("/", [isAdmin], postMovie);
moviesRouter.put("/:id", [isAdmin], putMovie);
moviesRouter.delete("/:id", [isAdmin], deleteMovie);

module.exports = moviesRouter;