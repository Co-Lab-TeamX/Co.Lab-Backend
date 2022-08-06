const feedRouter = require("express").Router();
const { getFeed, getLikes } = require("../controllers/feedController");
const checkAuth = require('../middleware/checkAuth');

feedRouter.get("/feed", getFeed);

feedRouter.get("/likes", getLikes);

module.exports = feedRouter;