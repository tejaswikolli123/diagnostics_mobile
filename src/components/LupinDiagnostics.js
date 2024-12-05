import React, { useRef, useState } from 'react';
import { Box, Card, CardContent, Typography, CardMedia, IconButton, Avatar, Button, Divider } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';



const CardScrollThree = () => {
    

    const cards=[
        {title:'card1', Icon:TrendingUpIcon,description1:"Trend Analysis",description2:'Report'},
        {title:'card2', Icon:StarIcon,description1:" Best Pathology Lab,",description2:'National Category'},
        {title:'card3', Icon:VerifiedIcon,description1:" NABL Accredited",description2:'Labs'},
        {title:'card4', Icon:InsertDriveFileIcon,description1:" Personalized",description2:'Friendly Rep'},
]


  return (
    <Box sx={{ width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center',paddingTop:'20px',backgroundColor:'#6C4675' }}>
      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'left', width: '90%', padding:'30px',alignItems:'left' }}>
      <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '15px',color:'white'}}>You Choose best-in-class Diagonstic Experience with Lupin Diagonstics</Typography>
        
              </Box>

      {/* Scrollable Cards Container */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding:'2',
          
          width: '90%',
          
          '&::-webkit-scrollbar': {
            display: 'none', // Optional: Hide scrollbar for a cleaner look
          },
        }}
         // Assign the scroll reference to the container
      >
        {cards.map((card, index) =>{
            const {Icon,description1,description2}=card
            return(
              <Box sx={{paddingBottom:'50px'}}>
                <Card variant='outlined' key={index} sx={{ minWidth:300, maxWidth: 350,height:'200px', flexShrink: 0 , 
                background: 'linear-gradient(176deg, rgba(88,36,100,1) 0%, rgba(108,70,117,1) 35%, rgba(194,127,210,1) 100%);', 
                borderColor:'white', borderWidth:'1px' }}>
            
                <CardContent sx={{padding:'30px'}}>
                    
                    <Icon sx={{fontSize:'35px', color:'white'}}/>
                    
                  <Typography variant="h6" sx={{fontSize:'20px',fontWeight:'500', color:'white'}}>
                    {description1}
                  </Typography>
                  <Typography variant="h6" sx={{fontSize:'20px',fontWeight:'500',color:'white'}}>
                    {description2}
                  </Typography>
                  
                  
                
                </CardContent>
                
              </Card>
              </Box>
            )
          
})}
      </Box>
      

    </Box>
  )
}

export default CardScrollThree