const Comments = require('../models/commentModel');

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

async function getAllCommentCounts(req, res) {
    try {
        const data = await Comments.getAllCommentCountsFromDB();
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getSpecificComment(req, res) {
    const comment_id = req.params.comment_id;
    if (!comment_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Comments.getSpecificCommentFromDB(comment_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function getCommentsForSinglePost(req, res) {
    const post_id = req.params.post_id;
    if (!post_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Comments.getCommentsForSinglePostFromDB(post_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function postNewComment(req, res) {
    const post_id = req.params.post_id
    const { user_id, comment_body } = req.body;
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
        const data = await Comments.postNewCommentFromDB(commentData)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function deleteComment(req, res) {
    const comment_id = req.params.comment_id;
    if (!comment_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Comments.deleteCommentFromDB(comment_id);
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
    getAllCommentCounts,
    getSpecificComment,
    getCommentsForSinglePost,
    postNewComment,
    deleteComment
}