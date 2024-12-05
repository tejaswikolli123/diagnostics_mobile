import React, { useRef } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const LatestArticles = () => {
  const scrollRef = useRef(null); // Reference for the scroll container

  // Sample card data
  const cards = [
    {
      title: 'Card 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5XIIyTJqt36PEogADHZiO00e2nTVEsTjBA&s',
      description: 'What are the Reasons for Increasing Cases for High Blood Pressure in Adults?',
      description1: 'Posted on: 13th August, 2024',
    },
    {
      title: 'Card 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxL73KyoddccYuWIBrnnblLAp0i_VP84hLow&s',
      description: 'How Arthritis Blood Tests can Help Diagnose Your Condition?',
      description1: 'Posted on: 13th August, 2024',
    },
    {
      title: 'Card 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx8ey_pzFRTehrl4b6ly_Kc-_c0Y_XeQ9qQ&s',
      description: 'What is the Importance of the Hemoglobin Test and Its Range in Overall Health?',
      description1: 'Posted on: 13th August, 2024',
    },
    {
      title: 'Card 4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy1_xxAtw02E5Z0W7MAYc47NaMM3A9tDREg&s',
      description: 'Erythrocyte Sedimentation Rate (ESR) Test: Know Inflammation Levels',
      description1: 'Posted on: 13th August, 2024',
    },
  ];

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '90%',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
          Latest Blogs & Articles
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#2CCE6C',
            color: '#2CCE6C',
            textTransform: 'capitalize',
          }}
        >
          View All
        </Button>
      </Box>

      {/* Scrollable Cards Container */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          width: '90%',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        ref={scrollRef} // Assign the scroll reference to the container
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              minWidth: 300,
              maxWidth: 350,
              height: '400px',
              flexShrink: 0,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.description}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: 1,
                }}
              >
                {card.description}
              </Typography>
              <Divider sx={{ borderColor: '#6C4675', marginY: 1 }} />
              <Typography variant="body2" sx={{ fontSize: '14px' }}>
                {card.description1}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 2,
        }}
      >
        <IconButton onClick={scrollLeft}>
          <Avatar
            variant="rounded"
            sx={{ backgroundColor: 'gray', width: 30, height: 30 }}
          >
            <NavigateBeforeIcon sx={{ fontSize: '25px' }} />
          </Avatar>
        </IconButton>
        <IconButton onClick={scrollRight}>
          <Avatar
            variant="rounded"
            sx={{ backgroundColor: 'gray', width: 30, height: 30 }}
          >
            <NavigateNextIcon sx={{ fontSize: '25px' }} />
          </Avatar>
        </IconButton>
      </Box>
    </Box>
  );
};

export default LatestArticles;
