const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quiz-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questionSchema = new mongoose.Schema({
  categoryId: String,
  title: String,
  questions: [
    {
      id: Number,
      question: String,
      choices: [String],
      correctAnswer: String,
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
