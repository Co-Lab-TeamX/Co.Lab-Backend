const pool = require('../db')

class Interested {
    static async getAllInterestedFromDB() {
        const sql = `SELECT * FROM interested`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
        // return dbResult.rows[0]; only shows one result
    }

    static async getAllInterestedSingleUserDB(user_id) {
        if (!user_id) throw new Error(`PLEASE ENTER A USER ID`);
        const sql = `SELECT * FROM interested WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows;
        // return dbResult.rows[0]; only returns a single interested post
    }

    static async createNewInterestedDB(postData) {
        const { post_id, user_id } = postData;
        const sql = `INSERT INTO interested (post_id, user_id) VALUES ($1, $2) RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id]);
        return dbResult.rows[0];
    }

    static async deleteSingleInterestedDB(postData) {
        const { post_id, user_id } = postData;
        if (!postData) throw new Error(`PLEASE ENTER POST ID AND USER ID`);
        const sql = `DELETE FROM interested WHERE (post_id = $1 AND user_id = $2) RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id]);
        return dbResult.rows[0];
    }

}

module.exports = Interested