const Users = require('../models/userModel');
const pool = require('../db')

async function getAllUsers(req, res) {
    try {
        const data = await Users.getAllUsersFromDB()
        return res.json({
            data
        })
    } catch(err) {
        return res.status(404).json({
            message: err.message
        })
    }
}


module.exports = {
    getAllUsers
}