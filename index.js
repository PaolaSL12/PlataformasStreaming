require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");

const app = express();

connectDB();

app.use("*", (req, res, next) => {
    return res.status(400).json("Route not Found")
})

app.listen(3000, () => {
    console.log("servidor http://localhost:3000");
})