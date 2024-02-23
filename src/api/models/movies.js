const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{ type: String, require: true},
    imgUrl: { type: String, require: true},
    releaseYear: { type: Number, require: true},
    category: [{ type: String, require:true, enum: ["comedy", "drama", "suspense", "romance", "action", "Science fiction", "Super Hero", "sports", "animation"]}],
    description: { type:String, require: true}
}, {
    timestamps: true,
    collection: "movies"
})

const Movie = mongoose.model("movies", movieSchema, "movies");

module.exports = Movie;