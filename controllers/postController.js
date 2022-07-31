const Posts = require('../models/postModel');
const pool = require('../db')

async function getAllPosts(req, res) {
    try {
        const data = await Posts.getAllPostsFromDB()
        return res.json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function getSinglePost(req, res) {
    const { id } = req.params;
    try {
        const data = await Posts.getSinglePostFromDB(id)
        return res.json({
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
    try {
        const data = await Posts.createNewPostDB(user_id, title, description, image)
        return res.json({
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
