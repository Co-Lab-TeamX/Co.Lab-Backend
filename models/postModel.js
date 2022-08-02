const pool = require('../db')

class Posts {
    static async getAllPostsFromDB() {
        const sql = `SELECT * FROM posts`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSinglePostFromDB(post_id) {
        if (!post_id) throw new Error(`POST WITH ID:${post_id} DO NOT EXIST`);
        const sql = `SELECT * FROM posts WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows[0];
    }

    static async createNewPostDB(postData) {
        const { user_id, title, description, image } = postData;
        const sql = `INSERT INTO posts (user_id, title, description, image) VALUES ($1, $2, $3, $4) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, title, description, image]);
        return dbResult.rows[0];
    }
}

module.exports = Posts