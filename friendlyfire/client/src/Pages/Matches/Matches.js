import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import AuthModal from "../Component/AuthModal.js"
// import {useState} from 'react'
// import {useCookies} from "react-cookie"

const Matches = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [potentialMatches, setPotentialMatches] = useState([]);
  const user_Id = "test-2";

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log("step 1");
      try {
        const response = await fetch(`/user?userId=${user_Id}`);
        console.log("step 2");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCurrentUser(data);
        // Once the user's preference is known, fetch potential matches
        fetchPotentialMatches(data.gender_interest);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserProfile();
  }, [user_Id]);

  const fetchPotentialMatches = async (gender_interest) => {
    try {
      const response = await fetch(`/gendered-users/${gender_interest}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPotentialMatches(data);
    } catch (error) {
      console.error("Failed to fetch potential matches:", error);
    }
  };

  const handleSwipe = async (direction, matchUserId) => {
    if (direction === "right") {
      try {
        // Assume we have an endpoint to update the user's matches
        await axios.post("/update-matches", {
          user_Id,
          matchUserId,
        });
        // Optionally, fetch the updated list of matches or update UI accordingly
      } catch (error) {
        console.error("Failed to update matches:", error);
      }
    }
    // Logic for left swipe or dismissing the match can go here
  };

  return (
    <div>
      <h1>matches</h1>
      {potentialMatches.map((match) => (
        <div key={match.user_id}>
          {/* Display match details. Wrap this in swipeable component from a library */}
          {match.name}
        </div>
      ))}
    </div>
    //   <div className="home">
    //       <h1>Swipe Right</h1>

    //     <button className="primary-button" onClick={handleClick}>
    //                 {authToken ? 'Signout' : 'Create Account'}
    //             </button>
    //  </div>
  );
};

export default Matches;