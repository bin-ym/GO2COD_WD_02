# Quiz App

## Overview

This is a full-stack quiz app built using React.js for the frontend and Node.js with Express.js and MongoDB for the backend. The app allows users to select a quiz category, answer multiple-choice questions, and see their score at the end.

## Features
- Users can view and select quiz categories.
- After selecting a category, users can take the quiz.
- The quiz contains multiple-choice questions.
- After submitting the quiz, the app shows the score along with whether each question was answered correctly or incorrectly.

## Project Structure

### Frontend (`client/`)
- **`App.js`**: Main component that manages quiz categories and quiz logic.
- **`CategoryCard.js`**: Displays each category in a card format.
- **`Quiz.js`**: Displays the questions and handles the user's answers.
- **`App.css`**: Global styling for the app.

### Backend (`server/`)
- **`server.js`**: The Express server that serves the API routes and connects to MongoDB.
- **`models/Quiz.js`**: Mongoose schema for quizzes and questions.
- **`routes/quizzes.js`**: API routes to fetch quizzes.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
