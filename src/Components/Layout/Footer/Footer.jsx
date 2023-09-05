import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.scss'

export const Footer = () => {
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
                    <span className='footer-nav'>Social Media Links</span>
                    <span className='footer-nav'>Data Ploicy</span>
                    <span className='footer-nav'>Contact Us</span>
            </Box>
            <br/>
            <div style={{marginBottom: '20px'}}>
            <Divider variant="inset" sx={{position: 'relative', left: '-70px', width: '100%'}} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography className='right-reserved'>© 2023 Air Applecart. All rights reserved</Typography>
              <Box>
                  <span><InstagramIcon /></span>&nbsp;
                  <span><YouTubeIcon /></span>&nbsp;
                  <span><TwitterIcon /></span>&nbsp;
                  <span><FacebookIcon /></span>&nbsp;
              </Box>
            </div>
        </Container>
    </div>
  )
}
