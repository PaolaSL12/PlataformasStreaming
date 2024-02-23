const Movie = require("../models/movies")


const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const getMoviesByCategory = async (req, res, next) => {
    try {
        const { category } = req.params;
        const movies = await Movie.find({category});
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const getMovieById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const postMovie = async (req, res, next) => {
    try {
        const newMovie = new Movie(req.body);
        const movieSave = await newMovie.save();
        return res.status(201).json(movieSave)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const putMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newMovie = new Movie(req.body);
        newMovie._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate( id, newMovie, {new:true})
        return res.status(200).json(movieUpdated)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieDeleted = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieDeleted)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

module.exports = { getMovies, getMovieById, getMoviesByCategory, postMovie, putMovie, deleteMovie}