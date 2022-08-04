const interestedRouter = require("express").Router();
const { getAllInterested, addInterested, deleteInterested } = require("../controllers/interestedController");

interestedRouter.get('/posts/:post_id/interested', getAllInterested);

interestedRouter.post('/posts/:post_id/interested', addInterested);

interestedRouter.delete('/posts/:post_id/interested', deleteInterested);


module.exports = interestedRouter;