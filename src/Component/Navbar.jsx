import React, { useState, useCallback, memo } from 'react';
import './css/Navbar.css';
import './css/ReviewModal.css';

// Memoized MovieSearch component to prevent unnecessary re-renders
const MovieSearch = memo(({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="movie-search-container">
      {/* Movie search implementation */}
      <input type="text" placeholder="Search movies..." />
    </div>
  );
});

// Controlled form input component for reusability
const FormInput = memo(({ 
  label, 
  type = 'text', 
  id, 
  value, 
  onChange, 
  required = false, 
  ...props 
}) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      type={type}
      id={id}
      className="form-input"
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  </div>
));

const ReviewModal = ({ isOpen, closeModal, submitReview }) => {
  // Use useCallback to memoize state update functions
  const [formData, setFormData] = useState({
    title: '',
    category: 'movie',
    rating: '',
    imageUrl: '',
    review: ''
  });

  // Memoized handler to prevent unnecessary re-renders
  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  }, []);

  // Memoized submit handler
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    submitReview(formData);
    resetForm();
    closeModal();
  }, [formData, submitReview, closeModal]);

  // Memoized reset function
  const resetForm = useCallback(() => {
    setFormData({
      title: '',
      category: 'movie',
      rating: '',
      imageUrl: '',
      review: ''
    });
  }, []);

  // Prevent rendering if modal is closed
  if (!isOpen) return null;

  return (
    <div className="modal open">
      <div className="modal-content animate-in">
        <span className="close-modal" onClick={closeModal}>&times;</span>
        <h2>Add New Review</h2>
        <form id="reviewForm" onSubmit={handleSubmit}>
          <FormInput
            label="Title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              id="category"
              className="form-input"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {['movie', 'series', 'book', 'game', 'others'].map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <FormInput
            label="Rating (1-10)"
            type="number"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />

          <FormInput
            label="Image URL"
            type="url"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />

          <div className="form-group">
            <label htmlFor="review" className="form-label">Review</label>
            <textarea
              id="review"
              className="form-textarea"
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Publish Review
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized handlers to prevent unnecessary re-renders
  const toggleSearch = useCallback(() => {
    setIsSearchVisible(prev => !prev);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <a href="/">Logo</a>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              {['Home', 'About', 'Services', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={link === 'Services' ? openModal : undefined}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button className="search-button" onClick={toggleSearch}>
                  Search
                </button>
              </li>
            </ul>
          </div>

          <button 
            className="mobile-menu-button" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <MovieSearch isVisible={isSearchVisible} />
        <ReviewModal 
          isOpen={isModalOpen} 
          closeModal={closeModal} 
          submitReview={(reviewData) => console.log(reviewData)} 
        />
      </div>
    </nav>
  );
};

export default Navbar;