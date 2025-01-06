import React, { useState } from 'react';
import './Review.css';

const ReviewPage = () => {
  // State to store the list of reviews
  const [reviews, setReviews] = useState([]);
  // State to store the current review input
  const [reviewInput, setReviewInput] = useState('');
  // State to store the current name input
  const [nameInput, setNameInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (reviewInput.trim() && nameInput.trim()) { // Check if inputs are not empty
      // Add new review to the list of reviews
      setReviews([{ name: nameInput, review: reviewInput }, ...reviews]);
      // Clear input fields after submission
      setReviewInput('');
      setNameInput('');
    }
  };

  return (
    <div className="review-page-container">
      <h2 className="review-page-title">Submit Your Review</h2>
      {/* Review form */}
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          className="input-name"
          placeholder="Your Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          required
        />
        <textarea
          className="input-review"
          placeholder="Your Review"
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Submit Review</button>
      </form>

      {/* Display reviews */}
      <div className="reviews-container">
        <h3>Reviews:</h3>
        {reviews.length === 0 && <p>No reviews yet. Be the first to review!</p>}
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <h4>{rev.name}</h4>
            <p>{rev.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;