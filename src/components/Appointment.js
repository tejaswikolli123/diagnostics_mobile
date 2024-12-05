import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';

const Main = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px',
        gap: '20px' 
      }}
    >
      {/* Header Image */}
      <img 
        height="200px" 
        width="350px"
        alt="Header"
        src="https://lupindiagnostics.com//storage/home-page-banners/August2024/Baiq3UgMOHWGxRcwz60B.jpg"
      />

      {/* Booking Form */}
      <Box 
        sx={{ 
          width: '350px',
          boxShadow: '2px 2px 5px #cfcfcf',
          border: '1px solid #fefefe',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box 
          sx={{ 
            backgroundColor: '#6C4675', 
            padding: '1.5rem', 
            textAlign: 'center' 
          }}
        >
          <Typography variant="h6" color="white">
            Book a Free Home Collection!
          </Typography>
        </Box>

        {/* Form Content */}
        <Box 
          sx={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <TextField label="Enter your full name" size="small" fullWidth />
          <TextField label="Enter your contact number" size="small" fullWidth />
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#2CCE6C', 
              color: 'white', 
              textTransform: 'capitalize' 
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* Chat Button */}
      <Button 
        variant="contained" 
        startIcon={<SmsIcon />}
        sx={{ 
          textTransform: 'capitalize', 
          backgroundColor: '#2CCE6C', 
          color: 'white', 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          zIndex: 999 
        }}
      >
        Chat with us
      </Button>
    </Box>
  );
};

export default Main;
