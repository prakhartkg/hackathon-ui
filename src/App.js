import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Box, CssBaseline, ThemeProvider, createTheme,Divider,IconButton } from "@mui/material";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import ChatWindow from "./components/ChatWindow";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240); // Default sidebar width
  const [openSidebar, setOpenSidebar] = useState(true); 
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ marginLeft: 2, display: { sm: "none" } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>
        {/* Flex container to hold the sidebar and chat window */}
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid item sx={{ width: `${sidebarWidth}px`, transition: "width 0.2s" }}>
            <RightSidebar />
          </Grid>

          {/* Draggable Divider */}
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'divider' }} />

          {/* Chat Window Section */}
          <Grid item xs sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Chat Window (Scrollable Area) */}
            <ChatWindow />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
