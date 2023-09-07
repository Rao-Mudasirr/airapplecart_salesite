import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import './apple-cart2.scss'
import { cartData2 } from './cart2-data'

export const AppleCart2 = () => {
  return (
    <Container maxWidth="xl" sx={{marginTop: '120px'}}>
        <Box>
            <div className='cart2-ellipse'>
                <img src={'assets/Home/Ellipse 22.svg'} />
            </div>
        </Box>
        <Box className="cart2-card">
            <div className='cart2-heading'>
                <span className='heading-typo'>Why Choose Air AppleCart ?</span>
            </div>
            <Grid container className='cart2-grid-section'>
                <Grid xm={12} sm={12} mid={6} lg={6}>
                    <Box className="cart2-grid-left">
                        <div className='left' style={{width: '80%'}}>
                            {
                                cartData2?.map((data, index)=> (
                                    <section key={data?.id} style={{marginBottom: '20px'}}>
                                        <span className='heading'>{data?.heading}</span>
                                        <p className='paragraph'>{data?.desc}</p>
                                    </section>
                                ))
                            }    
                        </div>
                    </Box>
                </Grid>
                
                <Grid xm={12} sm={12} md={12} lg={6} className='cart2-grid-right-main'>
                    <Box className='cart2-grid-right'>
                       <img src='assets/Home/applecart2.svg'/>
                    </Box>
                </Grid>
            </Grid>
        </Box>

         <Box sx={{marginTop: '-50px', padding: '30px'}}>
            <Grid container>
                <Grid xm={12} md={6} lg={6}>
                    <div>
                        <img style={{width: '100%'}} src='assets/Home/applecart2-boy.png'/>
                    </div>  
                </Grid>
                
                <Grid xm={12} md={6} lg={6}>
                    <Box className="customer-relationship">
                        <p className='paragraph'>Join the revolution in customer relationship management</p>
                        <div className='title'>Explore Air AppleCart Today and Take your Business to New Heights</div><br/>
                        <div className='description'>Elevate engagement, enhance efficiency, and embrace success with Air Apple Cart.</div><br/>
                        <button>Join Us Today</button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}
