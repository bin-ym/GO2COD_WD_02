const mongoose = require('mongoose');

// Define the schema for a quiz
const quizSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      choices: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
});

// Create a model for the schema
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
