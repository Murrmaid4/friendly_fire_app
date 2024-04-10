import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messages.css";
import { MongoClient } from "mongodb";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [messagesForUser, setMessagesForUser] = useState({});

  useEffect(() => {
    fetchMatchedUsers();
  }, []);

  const fetchMatchedUsers = async () => {
    const currentUserId = "test"; // Replace with the actual current user ID

    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("app-data");
      const users = database.collection("users");

      const currentUser = await users.findOne({ user_id: currentUserId });
      const matchedUserIds = currentUser.matches.map((match) => match.user_id);

      const fetchedMatchedUsers = await users
        .find({ user_id: { $in: matchedUserIds } })
        .toArray();

      setMatchedUsers(fetchedMatchedUsers);
    } finally {
      await client.close();
    }
  };

  const fetchMessages = async (matchedUserId) => {
    try {
      const currentUserId = "test"; // Replace with the actual current user ID
  
      const response = await axios.get("/messages", {
        params: { userId: currentUserId, correspondingUserId: matchedUserId },
      });
  
      setMessagesForUser((prevState) => ({
        ...prevState,
        [matchedUserId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e, matchedUserId) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
  
    try {
      const currentUserId = "test"; // Replace with the actual current user ID
  
      const message = {
        from_userId: currentUserId,
        to_userId: matchedUserId,
        text: newMessage,
      };
  
      await axios.post("/message", { message });
  
      const newMessageObj = {
        from_userId: currentUserId,
        to_userId: matchedUserId,
        text: newMessage,
      };
  
      setMessagesForUser((prevState) => ({
        ...prevState,
        [matchedUserId]: [...(prevState[matchedUserId] || []), newMessageObj],
      }));
  
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
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

      {/* Matched Users List */}
      {matchedUsers.map((user) => (
        <div key={user.user_id}>
          <h3>{user.first_name}</h3>
          {/* Message List */}
          <div className="message-list">
            {(messagesForUser[user.user_id] || []).map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.from_userId === "currentUserId" ? "user" : "other"
                }`}
              >
                {/* Message Text */}
                <div className="message-content">{message.text}</div>
              </div>
            ))}
          </div>

          {/* Send Message Form */}
          <form
            onSubmit={(e) => handleSubmit(e, user.user_id)}
            className="send-message-form"
          >
            <textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleMessageChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Messages;