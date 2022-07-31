const pool = require('../db')

class Users {
    static async getAllUsersFromDB() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSingleUserFromDB(id) {
        const sql = `SELECT * FROM users WHERE id=${id}`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }
}

module.exports = Users