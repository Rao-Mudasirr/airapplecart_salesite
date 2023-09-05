import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react';
import './hero-section.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const HeroSection = () => {
  return (
    <div className="Hero-Section">
    {/* paddingLeft: '250px', paddingRight: '250px' */}
    <Container sx={{display: 'flex', justifyContent: 'center', position: "relative"}}>
    <Box>
        <img className='arrow-image' src='assets/Home/abstract.png' alt='Arrow Image' />
        <img className='stars-icons' src='assets/Home/Stars.svg' alt='Stars Icons' />
    </Box>
    <Box className="hero-section-content">
        <div className='hero-content-size' style={{width:'60%'}}>
            <div className='hero-top'>Unleash the Power of <span className='apple-cart'>Air AppleCart</span></div>
            
            <div className='hero-middle'>Elevate Your CRM Game for Seamless Growth!</div>
            <div>
                <p className='hero-paragraph'>With seamless integration, data-driven insights, and personalised automation, we're redefining success for businesses of all sizes. Join us in transforming CRM and driving unparalleled success.</p>
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
