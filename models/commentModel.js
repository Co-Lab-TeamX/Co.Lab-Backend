const pool = require('../db')

class Comments {
    static async getAllCommentsFromDB() {
        const sql = `SELECT * FROM comments`;
        const dbResult = await pool.query(sql);
        return dbResult.rows[0];
    }

    static async getCommentsFromSinglePostDB(post_id) {
        if (!post_id) throw new Error(`POST WITH ID:${post_id} DO NOT EXIST`);
        const sql = `SELECT * FROM comments WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows;
        // return dbResult.rows[0]; only returns a single comment
    }
    
    static async deleteCommentFromSinglePostDB(comment_id) {
        if (!comment_id) throw new Error(`COMMENT WITH ID:${comment_id} DO NOT EXIST`);
        const sql = `DELETE FROM comments WHERE comment_id = ($1) RETURNING *`;
        const dbResult = await pool.query(sql, [comment_id]);
        return dbResult.rows[0];
    }

    static async createNewCommentDB(commentData) {
        const { post_id, user_id, comment_body } = commentData;
        const sql = `INSERT INTO comments (post_id, user_id, comment_body) VALUES ($1, $2, $3) RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id, comment_body]);
        return dbResult.rows[0];
    }


}

module.exports = Comments