const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../models/Post");
const authMiddleware = require("../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "displayName");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post(
  "/",
  authMiddleware,
  [
    check("title", "Title is required").notEmpty(),
    check("content", "Content is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const post = new Post({ ...req.body, author: req.user._id });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
);

// Add PUT and DELETE routes similarly

module.exports = router;
