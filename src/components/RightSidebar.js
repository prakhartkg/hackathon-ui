import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RightSidebar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Settings content goes here.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Friends</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Friends content goes here.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Notification settings here.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RightSidebar;
