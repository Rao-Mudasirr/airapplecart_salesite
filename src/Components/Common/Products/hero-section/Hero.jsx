import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react';
import './hero-section.scss';

export const Hero = ({hero, page}) => {
  return (
    <div className="Hero-Section2">
    <Container sx={{display: 'flex', justifyContent: 'center', position: "relative"}}>
    <Box>
        <img className='arrow-image2' src='assets/Home/abstract.png' alt='Arrow Image' />
        <img className='stars-icons2' src='assets/Home/Stars.svg' alt='Stars Icons' />
    </Box>
    <Box className="hero-section-content2">
        <div className='hero-content-size2'>
            <div className='hero-top2'>{hero[0]?.title}</div>
            {
                !page && (
                    <div className='hero-middle2'>{hero[0]?.section}</div>
                )  
            }
            <div>
                <p className='hero-paragraph2'>{hero[0]?.description}</p>
            </div>
            <br/>
            {page && (
                <div style={{marginBottom: '20px'}}/>
            )}
            {
                !page && (
                <>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <span><img style={{width: '50px', height: '95px', background: '#F3F4F6', borderRadius: 22}} src='/hero-scroll-icon.svg' /></span>
                    </div>
                </>
                )
            }
        </div>
    </Box>
    </Container>
    </div>
  )
}
