const userRouter = require('express').Router();
const { getAllUsers, getSingleUser } = require('../controllers/userController')

userRouter.get('/users', getAllUsers)

userRouter.get('/users/:id', getSingleUser)

module.exports = userRouter;