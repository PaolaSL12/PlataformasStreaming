const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getPlatforms, getPlatformById, getPlataformByName, putPlatform, postPlatform, deletePlatform } = require("../controllers/platforms");

const platformsRouter = require("express").Router();

platformsRouter.get("/name/:name", [isAuth], getPlataformByName);
platformsRouter.get("/:id", [isAuth], getPlatformById);
platformsRouter.get("/", getPlatforms);
platformsRouter.post("/", [isAdmin], postPlatform);
platformsRouter.put("/:id", [isAdmin], putPlatform);
platformsRouter.delete("/:id", [isAdmin], deletePlatform);

module.exports = platformsRouter;