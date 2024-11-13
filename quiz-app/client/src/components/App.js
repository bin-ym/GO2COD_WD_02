import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import Quiz from './Quiz';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/questions')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setShowResult(false);
    setScore(0);
  };

  const submitQuiz = (answers) => {
    let score = 0;
    if (selectedQuiz) {
      selectedQuiz.questions.forEach((question, index) => {
        if (question.correctAnswer === answers[index]) {
          score += 1;
        }
      });
    }
    setScore(score);
    setShowResult(true);
  };

  const handleRetake = () => {
    setSelectedQuiz(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center py-4 bg-gray-800 text-white text-2xl font-bold">
        Ym Quiz
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-8 flex-grow">
        {selectedQuiz ? (
          <Quiz
            quiz={selectedQuiz}
            onSubmit={submitQuiz}
            showResult={showResult}
            score={score}
            onRetake={handleRetake}
            disableEdit={showResult} // Disables editing after submission
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
                onStart={() => startQuiz(category)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>&copy; 2024 Ym Quiz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
