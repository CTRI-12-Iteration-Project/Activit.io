import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// This gives functionality to the home button at the top of the page
function HomeButton() {
  const location = useLocation();
  // Don't render in a home button at the login/sign up pages
  if (location.pathname === '/') return null;
  else
    return (
      <div className='home-button'>
        <Link to='/home' className='home-button-link'>
          <button
            className='home-button button'
            // onClick={() => {
            //   console.log('Clicking home button');
            // }}
          >
            Home
          </button>
        </Link>
      </div>
    );
}

export default HomeButton;
