import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './contact-us.scss';
import { info_data } from './contact-us-data';

export const ContactInfo = () => {
  return (
    <React.Fragment>
        <Container maxWidth="xl" sx={{marginTop: '100px', marginBottom: '70px'}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography className='contact-info-title'>Contact Information</Typography>
                <Typography className='contact-info-sub-title'>Have any questions? We'd love to hear from you.</Typography>
            </Box>
            <Box className="contact-info-cards-sect">
                <Grid container>
                {
                    info_data?.map((data,index) => (
                        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Card className="card-info" variant='outlined'>
                            <div className='info-icons' style={{background: '#f7f7f9'}}>
                                <img src={data?.icon} alt='Icon'/>
                            </div>
                            <Box>
                                <Typography className="info-title">{data?.title}</Typography>
                                <Typography className="info-description">{data?.description}</Typography>
                            </Box>
                            <hr style={{width: '90%'}}/>
                            <Box>
                                <Typography className="info-email">{data?.email}</Typography>
                                <Typography className="info-number">{data?.number}</Typography>
                            </Box>
                        </Card>
                    </Grid>
                    ))
                }
                    
                </Grid>
            </Box>
        </Container>
    </React.Fragment>
  )
}
