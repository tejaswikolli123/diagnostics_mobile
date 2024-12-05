import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useRef } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PeopleAboutus = () => {
  const scrollRef = useRef(null);

  const cards = [
    {
      title: 'Card 1',
      image: 'https://mui.com/static/images/avatar/5.jpg',
      description:
        'I had a very noticeable good experience with you and your service. Presently there is a lot of skepticism in India for diagnostic tests. In my opinion, Lupin Diagnostics will create a remarkable positive opinion for the diagnostic field in India.',
    },
    {
      title: 'Card 2',
      image: 'https://mui.com/static/images/avatar/5.jpg',
      description:
        'I had a very noticeable good experience with you and your service. Presently there is a lot of skepticism in India for diagnostic tests. In my opinion, Lupin Diagnostics will create a remarkable positive opinion for the diagnostic field in India.',
    },
    {
      title: 'Card 3',
      image: 'https://mui.com/static/images/avatar/2.jpg',
      description:
        'I had a very noticeable good experience with you and your service. Presently there is a lot of skepticism in India for diagnostic tests. In my opinion, Lupin Diagnostics will create a remarkable positive opinion for the diagnostic field in India.',
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        backgroundColor: '#E7FBF8',
      }}
    >
      <Box sx={{ width: '90%', textAlign: 'left', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
          What People Say
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
          About Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding: 2,
          width: '90%',
          '&::-webkit-scrollbar': {
            display: 'none', // Optional: Hide scrollbar for a cleaner look
          },
        }}
        ref={scrollRef}
      >
        {cards.map((card, index) => (
          <Card
            variant="outlined"
            key={index}
            sx={{
              minWidth: 300,
              maxWidth: 350,
              height: '425px',
              flexShrink: 0,
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '35px',
                  textAlign: 'justify',
                }}
              >
                {card.description}
              </Typography>
              <Box sx={{ p: 2 }}>
                <Divider sx={{ border: '1px solid #2CCE6C' }} />
                <CardHeader
                  avatar={
                    <Avatar
                      alt=""
                      src={card.image}
                      sx={{ width: 50, height: 50 }}
                    />
                  }
                  title="Dr. Vijay Somani"
                  subheader="Pune"
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <IconButton onClick={scrollLeft} sx={{ padding: 2 }}>
          <Avatar
            variant="rounded"
            sx={{ backgroundColor: 'gray', width: 30, height: 30 }}
          >
            <NavigateBeforeIcon sx={{ fontSize: '25px' }} />
          </Avatar>
        </IconButton>
        <IconButton onClick={scrollRight} sx={{ padding: 2 }}>
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

export default PeopleAboutus;
