const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getUsers, register, login, deleteUser, updatedUser } = require("../controllers/users");

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAuth], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.delete("/delete/:id",[isAdmin], deleteUser);
usersRoutes.put("/update/:id", [isAuth], updatedUser)


module.exports = usersRoutes;