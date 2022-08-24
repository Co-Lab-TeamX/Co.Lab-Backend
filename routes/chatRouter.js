const chatRouter = require("express").Router();
const ChatController = require("../controllers/chatController");

// chatRouter.get("/users/:sender_id/chat/:receiver_id", ChatController.getChat);
chatRouter.get("/chats/:sender_id/:receiver_id", ChatController.getChat);
chatRouter.post("/chats/:sender_id/:receiver_id", ChatController.createChat);
chatRouter.get("/details/messages/:user_id", ChatController.getAllContactsForAPosting)

module.exports = chatRouter;