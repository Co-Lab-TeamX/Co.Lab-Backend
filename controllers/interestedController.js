const Interested = require('../models/interestedModel');

async function getAllInterested(req, res) {
    const post_id = req.params.post_id
    if (!post_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Interested.getAllInterestedFromDB(post_id);
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function addInterested(req, res) {
    const post_id = req.params.post_id;
    const { user_id } = req.body
    const newInterestData = {
        post_id, 
        user_id
    }
    if (!newInterestData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Interested.createNewInterestedFromDB(newInterestData)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function deleteInterested(req, res) {
    const post_id = req.params.post_id;
    const { user_id } = req.body
    const interestedDeleteData = {
        post_id, 
        user_id
    }
    if (!interestedDeleteData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }

    try {
        const data = await Interested.deleteSingleInterestedDB(interestedDeleteData);
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
    addInterested,
    deleteInterested
}