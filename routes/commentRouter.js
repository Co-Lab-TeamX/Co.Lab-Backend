const commentRouter = require("express").Router();
const { getAllComments, getAllCommentCounts, getSpecificComment, getCommentsForSinglePost, deleteComment, postNewComment } = require('../controllers/commentController');

commentRouter.get('/allcomments', getAllComments)

commentRouter.get('/comments', getAllCommentCounts);

commentRouter.get('/comments/:comment_id', getSpecificComment)

commentRouter.get('/posts/:post_id/comments', getCommentsForSinglePost);

commentRouter.post('/posts/:post_id/comments', postNewComment);

commentRouter.delete('/comments/:comment_id', deleteComment);

module.exports = commentRouter;