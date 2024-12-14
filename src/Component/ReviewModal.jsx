import React, { useState } from 'react';
import './css/ReviewModal.css'; // Optional, add your CSS styles here

const ReviewModal = ({ isOpen, closeModal, submitReview }) => {
  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('movie');
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [review, setReview] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the review data to parent component or backend API
    const reviewData = { title, category, rating, imageUrl, review };
    submitReview(reviewData); // Pass data back to parent
    resetForm(); // Reset form fields after submission
    closeModal(); // Close the modal
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setCategory('movie');
    setRating('');
    setImageUrl('');
    setReview('');
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content animate-in">
        <span className="close-modal" onClick={closeModal}>&times;</span>
        <h2>Add New Review</h2>
        <form id="reviewForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-input"
              id="categoryInput"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="book">Book</option>
              <option value="game">Game</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Rating (1-10)</label>
            <input
              type="number"
              className="form-input"
              id="ratingInput"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="10"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              type="url"
              className="form-input"
              id="imageInput"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Review</label>
            <textarea
              className="form-textarea"
              id="reviewInput"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Publish Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
