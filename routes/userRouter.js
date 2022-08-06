const userRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth')
const { getAllUsers, getSingleUser, createUser, login, authenticateUser } = require('../controllers/userController');

userRouter.get('/users', getAllUsers);

userRouter.get('/users/:id', getSingleUser);

userRouter.post('/register', createUser);

userRouter.post('/login', login);

userRouter.post('/authenticate', authenticateUser);

// userRouter.get('/', checkAuth, (req, res) => {
//     res.json({
//         message: "AUTHORIZED"
//     })
// })

module.exports = userRouter;