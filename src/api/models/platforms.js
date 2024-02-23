const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
    name:{ type: String, require: true},
    imgUrl: { type: String, require: true},
    movies: [{ type: mongoose.Types.ObjectId, ref: "movies"}]
}, {
    timestamps:true,
    collection: "platforms"
})

const Platform = mongoose.model("platforms", platformSchema, "platforms");

module.exports = Platform