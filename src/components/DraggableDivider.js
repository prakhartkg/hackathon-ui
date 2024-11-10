import React, { useState } from "react";
import { Divider, Box } from "@mui/material";

const DraggableDivider = ({ onDrag }) => {
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      onDrag(e.movementX); // Adjust sidebar width based on mouse movement
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <Box
      sx={{
        cursor: "col-resize",
        width: "5px", // Width of the divider handle
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Slight gray for visibility
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Divider orientation="vertical" flexItem sx={{ borderColor: "divider" }} />
    </Box>
  );
};

export default DraggableDivider;
