import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    try {
      await axios.post("/message", { message: newMessage });
      setMessages([...messages, { text: newMessage, sender: "user" }]);
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
          {/* Add action buttons here */}
        </div>
      </div>

      {/* Message List */}
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "user" ? "user" : "other"}`}>
            {/* Profile Photo (if available) */}
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
