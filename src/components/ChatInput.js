import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";

const ChatInput = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

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
        { type: "bot", text: response.data.reply },
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };


  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <TextField
        fullWidth
        variant="outlined"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        label="Type a message"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        sx={{ marginLeft: 2 }}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
