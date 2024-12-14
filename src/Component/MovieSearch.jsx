import React, { useState } from 'react';
import './css/MovieSearch.css'; // Include CSS for MovieSearch

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '9e085da4'; // Add your OMDb API key here
  const apiUrl = 'http://www.omdbapi.com/';

  // Function to fetch movie data from OMDb API
  const fetchMovies = async (query) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(`${apiUrl}?s=${query}&apikey=${apiKey}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setErrorMessage(`No results found for "${query}". Please try another search.`);
      }
    } catch (error) {
      console.error('Error fetching data from OMDb API:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  // Event handler for the search input change
  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Event handler for search button click
  const handleSearchClick = () => {
    if (query.trim()) {
      fetchMovies(query);
    } else {
      alert('Please enter a movie or TV show title to search.');
    }
  };

  // Event handler for Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="movie-search-container">
      <div className="search-bar">
        <input
          type="text"
          id="movie-search"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button id="search-btn" className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}

      <div id="movie-list" className="movie-list">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
