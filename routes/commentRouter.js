const commentRouter = require("express").Router();

const { getAllComments, getCommentsFromSinglePost, deleteCommentFromSinglePost, createNewComment } = require('../controllers/commentController');

commentRouter.get('/comments', getAllComments);

// get all comments for a single post "/posts/:id/comments"
commentRouter.get('/posts/:post_id/comments', getCommentsFromSinglePost);

commentRouter.delete('/posts/:post_id/comments/:comment_id', deleteCommentFromSinglePost);

commentRouter.post('/posts/:post_id/comments', createNewComment);

module.exports = commentRouter;