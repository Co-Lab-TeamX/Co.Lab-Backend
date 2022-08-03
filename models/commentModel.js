const pool = require('../db')

class Comments {
    static async getAllCommentsFromDB() {
        const sql = `
        SELECT comments.*, users.username, users.profile_pic 
        FROM comments 
        JOIN users ON comments.user_id = users.id
        ORDER BY time_posted ASC`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getAllCommentCountsFromDB() {
        const sql = `
        SELECT post_id, COUNT(user_id) AS comment_count
		FROM comments
        GROUP BY post_id`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSpecificCommentFromDB(comment_id) {
        const sql = `
        SELECT comments.*, users.username, users.profile_pic 
        FROM comments 
        JOIN users ON comments.user_id = users.id
        WHERE comments.id = ($1)`;
        const dbResult = await pool.query(sql, [comment_id])
        return dbResult.rows[0]
    }

    static async getCommentsForSinglePostFromDB(post_id) {
        const sql = `
        SELECT comments.*, users.username, users.profile_pic 
        FROM comments 
        JOIN users ON comments.user_id = users.id
        WHERE post_id = ($1) 
        ORDER BY time_posted ASC`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows;
    }

    static async postNewCommentFromDB(commentData) {
        const { post_id, user_id, comment_body } = commentData;
        const sql = `
        INSERT INTO comments (post_id, user_id, comment_body) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id, comment_body]);
        return dbResult.rows[0];
    }

    static async deleteCommentFromDB(comment_id) {
        const sql = `
        DELETE FROM comments 
        WHERE id = ($1) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [comment_id]);
        return dbResult.rows[0];
    }
}

module.exports = Comments