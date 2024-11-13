const express = require('express');
const Quiz = require('../models/Quiz');

const router = express.Router();

// Route to get all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from MongoDB
    res.status(200).json(quizzes); // Send the quizzes as JSON
  } catch (err) {
    console.error("Error fetching quizzes:", err);
    res.status(500).json({ message: "Failed to fetch quizzes" });
  }
});

// Route to get a specific quiz by category
router.get('/quizzes/:categoryId', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ categoryId: req.params.categoryId }); // Fetch quizzes by categoryId
    res.status(200).json(quizzes);
  } catch (err) {
    console.error("Error fetching quiz by category:", err);
    res.status(500).json({ message: "Failed to fetch quiz by category" });
  }
});

module.exports = router;
