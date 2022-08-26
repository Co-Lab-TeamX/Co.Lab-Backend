const pool = require('../db')

class Users {
    static async getAllUsersFromDB() {
        const sql = `
        SELECT * 
        FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows;
    }

    static async getSingleUserFromDB(user_id) {
        const sql = `
        SELECT * 
        FROM users 
        WHERE id = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows;
    }

    static async getSingleUserByUsernameFromDB(username) {
        const sql = `
        SELECT * 
        FROM users 
        WHERE username = ($1)`;
        const dbResult = await pool.query(sql, [username]);
        return dbResult.rows[0];
    }

    static async getSingleUserByEmailFromDB(email) {
        const sql = `
        SELECT * 
        FROM users 
        WHERE email = ($1)`;
        const dbResult = await pool.query(sql, [email]);
        return dbResult.rows[0];
    }

    static async createUserFromDB(userInfo) {
        const { username, hashedPassword, email } = userInfo;
        const sql = `
        INSERT INTO users (username, password, email) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        const user = await pool.query(sql, [
            username,
            hashedPassword,
            email,
        ]);
        return user.rows;
    }

    static async loginFromDB(email) {
        const sql = `
        SELECT * 
        FROM users 
        WHERE email = ($1)`;
        const dbResult = await pool.query(sql, [email]);
        return dbResult.rows[0];
    }

}

module.exports = Users