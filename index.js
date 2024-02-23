require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const moviesRouter = require("./src/api/routes/movies");
const platformsRouter = require("./src/api/routes/platforms");
const usersRoutes = require("./src/api/routes/users");

const app = express();

app.use(express.json());

connectDB();



app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/platforms", platformsRouter);
app.use("/api/v1/users", usersRoutes);

app.use("*", (req, res, next) => {
    return res.status(400).json("Route not Found")
})

app.listen(3000, () => {
    console.log("servidor http://localhost:3000");
})