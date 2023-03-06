// Header.jsx
import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  console.log(currentPage)
  return (
    <header>
      <h1>Braden Dawson // Web Developer</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
