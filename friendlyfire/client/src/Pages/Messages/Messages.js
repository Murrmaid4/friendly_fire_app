import React, { useState } from "react";
import "./Messages.css";
import BackButton from "../../assets/Icons/back.svg"
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
          <button className="back-button">
            <img src={BackButton} alt="Back Button"/> 
          </button>
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
          placeholder="Enter your message"
          value={newMessage}
          onChange={handleMessageChange}
          required
        />
        <button className="send-icon" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M13.706 7.4009C13.6131 7.49038 13.5027 7.56137 13.3812 7.60982C13.2597 7.65826 13.1294 7.6832 12.9978 7.6832C12.8663 7.6832 12.736 7.65826 12.6145 7.60982C12.493 7.56137 12.3826 7.49038 12.2897 7.4009L8.00017 3.28251V15.0402C8.00017 15.2947 7.89485 15.5389 7.70737 15.7189C7.51989 15.8989 7.26561 16 7.00047 16C6.73533 16 6.48106 15.8989 6.29358 15.7189C6.1061 15.5389 6.00077 15.2947 6.00077 15.0402V3.28251L1.70956 7.4009C1.52175 7.58121 1.26703 7.68251 1.00143 7.68251C0.735838 7.68251 0.481119 7.58121 0.293314 7.4009C0.105508 7.22059 2.79852e-09 6.97603 0 6.72103C-2.79852e-09 6.46603 0.105508 6.22148 0.293314 6.04117L6.29152 0.282301C6.38439 0.192821 6.49475 0.121824 6.61627 0.0733804C6.73778 0.0249368 6.86806 0 6.99964 0C7.13121 0 7.26149 0.0249368 7.38301 0.0733804C7.50453 0.121824 7.61488 0.192821 7.70776 0.282301L13.706 6.04117C13.7992 6.13033 13.8731 6.23629 13.9236 6.35296C13.974 6.46962 14 6.59471 14 6.72103C14 6.84736 13.974 6.97244 13.9236 7.0891C13.8731 7.20577 13.7992 7.31173 13.706 7.4009Z" fill="#F4F4F4"/>
          </svg>
        </button>
      </form>
    </div>

  );
};


export default Messages;
