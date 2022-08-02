const pool = require('../db')

class Users {
    static async getAllUsersFromDB() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSingleUserFromDB(user_id) {
        const sql = `SELECT * FROM users WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows;
    }
}

module.exports = Users