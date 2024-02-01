// Imports

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
                {/* Common structure for each step */}
                <div>
                    <h2>{stepContent.title}</h2>
                    {stepContent.content}
                    <div>
                        {currentStep > 1 && (
                            <button onClick={handlePrevStep}>Previous</button>
                        )}
                        {currentStep < maxSteps && (
                            <button onClick={handleNextStep}>Next</button>
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
                        <div>
                            {/* ... Previous questions ... */}
                            {/* What is your preferred name text input */}
                            <div>
                                <label>What is your preferred name?</label>
                                <input
                                    type="text"
                                    value={userData.preferredName}
                                    onChange={(e) => handleInputChange('preferredName', e.target.value)}
                                />
                            </div>

                            {/* When is your birthday calendar input */}
                            <div>
                                <label>When is your birthday?</label>
                                <input
                                    type="date"
                                    value={userData.birthday}
                                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                                />
                            </div>
                        </div>
                    ),
                };
            case 2:
                return {
                    title: "I Identify As:",
                    content: (
                        <div>
                            {/* I identify as question with rectangular buttons */}
                            <div>
                                <div>
                                    <button onClick={() => handleInputChange('genderIdentity', 'Woman')}>
                                        Woman
                                    </button>
                                    <button onClick={() => handleInputChange('genderIdentity', 'Man')}>
                                        Man
                                    </button>
                                    <button onClick={() => setShowMoreOptions(!showMoreOptions)}>
                                        More
                                    </button>
                                </div>

                                {/* Additional options when "More" is clicked */}
                                {showMoreOptions && (
                                    <div>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Non-Binary')}>
                                            Non-Binary
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Transgender')}>
                                            Transgender
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Trans Man')}>
                                            Trans Man
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Trans Woman')}>
                                            Trans Woman
                                        </button>
                                        <button onClick={() => handleInputChange('genderIdentity', 'Agender')}>
                                            Agender
                                        </button>
                                    </div>
                                )}

                                {/* Prefer Not To Say option */}
                                <button onClick={() => handleInputChange('genderIdentity', 'Prefer Not To Say')}>
                                    Prefer Not To Say
                                </button>
                            </div>

                            {/* Show On Profile Toggle Switch */}
                            <div className="toggle-switch">
                                <label>Show on Profile:</label>
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
                        <div>
                            <div>
                                <p>Select all that applies to you.</p>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Black/African')}
                                            onChange={() => handleEthnicityCheckboxChange('Black/African')}
                                        />
                                        Black/African
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('East Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('East Asian')}
                                        />
                                        East Asian
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Hispanic/Latino')}
                                            onChange={() => handleEthnicityCheckboxChange('Hispanic/Latino')}
                                        />
                                        Hispanic/Latino
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Middle Eastern')}
                                            onChange={() => handleEthnicityCheckboxChange('Middle Eastern')}
                                        />
                                        Middle Eastern
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Native American')}
                                            onChange={() => handleEthnicityCheckboxChange('Native American')}
                                        />
                                        Native American
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Pacific Islander')}
                                            onChange={() => handleEthnicityCheckboxChange('Pacific Islander')}
                                        />
                                        Pacific Islander
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('South Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('South Asian')}
                                        />
                                        South Asian
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.ethnicity.includes('Southeast Asian')}
                                            onChange={() => handleEthnicityCheckboxChange('Southeast Asian')}
                                        />
                                        Southeast Asian
                                    </label>
                                </div>
                                <div>
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
                            <div className="toggle-switch">
                                <label>Show on Profile:</label>
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
                    ),
                };
            case 4: // Placeholder for Location Search, will have to set up the Map API later
                return {
                    title: "Where Are You Located?",
                    content: (
                        <div>
                            <div>
                                <label>Search for your location:</label>
                                <input
                                    type="text"
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
                            <div>
                                <button onClick={() => handleInputChange('lookingFor', 'Dating')}>
                                    <img src="" alt="Heart Icon" />
                                    Dating
                                </button>
                                <button onClick={() => handleInputChange('lookingFor', 'Friends')}>
                                    <img src="" alt="Friends Icon" />
                                    Friends
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
                                <p>Select your intentions:</p>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Looking for a short-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Looking for a short-term relationship')}
                                        />
                                        Looking for a short-term relationship
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Looking for a long-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Looking for a long-term relationship')}
                                        />
                                        Looking for a long-term relationship
                                    </label>
                                </div>
                                <div>
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
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={userData.intentions.includes('Open to short-term relationship')}
                                            onChange={() => handleIntentionsCheckboxChange('Open to short-term relationship')}
                                        />
                                        Open to short-term relationship
                                    </label>
                                </div>
                                <div>
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
                            <div className="toggle-switch">
                                <label>Show on Profile:</label>
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
                                        <li key={game}>
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
                    title: "Let's add some photos!",
                    content: (
                        <div>
                            <div>
                                <p>Upload at least 4 images of yourself</p>
                                <div>
                                    {uploadedPhotos.map((photo, index) => (
                                        <div key={index} className="photo-container">
                                            <img src={URL.createObjectURL(photo)} alt={`Uploaded ${index + 1}`} />
                                            <button onClick={() => handleRemovePhoto(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <label className="photo-container" htmlFor="photo-upload">
                                        <span>+</span>
                                        <input
                                            type="file"
                                            id="photo-upload"
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                        />
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
                                        {/* Example: <video src={URL.createObjectURL(highlight)} controls></video> */}
                                        <button onClick={() => handleRemoveHighlight(index)}>Remove</button>
                                    </div>
                                ))}

                                {/* Upload gaming highlight button */}
                                <label className="highlight-container" htmlFor="highlight-upload">
                                    <span>+</span>
                                    <input
                                        type="file"
                                        id="highlight-upload"
                                        accept="video/*"
                                        onChange={handleHighlightUpload}
                                    />
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
