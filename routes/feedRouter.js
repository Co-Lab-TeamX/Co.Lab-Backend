const feedRouter = require("express").Router();
const { getFeed, getLikes } = require("../controllers/feedController");
const checkAuth = require('../middleware/checkAuth');

feedRouter.get("/feed", checkAuth, getFeed);

feedRouter.get("/likes", getLikes);

module.exports = feedRouter;