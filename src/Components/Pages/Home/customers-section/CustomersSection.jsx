import React, { useEffect, useState } from 'react'
import './customers-section.scss'
import Slider from 'react-slick'
import { customers_data } from './customers-data'
import { Box, Container, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CustomersSection = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const [slides, setSlidesToShow] = useState(3.5);

  useEffect(() => {

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1350) {
        setSlidesToShow(3.5);
      } else {
        setSlidesToShow(3);
      }
    };

    // Initialize slidesToShow based on the initial window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  const sliderSettings = {
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 602,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Container maxWidth="xl" sx={{marginTop: '70px'}}>
    <Box className='customers-review' sx={{display: 'flex', justifyContent: 'space-between'}}>
        <div className='customer-review-title' style={{color: '#1F2024', fontSize: '45px', fontFamily: 'Plus Jakarta Sans', fontWeight: '600', wordWrap: 'break-word'}}>Our customers love us</div>
        <div className='controls'>
            <button onClick={sliderRef?.slickPrev}>
                <ArrowBackIosIcon />
            </button>
            <button onClick={sliderRef?.slickNext}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    </Box>
    <br/>
    <br/>
    {/* <div className='slider-main'> */}
    <Slider {...sliderSettings} ref={setSliderRef}>
        {customers_data.map((card, index) => (
          <Box key={index} className='slider-card' sx={{background: card?.backgroundColor}}>
            <Typography className='user-review'>{card?.review}</Typography>
            
            <br/>
            <br/>

            <Box className='slider-below'>
                <span className='user-image'>{card?.image}</span>
                <Box>
                    <div className='user-name'>{card?.name}</div>
                    <div className='user-occupation'>{card?.occupation}</div>
                </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      {/* </div> */}
      </Container>
  )
}
