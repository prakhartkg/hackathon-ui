import React, { useState } from "react";
import { Box, TextField, Button, List, ListItem, Paper, Typography } from "@mui/material";
import axios from "axios";
import MessageBox from "./MessageBox";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user message
    setMessages((prevMessages) => [...prevMessages, { type: "user", text: userInput }]);
    setUserInput(""); // Clear the input

    try {
      // Call the bot API
      const response = await axios.post("https://your-api-endpoint.com/chat", {
        message: userInput,
      });
      // Add bot response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: userInput },
        { type: "bot", text: response.data.reply},
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List sx={{ flex: 1, overflowY: "auto", padding: 2 }}>
        {messages.map((msg, index) => (
          <MessageBox key={index} type={msg.type} text={msg.text} />
        ))}
      </List>
      <Box sx={{ display: "flex", padding: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          label="Type a message"
        />
        <Button variant="contained" onClick={sendMessage} sx={{ marginLeft: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
