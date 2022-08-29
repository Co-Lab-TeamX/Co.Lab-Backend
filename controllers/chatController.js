const ChatModel = require("../models/chatModel");

class ChatController {
    static getChat = async (req, res) => {
        const { sender_id, receiver_id, post_id } = req.params;
        const chatArray = await ChatModel.getChatFromDB(sender_id, receiver_id, post_id);
        return res.status(200).json(chatArray);
    }
    static createChat = async (req, res) => {
        const { sender_id, receiver_id, post_id } = req.params;
        const { message_body } = req.body;
        const newChat = await ChatModel.createChatFromDB(sender_id, receiver_id, message_body, post_id);
        return res.status(201).json(newChat);
    }

    static getAllContactsForAPosting = async (req, res) => {
        const { user_id, post_id } = req.params
        const allContacts = await ChatModel.getAllContactsForAPostingFromDB(user_id, post_id);
        return res.status(201).json(allContacts);
    }

}


module.exports = ChatController;