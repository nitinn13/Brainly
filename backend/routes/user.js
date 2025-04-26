const { Router } = require('express');
const userRouter = Router();
const { userModel, contentModel } = require("../db")
const { z } = require("zod");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
const mongoose = require("mongoose");
const { userMiddleware } = require('../middleware/user');
userRouter.post("/signup", async (req, res) => {
    try {
        const reqBody = z.object({
            username: z.string(),
            email: z.string(),
            password: z.string()
        })
        const parsed = reqBody.safeParse(req.body);
        if (!parsed) {
            return res.status(400).json({ message: "Invalid Format", error: parsed.error.issues });

        }
        const { email, username, password } = parsed.data;

        const existinguser = await userModel.findOne({ email });
        if (existinguser) {
            return res.status(409).json({ message: "user already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({ username, email, password: hashedPassword });
        res.status(200).json({ message: "User Created successfully", })
    }
    catch (e) {
        res.status(500).json({ message: "Error creating account", error: e.message })
    }
})
userRouter.post("/login", async (req, res) => {
    try {
        const reqBody = z.object({
            email: z.string(),
            password: z.string()
        })

        const parsed = reqBody.safeParse(req.body);
        if (!parsed) {
            return res.status(400).json({ message: "Invalid format" });
        }
        const { email, password } = parsed.data;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "user does not exist" });
        }
        const correctpass = await bcrypt.compare(password, user.password);
        if (!correctpass) {
            return res.status(401).json({ message: "Incorrect password" });

        }
        const token = jwt.sign({ email, id: user._id }, JWT_USER_SECRET, { expiresIn: "1h" })
        res.status(200).json({
            message: "Login Successful",
            token
        })
    }
    catch (e) {
        res.status(500).json({ message: "Error creating account", error: e.message })
    }
})
userRouter.post("/content", userMiddleware, async (req, res) => {
    try {
        const { title, description, link, status } = req.body;

        const newContent = await contentModel.create({
            title,
            description,
            link,
            status,
            createdBy: req.userId  // Use the correct field as per schema
        });

        res.status(200).json({ message: "Content Uploaded", content: newContent });
    } catch (e) {
        res.status(500).json({
            message: "Error uploading content",
            error: e.message
        });
    }
});

userRouter.get("/mycontents", userMiddleware, async (req, res) => {
    try {

        const content = await contentModel.find({ createdBy: req.userId });
        res.status(200).json({ content });
    }
    catch {
        res.status(500).json({
            message: "Error fetching content"
        })
    }
})
userRouter.delete("/content", userMiddleware, async (req, res) => {
    try {
        const { id } = req.body;
        const content = await contentModel.findById(id);
        if (!content) {
            return res.json({ message : "content not found"});

        }
        if (content.createdBy.toString() !== req.userId) {
            return res.status(403).json({ message: "You are not authorized to delete this content" });
        }

        await content.deleteOne();

        res.status(200).json({ message: "Content deleted successfully" });
    }
    catch {
        res.status(500).json({
            message: "Error fetching content"
        })
    }
})


module.exports = {
    userRouter
}