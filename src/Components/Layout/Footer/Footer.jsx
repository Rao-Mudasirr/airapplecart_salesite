import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import './footer.scss'

export const Footer = () => {
  const social_icons = [
    {
      id: 1,
      icon: '/twitter.svg',
    },
    {
      id: 2,
      icon: '/instagram.svg',
    },
    {
      id: 3,
      icon: '/facebook.svg',
    },
    {
      id: 4,
      icon: '/linkedin.svg',
    },
    {
      id: 5,
      icon: '/tiktok.svg',
    },
    {
      id: 6,
      icon: '/pintrest.svg',
    },
    {
      id: 7,
      icon: '/youtube.svg',
    },
  ];
  return (
    <div style={{width:'100%', background: '#F9FAFB'}}>
        <Container maxWidth="xl" sx={{padding: '20px'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
              <div>
                <img src='assets/Home/Logo.png' alt='Logo' />
              </div>
            </Box>
            <br/>
            <Box className="footer-links" sx={{display: 'flex', justifyContent: 'center'}}>
                    <span className='footer-nav'>Cookie Policy</span>
                    <span className='footer-nav'>Privacy Policy</span>
                    <span className='footer-nav'>Data Ploicy</span>
                    <span className='footer-nav'>Contact Us</span>
            </Box>
            <br/>
            <div style={{marginBottom: '20px'}}>
            <Divider variant="inset" sx={{position: 'relative', left: '-70px', width: '100%'}} />
            </div>
            <div className='below-footer-icons'>
              <Typography className='right-reserved'>© 2023 Air Applecart. All rights reserved</Typography>
              <br/>
              <Box>
                {
                  social_icons?.map((data,index)=>(
                    <span className='footer-icons' key={data?.id}><img src={data?.icon}/></span>
                  ))
                }
              </Box>
            </div>
        </Container>
    </div>
  )
}
