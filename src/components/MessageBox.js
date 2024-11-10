import React from "react";
import { ListItem, Paper, Typography } from "@mui/material";

const MessageBox = ({ type, text }) => {
  return (
    <ListItem sx={{ justifyContent: type === "user" ? "flex-end" : "flex-start" }}>
      <Paper
        sx={{
          padding: 2,
          maxWidth: "70%",
          backgroundColor: type === "user" ? "#3f51b5" : "#f1f1f1",
          color: type === "user" ? "white" : "black",
          borderRadius: 2,
        }}
      >
        <Typography>{text}</Typography>
      </Paper>
    </ListItem>
  );
};

export default MessageBox;
