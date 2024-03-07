// Message page structure  

// Messages.js

import React, { useState } from "react";
import "./Messages.css";
// don't have these yet but am going based on figma
// import phoneIcon from "../../assets/phone-icon.png";
// import videoIcon from "../../assets/video-icon.png";
// import settingsIcon from "../../assets/settings-icon.png";
// import userProfile from "../../assets/user-profile.jpg";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to send the message (e.g., API call)
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="messages-container">
      {/* Header Bar */}
      <div className="header-bar">
        <div className="user-info">
          <button className="back-button">Back</button>
          <span className="user-name">John Doe</span>
        </div>
        <div className="action-buttons">
             {/*
          <img src={phoneIcon} alt="Phone" className="action-icon" />
          <img src={videoIcon} alt="Video" className="action-icon" />
          <img src={settingsIcon} alt="Settings" className="action-icon" />
          */}
        </div>
      </div>

      {/* Message List */}
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "user" ? "user" : "other"}`}>
            {/* Profile Photo 
            <img src={userProfile} alt="Profile" className="profile-photo" />
*/}
            {/* Message Text */}
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Send Message Form */}
      <form onSubmit={handleSubmit} className="send-message-form">
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleMessageChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};


export default Messages;

// This page is the base page for messages will be adding components that will do the message functioning 

