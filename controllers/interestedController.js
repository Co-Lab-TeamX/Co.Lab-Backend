const Interested = require('../models/interestedModel');
const pool = require('../db');

async function getAllInterested(req, res) {
    try {
        const data = await Interested.getAllInterestedFromDB();
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getAllInterestedSingleUser(req, res) {
    const { user_id } = req.params;
    try {
        const data = await Interested.getAllInterestedSingleUserDB(user_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function deleteSingleInterested(req, res) {
    const { post_id, user_id } = req.params;

    const postData = {
        post_id,
        user_id,
    }

    try {
        const data = await Interested.deleteSingleInterestedDB(postData);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function createNewInterested(req, res) {
    const { post_id, user_id } = req.params;
    const postData = {
        post_id,
        user_id
    }
    if (!postData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Interested.createNewInterestedDB(postData)
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
    getAllInterested,
    getAllInterestedSingleUser,
    createNewInterested,
    deleteSingleInterested
}