const postRouter = require("express").Router();

const { getAllPosts, getSinglePost, createNewPost } = require('../controllers/postController')

postRouter.get('/posts', getAllPosts)
postRouter.get('/posts/:id', getSinglePost)
postRouter.post('/posts', createNewPost)

module.exports = postRouter;