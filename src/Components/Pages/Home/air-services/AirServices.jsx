import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './air-services.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export const AirServices = () => {
  
  const cardData = [
    {
      id: '1',
      title: 'Air Marketer',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '2',
      title: 'Air Sales',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '3',
      title: 'Air Services',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '4',
      title: 'Air Operations',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '5',
      title: 'Calendar Piper',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },

    {
      id: '6',
      title: 'Flat Sign',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '7',
      title: 'Stenogofer',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '8',
      title: 'MLM',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
    {
      id: '9',
      title: 'Grammer Tok',
      desc: 'Modernize IT service and operations with an intuitive, completely integrated IT',
    },
  ]

  return (
    <Container maxWidth="xl" sx={{marginTop: '100px'}}>
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <div style={{color: '#6B7280', fontSize: '16px', fontFamily: 'Plus Jakarta Sans', fontWeight: '600px', lineHeight: '24px', letterSpacing: '1.25px', wordWrap: 'break-word'}}>AirApple Cart PRODUCTS</div>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <strong style={{color: '#1F2937', fontSize: '48px', fontFamily: 'Plus Jakarta Sans', fontWeight: '600px', wordWrap: 'break-word'}}>All SaaS, no bloat.</strong>
            </Box>
            <br/>
            <br/>
            <br/>
            <Grid container>
              {
                cardData?.map((val, index)=>(
                  <Grid xs={12} sm={12} md={6} lg={4} xl={4} sx={{display: 'flex', justifyContent:'space-around'}}>
                  <Card variant='outlined' key={index} className='service-card'>
                      <div className='card-top'>
                        <div style={{background: '#fafafa', padding: '7px 10px', borderRadius: '12px', border: '1px solid lightgray'}}>
                          <img src='assets/Home/Wrench.svg' alt='Icons'/>
                        </div>
                        <div style={{padding: '7px 10px'}}>
                          <img src='assets/Home/far-arrow.svg' alt='Icons'/>
                        </div>
                      </div>
                      <br/>
                      <div className='card-title'>
                        <span>{val?.title}</span>
                      </div>
                      <div className='card-description'>
                        <p>{val?.desc}</p>
                      </div>
                  </Card>
                </Grid>
                ))
              }
                
            </Grid>
        </Box>
    </Container>
  )
}
