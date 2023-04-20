import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleLeft);

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname === '/missions') {
      setActiveIndex(1);
    } else if (window.location.pathname === '/profile') {
      setActiveIndex(2);
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header className="nav-header">
      <nav>
        <ul>
          <NavLink to="/" className={`routing ${activeIndex === 0 ? 'activated' : ''}`} onClick={(e) => handleClick(0, e)}>
            <FontAwesomeIcon className="font-icon" icon="angle-left" size="1.5x" color="#fff" />
          </NavLink>
        </ul>
      </nav>
    </header>

  );
};

export default Navbar;
