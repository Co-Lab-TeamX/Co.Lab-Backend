const userRouter = require('express').Router();
const { getAllUsers, getSingleUser, createUser, login, authenticateUser } = require('../controllers/userController');

userRouter.get('/users', getAllUsers);

userRouter.get('/users/:id', getSingleUser);

userRouter.post('/register', createUser);

userRouter.post('/login', login);

userRouter.post('/authenticate', authenticateUser);

module.exports = userRouter;