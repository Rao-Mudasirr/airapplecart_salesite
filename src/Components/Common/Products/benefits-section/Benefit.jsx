import React from 'react'
import './benefit-section.scss';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Benefit = ({benefits}) => {
  return (
    <div style={{background: '#f8f8f8'}}>
    <Container maxWidth="xl" sx={{paddingBottom: '10%'}}>
        <Box sx={{marginTop: '100px', paddingTop: '90px'}}>
            <Grid container className='benefit-section'>
                <Grid sm={12} md={6} lg={6}>
                    <div><Typography className='benefit-title'>Benefits</Typography></div>
                    <p className='benefit-description'>{benefits[0]?.description}</p>
                    <br/>
                    {
                        benefits[0]?.benefit?.map((val,index)=>(

                            <div key={val?.id} style={{display: 'flex'}}>
                                <Box sx={{textAlign: 'center'}}>
                                    <div style={{padding: '12px',borderRadius: 10, border: '0.50px #E5E7EB solid'}}>
                                        <img src={val?.img} alt='Benefits Icons'/>
                                    </div>
                                </Box>
                                &nbsp; &nbsp; &nbsp;
                                <Box className='benefit-list'>
                                    <span className='benefit-list-title'>{val?.title}</span>
                                    <p className='benefit-list-description'>{val?.description}</p>
                                </Box>
                            </div>
                        ))
                    }
                </Grid>
                
                <Grid sm={12} md={6} lg={6}>
                    <Box sx={{textAlign: 'center'}}>
                        <img style={{width: '80%', height: '690px'}} src={benefits[0]?.image} alt='Benefits Image' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
    </div>
  )
}
