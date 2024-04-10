import React, { useState, useRef, useEffect } from 'react';
import Logo2 from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import SettingsIcon from '../../assets/setting.svg';
import './Account.css';
import placeholderImage1 from '../../assets/profile-pic1.png';
import placeholderImage2 from '../../assets/profile-pic2.png';
import placeholderImage3 from '../../assets/profile-pic3.png';
import gameart1 from '../../assets/GameArt/stardewvalley.jpg';
import gameart2 from '../../assets/GameArt/Valorant.jpg';
import gameart3 from '../../assets/GameArt/fortnite.jpg';
import gameart4 from '../../assets/GameArt/mariokart.jpg';
import gameart5 from '../../assets/GameArt/baldursgate.jpg';
//const placeholderImage1 = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//const placeholderImage2 = 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//const placeholderImage3 = 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const images = [placeholderImage1, placeholderImage2, placeholderImage3];
const gameImages = [gameart1, gameart2, gameart3, gameart4, gameart5];
const interests = ['Animator', 'Florida International University', 'Postgrad', 'Woman', 'Agnostic', 'English', 'Long-term relationships'];
const lifestyle = ['Socially', 'Never', 'Never', 'I want children', 'Daily'];
const consoles = ['PC','Nintendo'];
const gaminginterests = ['Action', 'MMORPG', 'RPG', 'Casual', 'Indie'];
const Account = () => {
  const aspectRatio = 3 / 4;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dragStartX = useRef(null);
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(width / aspectRatio);
  const [showBio, setShowBio] = useState(false);

  // Define the functions with their implementations
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    } else if (direction === 'right') {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }
  };

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

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (dragStartX.current !== null) {
      const deltaX = e.touches[0].clientX - dragStartX.current;
      if (deltaX > 50) {
        handleSwipe('left');
        dragStartX.current = null;
      } else if (deltaX < -50) {
        handleSwipe('right');
        dragStartX.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    dragStartX.current = null;
  };

  useEffect(() => {
    const handleResize = () => {
      const newHeight = width / aspectRatio;
      setHeight(newHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, aspectRatio]);

  return (
    <div>
      <div className="settings-icon">
        <Link to="/settings" className="settings-icon-link">
          <div className="settings-icon-container">
            <img
              src={SettingsIcon}
              alt="Settings Icon"
              className="settings-icon"
            />
          </div>
        </Link>
      </div>

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="profile-pictures">
          <img
            src={images[currentImageIndex]}
            alt={`Profile Picture ${currentImageIndex + 1}`}
            className="current-profile-picture"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        </div>

        <div className="interests-bar">
          <div className="interests-container">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                {interest}
              </div>
            ))}
          </div>
        </div>


        <div className="profile-info">
          <h1>Jane Doe, 24 </h1>
          <h3> 5 Miles aways</h3>
          {showBio ? (
            <p>
              Love hiking and outdoor adventures. {'\n'}
              Avid reader and aspiring novelist. {'\n'}
              Coffee lover and foodie at heart. {'\n'}
              Looking for someone to share life's adventures with.
            </p>
          ) : (
            <p>
              Love hiking and outdoor adventures. {'\n'}
              <span className="see-more" onClick={() => setShowBio(true)}>
                See more
              </span>
            </p>
          )}
           <h1>Lifestyle</h1>
          <div className="interests-barLifestyle">
          <div className="interests-container">
           
            {lifestyle.map((lifestyle, index) => (
              <div key={index} className="interest-item">
                {lifestyle}
              </div>
            ))}
          </div>
        </div>
       

        <div className="gaming-highlights">
          <h1>Gaming Highlights</h1>
          <div className="video-container">
            <div className="video-clip">
              <video src="path/to/video1.mp4" controls></video>
            </div>
            <div className="video-clip">
              <video src="path/to/video2.mp4" controls></video>
            </div>
          </div>

          
          <div className="interests-barConsoles">
            <h1>Consoles</h1>
          <div className="interests-containerConsoles">
           
            {consoles.map((consoles, index) => (
              <div key={index} className="interest-item">
                {consoles}
              </div>
            ))}
          </div>

          
    <div className="interests-barGaming">
      <h1>Gaming Interests</h1>
      <div className="interests-containerGaming">
        {gaminginterests.map((gaminginterest, index) => (
          <div key={index} className="interest-item">
            {gaminginterest}
          </div>
        ))}
      </div>
      <div className="game-titles">
  <h1>What I Play</h1>
  <div>
    {gameImages.map((image, index) => (
      <img key={index} src={image} alt="Game Art" className="game-art" />
    ))}
  </div>
</div>
      
    </div>
  </div>

  <div className="actions">
    <button className="pass">Pass</button>
    <button className="like">Like</button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Account;