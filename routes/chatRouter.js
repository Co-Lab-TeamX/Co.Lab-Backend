const chatRouter = require("express").Router();
const ChatController = require("../controllers/chatController");

// chatRouter.get("/users/:sender_id/chat/:receiver_id", ChatController.getChat);
chatRouter.get("/chats/:sender_id/:receiver_id", ChatController.getChat);
chatRouter.post("/chats/:sender_id/:receiver_id", ChatController.createChat);

module.exports = chatRouter;