import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react';
import './hero-section.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Hero = ({hero}) => {
  return (
    <div className="Hero-Section2">
    <Container sx={{display: 'flex', justifyContent: 'center', position: "relative"}}>
    <Box>
        <img className='arrow-image2' src='assets/Home/abstract.png' alt='Arrow Image' />
        <img className='stars-icons2' src='assets/Home/Stars.svg' alt='Stars Icons' />
    </Box>
    <Box className="hero-section-content2">
        <div className='hero-content-size2'>
            <div className='hero-top2'>Air Marketer</div>
            <div className='hero-middle2'>Empower Your Marketing Efforts with Precision and Impact</div>
            <div>
                <p className='hero-paragraph2'>Welcome to Air Marketer, the flagship marketing solution offered by Air Apple Cart. Just like the Marketing Hub in HubSpot, Air Marketer is designed to revolutionize your marketing strategies and elevate your business to new heights. With a suite of powerful tools and features at your fingertips, Air Marketer empowers you to create, execute, and measure impactful marketing campaigns with ease.</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="outlined" className='hero-btn'>Start Free Trial &nbsp; <KeyboardArrowRightIcon /></Button>
            </div>
        </div>
    </Box>
    </Container>
    </div>
  )
}
