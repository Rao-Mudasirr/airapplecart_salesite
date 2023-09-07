import { Box, Button, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './hero-section.scss';

function getRandomColor(index) {
  const letters = ['#111827', '#2ec7b1'];
  if (index >= 0 && index < letters.length) {
    return letters[index];
  } else {
    return '#2ec7b1'; // Default to black if the index is out of range
  }
}

export const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor(1));

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to the next color
      setColorIndex((prevIndex) => (prevIndex + 1) % 2);

      // Set the new color after a 2-second pause
      setTimeout(() => {
        setBackgroundColor(getRandomColor(colorIndex));
      }, 5000);
    }, 4000); // Change color every 3 seconds (2-second pause + 1-second transition)

    return () => clearInterval(intervalId);
  }, [colorIndex]);

  const divStyle = {
    backgroundColor: getRandomColor(colorIndex),
    transition: 'background-color 5s ease', // Add CSS transition
  };
  return (
    <div className="Hero-Section">
    <Container sx={{display: 'flex', justifyContent: 'center', position: "relative", textAlign: 'center'}}>
    <Box>
        <img className='arrow-image' src='assets/Home/abstract.png' alt='Arrow Image' />
        <img className='stars-icons' src='assets/Home/Stars.svg' alt='Stars Icons' />
    </Box>
    <Box className="hero-section-content">
        <div className='hero-content-size' style={{width:'60%'}}>
            <div className='hero-top'>Unleash the Power of <span style={divStyle} className='apple-cart'>Air AppleCart</span></div>
            
            <div className='hero-middle'>Elevate Your CRM Game for Seamless Growth!</div>
            <div>
                <p className='hero-paragraph'>With seamless integration, data-driven insights, and personalised automation, we're redefining success for businesses of all sizes. Join us in transforming CRM and driving unparalleled success.</p>
            </div>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <span><img style={{width: '50px', height: '95px', background: '#F3F4F6', borderRadius: 22}} src='/hero-scroll-icon.svg' /></span>
            </div>
        </div>
    </Box>
    </Container>
    </div>
  )
}
