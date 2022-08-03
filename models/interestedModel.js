const pool = require('../db')

class Interested {
    static async getAllInterestedFromDB(post_id) {
        const sql = `
        SELECT COUNT(user_id) 
        FROM interested 
        WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id]);
        return dbResult.rows[0];
    }

    static async createNewInterestedFromDB(newInterestData) {
        const { post_id, user_id } = newInterestData;
        const sql = `
        INSERT INTO interested (post_id, user_id) 
        VALUES ($1, $2) 
        RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id]);
        return dbResult.rows[0];
    }

    static async deleteSingleInterestedDB(interestedDeleteData) {
        const { post_id, user_id } = interestedDeleteData;
        const sql = `
        DELETE FROM interested 
        WHERE post_id = ($1) AND user_id = ($2)
        RETURNING *`;
        const dbResult = await pool.query(sql, [post_id, user_id]);
        return dbResult.rows[0];
    }

}

module.exports = Interested