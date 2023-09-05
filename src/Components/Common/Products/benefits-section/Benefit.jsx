import React from 'react'
import './benefit-section.scss';
import { Box, Container, Grid } from '@mui/material';

export const Benefit = ({benefits}) => {
    console.log({benefits})
  return (
    <Container maxWidth="xl">
        <Box>
            <Grid container>
                <Grid sm={12} md={6} lg={6}>
                    
                </Grid>
                
                <Grid sm={12} md={6} lg={6}>
                    <Box>
                        <img style={{width: '60%', height: '70%'}} src={benefits[0]?.image} alt='Benefits Image' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}
