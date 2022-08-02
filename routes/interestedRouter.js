const { getAllInterested, getAllInterestedSingleUser, createNewInterested, deleteSingleInterested } = require("../controllers/interestedController");

const interestedRouter = require("express").Router();

interestedRouter.get('/interested', getAllInterested);

interestedRouter.get('/interested/:user_id', getAllInterestedSingleUser);

// not sending any new data do we keep this as a GET or POST?
//should I reorder it to always have user_id and them post_id?
interestedRouter.get('/interested/:post_id/:user_id', createNewInterested);

interestedRouter.delete('/interested/:post_id/:user_id', deleteSingleInterested);


module.exports = interestedRouter;