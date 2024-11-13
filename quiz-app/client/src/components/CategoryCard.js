import React from 'react';

const CategoryCard = ({ category, onStart }) => {
  // Define the image path based on the category title (image files should be in public/images/)
  const imageMap = {
    "General Knowledge": "general_knowledge.jpg",
    "Science": "science.jpg",
    "Math": "math.jpg",
    "History": "history.jpg",
    "Geography": "geography.jpg"
  };

  // Get the image name from the map based on category title
  const imagePath = imageMap[category.title];

  return (
    <div className="p-4 border rounded shadow-lg text-center">
      {imagePath ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/${imagePath}`} // Reference the image path from the public folder
          alt={category.title}
          className="w-40 h-40 mx-auto mb-4 object-cover"
          onError={(e) => e.target.src = `${process.env.PUBLIC_URL}/images/default.png`} // Fallback to default image if not found
        />
      ) : (
        <p>Image not available</p>
      )}
      <h3 className="font-bold text-lg">{category.title}</h3>
      <button
        onClick={onStart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default CategoryCard;
