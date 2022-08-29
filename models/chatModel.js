const pool = require("../db");

class ChatModel {
    static async createChatFromDB(sender_id, receiver_id, message_body, post_id) {
        const sql = `
        INSERT INTO chats (sender_id, receiver_id, message_body, post_id) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [sender_id, receiver_id, message_body, post_id]);
        return dbResult.rows;
    }

    static async getChatFromDB(sender_id, receiver_id, post_id) {
        const sql = `
        SELECT * FROM chats 
        WHERE sender_id = ($1) AND receiver_id = ($2) 
        OR sender_id = ($2) AND receiver_id = ($1) and post_id = ($3)`;
        const dbResult = await pool.query(sql, [sender_id, receiver_id, post_id]);
        return dbResult.rows;
    }

    static async getAllContactsForAPostingFromDB(user_id, post_id) {
        const sql = `
        SELECT DISTINCT(users.id) AS user_id, users.profile_pic, users.username, chats.message_body, chats.time_posted
        FROM chats 
        JOIN users 
        ON chats.sender_id = users.id 
        WHERE receiver_id = ($1)
        AND post_id = ($2)`;
        const dbResult = await pool.query(sql, [user_id, post_id]);
        return dbResult.rows;
    }
}

module.exports = ChatModel;