const pool = require('../db')

class Posts {
    static async getAllPostsFromDB() {
        const sql = `SELECT * FROM posts`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSinglePostFromDB(id) {
        const sql = `SELECT * FROM posts WHERE id=${id}`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async createNewPostDB(user_id, title, description, image) {
        console.log(user_id, title, description, image)
        const sql = `INSERT INTO posts (user_id, title, description, image) VALUES ('${user_id}', '${title}', '${description}', '${image}')`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }
}

module.exports = Posts