const { Router } = require('express');
const contentRouter = Router();
const { userModel, contentModel } = require("../db")
const {userMiddleware} = require("../middleware/user")

contentRouter.get("/allcontent", async (req, res)=>{
    try{
        const allcontent = await contentModel.find({status: "public"});
        res.status(200).json({
            allcontent
        })
    }
    catch{
        res.json({
            message : "error fetching all contents"
        })
    }
})


contentRouter.post("/upvote", userMiddleware, async (req, res) => {
    try {
        const { id } = req.body; 
        const userId = req.userId;

        const content = await contentModel.findById(id);

        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        if (content.upvotedBy.includes(userId)) {
            return res.status(400).json({ message: "You have already upvoted this content." });
        }

        content.votes++;
        content.upvotedBy.push(userId);
        await content.save();

        res.status(200).json({ message: "Upvoted successfully", votes: content.votes });
    } catch (error) {
        res.status(500).json({
            message: "Error upvoting content",
            error: error.message
        });
    }
});

contentRouter.post("/downvote", userMiddleware, async (req, res) => {
    try {
        const { id } = req.body;
        const userId = req.userId;

        const content = await contentModel.findById(id);

        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        if (content.downvotedBy.includes(userId)) {
            return res.status(400).json({ message: "You have already downvoted this content." });
        }

        const upvoteIndex = content.upvotedBy.indexOf(userId);
        if (upvoteIndex !== -1) {
            content.votes--; 
            content.upvotedBy.splice(upvoteIndex, 1);
        }

        content.votes--;
        content.downvotedBy.push(userId);
        await content.save();

        res.status(200).json({ message: "Downvoted successfully", votes: content.votes });
    } catch (error) {
        res.status(500).json({
            message: "Error downvoting content",
            error: error.message
        });
    }
});

module.exports={
    contentRouter
}