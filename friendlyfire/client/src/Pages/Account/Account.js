import React, { useState, useRef, useEffect } from 'react';
import Logo2 from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import SettingsIcon from '../../assets/setting.svg';
import './Account.css';

const placeholderImage1 = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const placeholderImage2 = 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const placeholderImage3 = 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const images = [placeholderImage1, placeholderImage2, placeholderImage3];

const Account = () => {
  const aspectRatio = 4 / 3; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dragStartX = useRef(null);
  const [width, setWidth] = useState(300); // Set the initial width
  const [height, setHeight] = useState(width / aspectRatio); // Calculate initial height

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (dragStartX.current !== null) {
      const deltaX = e.clientX - dragStartX.current;
      if (deltaX > 50) {
        handleSwipe('left');
        dragStartX.current = null;
      } else if (deltaX < -50) {
        handleSwipe('right');
        dragStartX.current = null;
      }
    }
  };

  const handleMouseUp = () => {
    dragStartX.current = null;
  };

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (direction === 'right' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Calculate height based on the aspect ratio
      const newHeight = width / aspectRatio;
      // Set the calculated height
      setHeight(newHeight);
    };

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, aspectRatio]);

  return (
    <div>
      <div className="settings-icon">
        {/* Link to the Settings page */}
        <Link to="/settings" className="settings-icon-link">
          {/* Settings icon*/}
          <div className="settings-icon-container">
            <img
              src={SettingsIcon}
              alt="Settings Icon"
              className="settings-icon"
            />
          </div>
        </Link>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img src={Logo2} alt="friendlyfire app logo" className="logo" style={{ width: '50px', height: '50px' }} />
        <h1>FriendlyFire</h1>
        <h2>My Character Sheet</h2>
      </div>

      <div
        className="profile-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* User profile pictures */}
        <div className="profile-pictures">
          {/* Display current profile picture */}
          <img
            src={images[currentImageIndex]}
            alt={`Profile Picture ${currentImageIndex + 1}`}
            className="current-profile-picture"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        </div>

         {/* User information */}
      <div className="profile-info">
        <h1>Jane Doe, 21</h1>
        <p>Not your eSports champion,  {'\n'}
          but I've logged serious hours on Valorant.  {'\n'}
          When not working or gaming, catch me on a  {'\n'}
          Netflix binge or attempting to cook something  {'\n'} that looks edible.</p>
      </div>
    </div>
  </div>
);
  }

export default Account;