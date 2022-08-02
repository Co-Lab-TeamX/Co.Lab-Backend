const Posts = require('../models/postModel');
const pool = require('../db');

async function getAllPosts(req, res) {
    try {
        const data = await Posts.getAllPostsFromDB();
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getSinglePost(req, res) {
    const { id } = req.params;
    try {
        const data = await Posts.getSinglePostFromDB(id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function createNewPost(req, res) {
    const { user_id, title, description, image } = req.body;
    const postData = {
        user_id,
        title,
        description,
        image
    }
    if (!postData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.createNewPostDB(postData)
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
    getAllPosts,
    getSinglePost,
    createNewPost
}
