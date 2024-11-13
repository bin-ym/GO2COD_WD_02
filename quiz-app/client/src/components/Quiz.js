import React, { useState } from 'react';

const Quiz = ({ quiz, onSubmit, showResult, score, onRetake, disableEdit }) => {
  const [answers, setAnswers] = useState(new Array(quiz.questions.length).fill(''));
  
  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <div key={question.id} className="mb-4">
            <div className="font-semibold mb-2">
              {index + 1}. {question.question} {/* Displaying question number */}
            </div>
            <div>
              {question.choices.map((choice, choiceIndex) => (
                <div key={choiceIndex} className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={choice}
                      checked={answers[index] === choice}
                      onChange={(e) => handleAnswerChange(e, index)}
                      disabled={disableEdit}
                    />
                    {choice}
                  </label>
                </div>
              ))}
            </div>
            {showResult && answers[index] && (
              <div className={`mt-2 text-sm ${answers[index] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                {answers[index] === question.correctAnswer ? 'Correct' : 'Wrong'} 
                {answers[index] !== question.correctAnswer && (
                  <span className="ml-2">Correct Answer: {question.correctAnswer}</span>
                )}
              </div>
            )}
          </div>
        ))}
        {!showResult && (
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit Quiz
          </button>
        )}
      </form>

      {showResult && (
        <div className="mt-4">
          <h3>Your Score: {score} / {quiz.questions.length}</h3>
          <button
            onClick={onRetake}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
