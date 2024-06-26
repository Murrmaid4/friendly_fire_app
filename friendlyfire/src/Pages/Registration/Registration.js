/* eslint-disable default-case */
// Imports

import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Registration.css";
import Toggle from 'react-toggle';
import DatingIcon from '../../assets/datingicon.svg'
import FriendsIcon from '../../assets/friendsicon.svg'
import DeleteIcon from '../../assets/deleteicon.svg'



// For this page I was thinking we can put all the registration questions and inputs on this one page, but adding javascript elements to show and hide questions when users select the next button


// this page is what pulls up after users select sign up now

// RegistrationPage Component
const RegistrationPage = () => {
    // State to track the current step of the registration process
    const [currentStep, setCurrentStep] = useState(1);

    // State to store user inputs
    const [userData, setUserData] = useState({
        preferredName: '',
        birthday: '',
        genderIdentity: '',
        showOnProfile: false,
        ethnicity: [],
        lookingFor: '',
        intentions: [],
        showIntentionsOnProfile: false,
        selectedGames: [],
    });

    // State to store uploaded photos
    const [uploadedPhotos, setUploadedPhotos] = useState([]);

    // Function to handle photo upload
    const handlePhotoUpload = (e) => {
        const selectedPhoto = e.target.files[0];

        if (selectedPhoto) {
            setUploadedPhotos((prevPhotos) => [...prevPhotos, selectedPhoto]);
        }
    };

    // Function to handle removing a photo
    const handleRemovePhoto = (index) => {
        setUploadedPhotos((prevPhotos) => {
            const updatedPhotos = [...prevPhotos];
            updatedPhotos.splice(index, 1);
            return updatedPhotos;
        });
    };

    //Gaming Highlights

    const [uploadedHighlights, setUploadedHighlights] = useState([]);


    // Function to handle highlight removal
    const handleRemoveHighlight = (index) => {
        setUploadedHighlights((prevHighlights) => {
            const updatedHighlights = [...prevHighlights];
            updatedHighlights.splice(index, 1);
            return updatedHighlights;
        });
    };

    // Function to handle highlight upload
    const handleHighlightUpload = (e) => {
        const selectedHighlight = e.target.files[0];

        if (selectedHighlight) {
            setUploadedHighlights((prevHighlights) => [...prevHighlights, selectedHighlight]);
        }
    };

    // State for additional options visibility
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    // Function to handle input changes
    const handleInputChange = (fieldName, value) => {
        setUserData({
            ...userData,
            [fieldName]: value,
        });


    };

    // next button, which should be its own component that can be reused:

    // Function to handle moving to the next step
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // Function to handle moving to the previous step
    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Function to handle checkbox changes for ethnicity
    const handleEthnicityCheckboxChange = (value) => {
        const updatedEthnicity = [...userData.ethnicity];

        if (updatedEthnicity.includes(value)) {
            // If the ethnicity is already selected, remove it
            const index = updatedEthnicity.indexOf(value);
            updatedEthnicity.splice(index, 1);
        } else {
            // If the ethnicity is not selected, add it
            updatedEthnicity.push(value);
        }

        // Update the state with the new ethnicity array
        setUserData({
            ...userData,
            ethnicity: updatedEthnicity,
        });
    };

    // Function to handle checkbox changes for intentions
    const handleIntentionsCheckboxChange = (value) => {
        const updatedIntentions = [...userData.intentions];

        if (updatedIntentions.includes(value)) {
            // If the intention is already selected, remove it
            const index = updatedIntentions.indexOf(value);
            updatedIntentions.splice(index, 1);
        } else {
            // If the intention is not selected, add it
            updatedIntentions.push(value);
        }

        // Update the state with the new intentions array
        setUserData({
            ...userData,
            intentions: updatedIntentions,
        });
    };

    // State for video game options (example, we will need a different way to do this)
    const gameOptions = [
        'Valorant',
        'Minecraft',
        'Fortnite',
        'Grand Theft Auto V',
        'The SIMS 4',
        'Lethal Company',
        'World of WarCraft',
        'Skyrim',
        'Bloodborne',
    ];

    // Function to handle selecting a game
    const handleGameSelect = (selectedGame) => {
        if (!userData.selectedGames.includes(selectedGame)) {
            setUserData((prevData) => ({
                ...prevData,
                selectedGames: [...prevData.selectedGames, selectedGame],
            }));
        }
    };

    // Function to handle removing a selected game
    const handleGameRemove = (removedGame) => {
        setUserData((prevData) => ({
            ...prevData,
            selectedGames: prevData.selectedGames.filter(
                (game) => game !== removedGame
            ),
        }));
    };

    //set up the registration page with standard headline, registration components beneath

    const renderRegistrationComponents = () => {
        const stepContent = renderStepContent();
        return (
            <div>
                <h1>Setting Up Your Profile</h1>
                {/* Need to include progress indicator */}
                {/* Common structure for each step */}
                <div>
                    <h2>{stepContent.title}</h2>
                    {stepContent.content}
                    <div className='step-button-container'>
                        {currentStep > 1 && (
                            <button onClick={handlePrevStep} className='previous-button'>Previous</button>
                        )}
                        {currentStep < maxSteps && (
                            <button className='next-button' onClick={handleNextStep}>Next</button>
                        )}
                    </div>
                </div>
            </div>
        );
    };
    // Render the specific content for each step
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return {
                    title: "",
                    content: (
                        <div className='name-body'>
                            {/* ... Previous questions ... */}
                            {/* What is your preferred name text input */}
                            <div>
                                <label className='step1-question'>What is your preferred name?</label>
                                <input
                                    type="text"
                                    placeholder='Enter your First Name or Nickname'
                                    value={userData.preferredName}
                                    onChange={(e) => handleInputChange('preferredName', e.target.value)}
                                    className='step1-input'
                                />
                            </div>

                            {/* When is your birthday calendar input */}
                            <div>
                                <label className='step1-question'>When is your birthday?</label>
                                <input
                                    type="date"
                                    value={userData.birthday}
                                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                                    className='step1-input'
                                />
                            </div>
                        </div>
                    ),
                };
            case 2:
                return {
                    title: "I Identify as:",
                    content: (
                        <div className='scrollable-container'>
                            {/* I identify as question with rectangular buttons */}
                            <div>
                                <div className='identity-button-container'>
                                    <button onClick={() => handleInputChange('genderIdentity', 'Woman')} className='identity-button'>
                                        Woman
                                    </button>
                                    <button onClick={() => handleInputChange('genderIdentity', 'Man')} className='identity-button'>
                                        Man
                                    </button>
                                    <button onClick={() => setShowMoreOptions(!showMoreOptions)} className='identity-more-button'>
                                        More
                                    </button>
                                </div>

                                {/* Additional options when "More" is clicked */}
                                {showMoreOptions && (
                                    <div>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Non-Binary')} className='identity-button'>
                                            Non-Binary
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Transgender')} className='identity-button'>
                                            Transgender
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Trans Man')} className='identity-button'>
                                            Trans Man
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Trans Woman')} className='identity-button'>
                                            Trans Woman
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Agender')} className='identity-button'>
                                            Agender
                                        </button>
                                    </div>
                                )}

                                {/* Prefer Not To Say option */}
                                <div className='button-container'>
                                    <button onClick={() => handleInputChange('genderIdentity', 'Prefer Not To Say')} className='identity-button'>
                                        Prefer Not To Say
                                    </button>
                                </div>
                            </div>

                            {/* Show On Profile Toggle Switch */}
                            <div className="toggle-container">
                            <label className="profile-question">Show on Profile</label>
                            <label className="switch">
                                <input 
                                    type="checkbox" 
                                    checked={userData.showOnProfile} 
                                    onChange={() => handleInputChange('showOnProfile', !userData.showOnProfile)} 
                                />
                                <span className="slider"></span>
                            </label>
                            </div>

                        </div>
                    ),
                };
            case 3:
                return {
                    title: "What is Your Ethnicity?",
                    content: (
                        <div className='scrollable-container'>
                            <div className='selectall-container'>
                                <p className='ethnicity-question'>Select all that applies to you.</p>
                            </div>
                        <div>
                            <div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Black/African')}
                                            onChange={() => handleEthnicityCheckboxChange('Black/African')}
                                        />
                                        Black/African
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('East Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('East Asian')}
                                        />
                                        East Asian
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Hispanic/Latino')}
                                            onChange={() => handleEthnicityCheckboxChange('Hispanic/Latino')}
                                        />
                                        Hispanic/Latino
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Middle Eastern')}
                                            onChange={() => handleEthnicityCheckboxChange('Middle Eastern')}
                                        />
                                        Middle Eastern
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Native American')}
                                            onChange={() => handleEthnicityCheckboxChange('Native American')}
                                        />
                                        Native American
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Pacific Islander')}
                                            onChange={() => handleEthnicityCheckboxChange('Pacific Islander')}
                                        />
                                        Pacific Islander
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('South Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('South Asian')}
                                        />
                                        South Asian
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Southeast Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('Southeast Asian')}
                                        />
                                        Southeast Asian
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('White/Caucasian')}
                                            onChange={() => handleEthnicityCheckboxChange('White/Caucasian')}
                                        />
                                        White/Caucasian
                                    </label>
                                    </div>
                            </div>

                            {/* Show On Profile Toggle Switch */}
                            <div className='toggle-container'>
                                <label className='profile-question'>Show on Profile</label>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={userData.showEthnicityOnProfile}
                                        onChange={() => handleInputChange('showEthnicityOnProfile', !userData.showEthnicityOnProfile)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                        </div>
                    ),
                };
            case 4: // Placeholder for Location Search, will have to set up the Map API later
                return {
                    title: "Where Are You Located?",
                    content: (
                        <div>
                            <div>
                                <label className='location-label'>Search for your location:</label>
                                <input
                                    type="text"
                                    className="step4-input"
                                    placeholder="Enter your location"
                                    value={userData.locationSearch}
                                    onChange={(e) => handleInputChange('locationSearch', e.target.value)}
                                />
                            </div>

                        </div>
                    ),
                };
            case 5: // What are you looking for?
                return {
                    title: "What are You Looking For?",
                    content: (
                        <div>
                            <p>You can change this at any time.</p>

                            {/* Buttons for Dating and Friends */}
                            <div className='mode-button-container'>
                                <button className='mode-button' onClick={() => handleInputChange('lookingFor', 'Dating')}>
                                    <img src={DatingIcon} alt="Heart Icon" />
                                    <span>Dating</span>
                                </button>
                                <button className='mode-button' onClick={() => handleInputChange('lookingFor', 'Friends')}>
                                    <img src={FriendsIcon} alt="Friends Icon" />
                                    <span>Friends</span>
                                </button>
                            </div>
                        </div>
                    ),
                };

            case 6: // What are your intentions?
                return {
                    title: "What are Your Intentions?",
                    content: (
                        <div>
                            <div>
                                <p className='selectall-container'>Select your intentions:</p>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Looking for a short-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Looking for a short-term relationship')}
                                        />
                                        Looking for a short-term relationship
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Looking for a long-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Looking for a long-term relationship')}
                                        />
                                        Looking for a long-term relationship
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Looking for an online/gaming relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Looking for an online/gaming relationship')}
                                        />
                                        Looking for an online/gaming relationship
                                    </label>
                                </div>
                            </div>

                            {/* Optional Section */}
                            <div>
                                <p>(Optional)</p>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Open to short-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Open to short-term relationship')}
                                        />
                                        Open to short-term relationship
                                    </label>
                                </div>
                                <div className='checkbox-container'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Open to long-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Open to long-term relationship')}
                                        />
                                        Open to long-term relationship
                                    </label>
                                </div>
                            </div>

                            {/* Show On Profile Toggle Switch */}
                            <div className="toggle-container">
                                <label className='profile-question'>Show on Profile</label>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={userData.showIntentionsOnProfile}
                                        onChange={() => handleInputChange('showIntentionsOnProfile', !userData.showIntentionsOnProfile)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    ),
                };
            case 7: // What video games do you play?
                return {
                    title: "What video games do you play?",
                    content: (
                        <div>
                            <div>
                                {/* Dropdown list with search bar */}
                                <select
                                    value=""
                                    onChange={(e) => handleGameSelect(e.target.value)}
                                    className='custom-select'
                                >
                                    <option value="" disabled>
                                        Choose Options
                                    </option>
                                    {gameOptions.map((game) => (
                                        <option key={game} value={game}>
                                            {game}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Display selected games */}
                            <div>
                                <p>Selected Games:</p>
                                <ul>
                                    {userData.selectedGames.map((game) => (
                                        <li className= 'games-list' key={game}>
                                            {game}
                                            <button onClick={() => handleGameRemove(game)}>
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ),
                };
            case 8:
                return {
                    title: "Let's add some photos !",
                    content: (
                        <div>
                            <div className='photos-body'>
                                <p>Upload at least 4 images of yourself</p>
                                <div>
                                    {uploadedPhotos.map((photo, index) => (
                                        <div key={index} className="photo-container">
                                            <img src={URL.createObjectURL(photo)} alt={`Uploaded ${index + 1}`} />
                                            <button onClick={() => handleRemovePhoto(index)}>
                                                <img src={DeleteIcon} alt="Delete Icon" />
                                            </button>
                                        </div>
                                    ))}
                                    <label className="photo-container" htmlFor="photo-upload">
                                      
                                        <input
                                            type="file"
                                            id="photo-upload"
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                        />  <span>+</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ),
                };
            case 9:
                return {
                    title: "Let's add your gaming highlights",
                    content: (
                        <div>
                            <p>Upload your favorite gaming highlights</p>
                            <div>
                                {/* Display uploaded gaming highlights */}
                                {uploadedHighlights.map((highlight, index) => (
                                    <div key={index} className="highlight-container">
                                        {/* Display video player or thumbnail */}
                                       <video src={URL.createObjectURL(highlight)} controls></video> 
                                        <button onClick={() => handleRemoveHighlight(index)}>
                                            <img src={DeleteIcon} alt="Delete Icon" />
                                        </button>
                                    </div>
                                ))}

                                {/* Upload gaming highlight button */}
                                <label className="highlight-container" htmlFor="highlight-upload">
                                    
                                    <input
                                        type="file"
                                        id="highlight-upload"
                                        accept="video/*"
                                        onChange={handleHighlightUpload}
                                    />
                                    <span>+</span>
                                </label>
                            </div>
                        </div>

                    ),
                };

        default:
            return null; // Return null for unknown step
        };

    };

    // Define the maximum number of steps
    const maxSteps = 9; // Update this based on the total number of steps

    return <div>{renderRegistrationComponents()}</div>;
};



export default RegistrationPage;

// depending on time, may not be able to do every section on registration form but can get the base information done
