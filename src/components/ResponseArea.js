import React from 'react';
import { Box, Typography } from '@mui/material';

const ResponseArea = ({ responseData }) => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6">Response:</Typography>
      <Box sx={{ backgroundColor: '#f4f4f4', padding: 2, borderRadius: 1, marginTop: 1 }}>
        <Typography variant="body1">
          {responseData && <div dangerouslySetInnerHTML={{ __html: responseData }} />}
        </Typography>
      </Box>
    </Box>
  );
};

export default ResponseArea;
