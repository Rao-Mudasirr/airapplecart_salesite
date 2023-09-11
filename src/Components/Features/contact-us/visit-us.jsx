import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import './contact-us.scss';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const VisitUs = () => {
  return (
    <Box>
        <Container maxWidth="xl">
            <Box>
                <div className='cart2-ellipse'>
                    <img src={'assets/Home/Ellipse 22.svg'} />
                </div>
            </Box>
            <div className='visit-us-bg'>
                <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '64px'}}>
                    <Box className='visit-icon'><img src='/assets/Contactus/location.png' alt='Location Icon'/></Box>
                </Box>
                <br/>
                <Typography className='visit-title'>Visit Us</Typography>
                <br/>
                <Typography className='visit-address'>Air Apple Cart Headquarters 6-9 square, Stockley Park, Uxbridge, UB1 11FW, United Kingdom </Typography>
                <Typography className='visit-description'>We're excited to hear from you and assist you on your journey with Air Apple Cart. Your feedback and engagement are essential to us, and we look forward to connecting with you soon! </Typography>
            </div>
        </Container>
    </Box>
  )
}
