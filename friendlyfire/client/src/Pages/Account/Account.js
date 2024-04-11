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
import jobIcon from '../../assets/Icons/suitcase.svg';
import gradIcon from '../../assets/Icons/graduation-cap.svg';
import womanIcon from '../../assets/Icons/woman.svg';
import prayIcon from '../../assets/Icons/pray.svg';
import languageIcon from '../../assets/Icons/world.svg';
import searchIcon from '../../assets/Icons/search.svg';
import drinkIcon from '../../assets/Icons/drink.svg';
import smokeIcon from '../../assets/Icons/smoking.svg';
import marijuanaIcon from '../../assets/Icons/marijuana.svg';
import childrenIcon from '../../assets/Icons/stuffedtoy.svg';
import workoutIcon from '../../assets/Icons/dumbbell.svg';
import gameClip1 from '../../assets/Gamingclip/Gameclip1.mp4';
import gameClip2 from '../../assets/Gamingclip/Gameclip2.mp4';


// array for profile pictures, interests, lifestyle, consoles, gaming interests, and game images
const images = [placeholderImage1, placeholderImage2, placeholderImage3];
const gameImages = [gameart1, gameart2, gameart3, gameart4, gameart5];
const interests = ['Animator', 'Florida International University', 'Postgrad', 'Woman', 'Agnostic', 'English', 'Long-term relationships'];
const lifestyle = ['Socially', 'Never', 'No', 'I want children', 'Daily'];
const consoles = ['PC','Nintendo', 'Playstation'];
const gaminginterests = ['Action', 'MMORPG', 'RPG', 'Casual', 'Indie'];
  
// Image swipe functionality

const Account = () => {
  const aspectRatio = 3 / 4;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dragStartX = useRef(null);
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(width / aspectRatio);
  const [showBio, setShowBio] = useState(false);

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
//settings icon linked to settings page
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
{/* Logo and title of the app */}
      <div className="logo-container">
        <img src={Logo2} alt="friendlyfire app logo" className="logo" style={{ width: '50px', height: '50px' }} />
        <h1>FriendlyFire</h1>
        <h2>My Character Sheet</h2>
      </div>
{/*Profile Picture and swipe functionality */}
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
{/* Interests scroll bar */}
        <div className="interests-bar">
          <div className="interests-container">
            {interests.map((interest, index) => {
              let Icon;
              switch (interest) {
                case 'Animator':
                  Icon = jobIcon;
                  break;
                case 'Florida International University':
                  Icon = gradIcon;
                  break;
                  case 'Postgrad':
                    Icon = gradIcon;
                    break;
                    case 'Woman':
                      Icon = womanIcon;
                      break;
                      case 'Agnostic':
                        Icon = prayIcon;
                        break;
                        case 'English':
                          Icon = languageIcon;
                          break;
                          case 'Long-term relationships':
                            Icon = searchIcon;
                            break;
                // ... add more cases as needed ...
                default:
                  Icon = null;
              }
              return (
                <div key={index} className="interest-item">
                  {Icon && <img src={Icon} alt={interest} className="interest-icon" />}
                  {interest}
                </div>
              );
            })}
          </div>
        </div>

{/* Profile information */}
        <div className="profile-info">
          <h1>Jane Doe, 24 </h1>
          <h3> 5 Miles aways</h3>
          {showBio ? (
            <p>
              
             Not your eSports champion but I've logged {'\n'}
              serious hours on Valorant. When not working or {'\n'}
              gaming ,catch me on a Netflix binge or attempting {'\n'}
              to cook something that looks edible.
            </p>
          ) : (
            <p>
              Not your eSports champion. {'\n'}
              <span className="see-more" onClick={() => setShowBio(true)} style={{fontWeight: 'bold'}}>
  See more
</span>
            </p>
          )}
          {/* Lifestyle scroll bar */}
           <h1>Lifestyle</h1>
          <div className="interests-barLifestyle">
          <div className="interests-container">
           
            {lifestyle.map((lifestyle, index) => {
              let Icon;
              switch (lifestyle) {
                case 'Socially':
                  Icon = drinkIcon;
                  break;
                case 'Never':
                  Icon = smokeIcon;
                  break;
                  case 'No':
                    Icon = marijuanaIcon;
                    break;
                    case 'I want children':
                      Icon = childrenIcon;
                      break;
                      case 'Daily':
                        Icon = workoutIcon;
                        break;
                default:
                  Icon = null;
              }
              return (
              <div key={index} className="interest-item">
                {Icon && <img src={Icon} alt={lifestyle} className="interest-icon" />}
                {lifestyle}
              </div>
            );
            })}
          </div>
        </div>
       
            {/* Gaming Highlights with videos */}
        <div className="gaming-highlights">
          <h1>Gaming Highlights</h1>
          <div className="video-container">
            <div className="video-clip">
              <video src={gameClip2} controls></video>
            </div>
            <div className="video-clip">
            <video src={gameClip1} controls></video>
            </div>
          </div>

           {/* Consoles scroll bar */}
          <div className="interests-barConsoles">
            <h1>Consoles</h1>
          <div className="interests-containerConsoles">
           
            {consoles.map((consoles, index) => (
              <div key={index} className="interest-item">
                {consoles}
              </div>
            ))}
          </div>

           {/* Gaming Interests scroll bar*/}
    <div className="interests-barGaming">
      <h1>Gaming Interests</h1>
      <div className="interests-containerGaming">
        {gaminginterests.map((gaminginterest, index) => (
          <div key={index} className="interest-item">
            {gaminginterest}
          </div>
        ))}
      </div>
       {/* What I play section */}
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

 
</div>
        </div>
      </div>
    </div>
  );
}

export default Account;