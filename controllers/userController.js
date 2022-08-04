const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../utils');
const saltRounds = 10;

async function getAllUsers(req, res) {
    try {
        const data = await Users.getAllUsersFromDB()
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function getSingleUser(req, res) {
    const userId = req.params.id;
    try {
        const data = await Users.getSingleUserFromDB(userId)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function createUser(req, res) {
    const { username, password, email } = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const userData = {
        username,
        hashedPassword,
        email,
    }

    if (!userData) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.createUserFromDB(userData)
        const token = await generateToken(userInfo.id)
        return res.status(201).json({
            userInfo,
            token
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    const loginInfo = {
        email,
        password
    }

    if (!loginInfo) {
        return res.status(400).json({
            message: 'NO DATA PROVIDED'
        })
    }

    try {
        const user = await Users.loginFromDB(email)
        if (!user) {
            return res.status(401).json({
                message: "INCORRECT EMAIL OR PASSWORD",
            });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            return res.status(401).json({
                message: "INCORRECT EMAIL OR PASSWORD",
            });
        }
        const token = await generateToken(user.user_id);

        return res.status(200).json({
            user,
            token
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

async function authenticateUser(req, res) {
    const userToken = req.body.token;
    if (!userToken) {
        return res.status(500).json({ message: 'NOT AUTHENTICATED' })
    }
    try {
        const verify = await verifyToken(userToken, 'shhhhhhhhhhh');
        return res.status(200).json({
            isAuth: true
        });

    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    login,
    authenticateUser
}
