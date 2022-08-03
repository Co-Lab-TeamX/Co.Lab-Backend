const postRouter = require("express").Router();

const { getAllPosts, getAllPostsForAUser, getSinglePost, createNewPost,deletePost } = require('../controllers/postController');

postRouter.get('/posts', getAllPosts);

postRouter.get('/posts/users/:user_id', getAllPostsForAUser)

postRouter.get('/posts/:post_id', getSinglePost);

postRouter.post('/posts', createNewPost);

postRouter.delete('/posts/:post_id', deletePost);


module.exports = postRouter;