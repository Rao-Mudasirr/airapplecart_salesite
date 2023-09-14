import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './contact-us.scss';

export const ContactFormSection = () => {
  return (
    <Box className='contact-us-section'>
        <Container maxWidth="md" className='contact-us-form'>
            <Box className='contact-title-section'>
                <Typography className='contact-title'>Contact Us</Typography>
            </Box>
            <form>
                <Grid container>
                    <Grid sm={12} md={6} lg={6}>
                        <input style={{width: '90%'}} placeholder='First Name' />
                    </Grid>
                    <Grid sm={12} md={6} lg={6}>
                        <input placeholder='Last Name' />
                    </Grid>
                </Grid>
                {/* <br/> */}
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <input placeholder='Company Name' />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <input placeholder='Phone Number' />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <textarea rows={4} placeholder='How did you hear about us?' />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <textarea rows={4} placeholder='Comments' />
                    </Grid>
                </Grid>
                {/* <br/> */}
                <Grid container>
                    <Grid sm={12} md={6} lg={6}>
                        <input style={{width: '90%'}} placeholder='Address 1' />
                    </Grid>
                    <Grid sm={12} md={6} lg={6}>
                        <input placeholder='Address 2' />
                    </Grid>
                </Grid>
                <button className='btn-form'>Send Message</button>
            </form>
        </Container>
    </Box>
  )
}
