const Comments = require('../models/commentModel');
const pool = require('../db');

async function getAllComments(req, res) {
    try {
        const data = await Comments.getAllCommentsFromDB();
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getCommentsFromSinglePost(req, res) {
    const { post_id } = req.params;
    try {
        const data = await Comments.getCommentsFromSinglePostDB(post_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function deleteCommentFromSinglePost(req, res) {
    const { comment_id } = req.params;

    try {
        const data = await Comments.deleteCommentFromSinglePostDB(comment_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function createNewComment(req, res) {
    const { post_id, user_id, comment_body } = req.body;
    const commentData = {
        post_id,
        user_id,
        comment_body
    }
    if (!commentData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Comments.createNewCommentDB(commentData)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}


module.exports = {
    getAllComments,
    getCommentsFromSinglePost,
    deleteCommentFromSinglePost,
    createNewComment
}