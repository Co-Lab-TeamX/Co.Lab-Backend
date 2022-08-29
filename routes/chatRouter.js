const chatRouter = require("express").Router();
const ChatController = require("../controllers/chatController");

chatRouter.get("/chats/:post_id/:sender_id/:receiver_id", ChatController.getChat);
chatRouter.post("/chats/:post_id/:sender_id/:receiver_id", ChatController.createChat);
chatRouter.get("/details/:post_id/:user_id", ChatController.getAllContactsForAPosting)

module.exports = chatRouter;