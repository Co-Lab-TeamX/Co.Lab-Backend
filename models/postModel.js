const pool = require('../db')

class Posts {
    static async getAllPostsFromDB() {
        const sql = `
        SELECT posts.*, users.profile_pic, users.username 
        FROM posts 
        JOIN users ON posts.user_id = users.id
        ORDER BY posts.time_posted DESC`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getAllPostsForAUserFromDB(user_id) {
        const sql = `
        SELECT posts.*, users.profile_pic, users.username
        FROM posts 
        JOIN users ON posts.user_id = users.id WHERE posts.user_id = ($1)
        ORDER BY posts.time_posted DESC`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows
    }

    static async getSinglePostFromDB(post_id) {
        const sql = `
        SELECT * 
        FROM posts 
        WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows[0];
    }

    static async createNewPostDB(postData) {
        const { user_id, title, description, image } = postData;
        const sql = `
        INSERT INTO posts (user_id, title, description, image) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, title, description, image]);
        return dbResult.rows[0];
    }

    static async deletePostFromDB(post_id) {
        await pool.query(`DELETE FROM interested WHERE post_id = ($1)`, [post_id]);
        await pool.query(`DELETE FROM comments WHERE post_id = ($1)`, [post_id]);
        await pool.query(`DELETE FROM posts WHERE id = ($1) RETURNING *`, [post_id]);
    }
}

module.exports = Posts