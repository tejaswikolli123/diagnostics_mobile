import { Avatar, Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import React, { useRef,useState } from 'react'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ReportIcon from '@mui/icons-material/Report';
import NoFoodIcon from '@mui/icons-material/NoFood';

const CardScrollTwo = () => {
    

    const cards=[
        { title:'card1', 
        description1:'Glucose-6 Phosphate',
        description2:'Dehydrogenase(G6PD),',
        description3:"Quantative",
        rate:'₹790',
        detail1:'20 Test Parameter(s)',
        detail2:'Reports within 10 hours',
        detail3:'8 hours of fasting required'},
        { title:'card2', 
            description1:'Glucose-6 Phosphate',
            description2:'Dehydrogenase(G6PD),',
            description3:"Quantative",
            rate:'₹790',
            detail1:'20 Test Parameter(s)',
            detail2:'Reports within 10 hours',
            detail3:'8 hours of fasting required'},
            { title:'card3', 
                description1:'Glucose-6 Phosphate',
                description2:'Dehydrogenase(G6PD),',
                description3:"Quantative",
                rate:'₹790',
                detail1:'20 Test Parameter(s)',
                detail2:'Reports within 10 hours',
                detail3:'8 hours of fasting required'},
                { title:'card4', 
                    description1:'Glucose-6 Phosphate',
                    description2:'Dehydrogenase(G6PD),',
                    description3:"Quantative",
                    rate:'₹790',
                    detail1:'20 Test Parameter(s)',
                    detail2:'Reports within 10 hours',
                    detail3:'8 hours of fasting required'},
                    { title:'card5', 
                        description1:'Glucose-6 Phosphate',
                        description2:'Dehydrogenase(G6PD),',
                        description3:"Quantative",
                        rate:'₹790',
                        detail1:'20 Test Parameter(s)',
                        detail2:'Reports within 10 hours',
                        detail3:'8 hours of fasting required'},
    ]


    
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h4" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
            Frequently Booked Tests 
          </Typography>
        </Box>
        <Box sx={{ width: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button variant="outlined" sx={{ color: '#2CCE6C', textTransform: 'capitalize' }}>
            View All
          </Button>
        </Box> 
                
        </Box>
      <Box sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding:"10px",
          width: '90%',
          '&::-webkit-scrollbar': {
            display: 'none', // Optional: Hide scrollbar for a cleaner look
          },
        }}
        // Assign the scroll reference to the container
      >
        {cards.map((card, index) => (
          <Card variant='outlined' key={index} sx={{ minWidth:350, maxWidth: 400,height:'350px', flexShrink: 0 }}>
            <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent sx={{width:'60%'}}>
                            <Typography variant='h6' sx={{ fontSize: '15px' }}>{card.description1}</Typography>
                            <Typography variant='h6' sx={{ fontSize: '15px' }}>{card.description2}</Typography>
                            <Typography variant='h6' sx={{ fontSize: '15px' }}>{card.description3}</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6' sx={{fontSize:'30px',fontWeight:'700'}}>{card.rate}</Typography>
                        </CardContent>
                    </CardContent>
                    <CardContent sx={{height:'120px'}}>
                        <Typography variant='body1' sx={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} />{card.detail1}</Typography>
                        <Typography variant='body1' sx={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />{card.detail2}</Typography>
                        <Typography variant='body1' sx={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />{card.detail3}</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px',width:'65%',justifyContent:'left',paddingLeft:'20px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>
        
            
          </Card>
        ))}
      </Box>
      
    </Box>
  )
}

export default CardScrollTwo