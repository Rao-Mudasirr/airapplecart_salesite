import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './apple-cart1.scss';
export const AppleCart1 = () => {
    const tabs = [
        {
            title: 'Customer Service',
        },
        {
            title: 'IT Service',
        },
        {
            title: 'CRM',
        },
    ]
  return (
    <Container maxWidth="xl">
        <Box sx={{marginTop: '100px', padding: '60px', paddingTop:'0px', height:'auto', background: 'linear-gradient(10deg, white 0%, #F8F8F8 100%)', borderTopLeftRadius: '45.48px', borderTopRightRadius: '45.48px'}}>
            <img style={{position: 'relative', left: '75%', top: '5%'}} src='assets/Home/circle-icon.svg' alt='Icons' />
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '11px'}}>
                <span className='heading-top'>What Is Air AppleCart</span>
            </div>
            <Typography className='heading-typo'>
                Discover the future of seamless customer engagement with Air Apple Cart - the cutting-edge CRM platform designed to elevate your business growth. Say goodbye to complex systems and hello to effortless customer relationship management. Our intuitive platform empowers you to streamline data, automate workflows, and make data-driven decisions for exceptional success.
            </Typography>
            <br/>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {
                    tabs?.map((val,index)=>(
                        <span style={{background:'white', padding: '15px', borderRadius: '12px', width: 'auto', margin: '12px', textAlign: 'center'}} key={index}>{val.title}</span>
                    ))
                }
            </div>
            <Box className="apple-cart1-img" sx={{display: 'flex',justifyContent: 'center', position: 'relative', top: '-70px'}}>
                <img src='assets/Home/applecart1-image.png' width={'100%'}/>
            </Box>
        </Box>
    </Container>
  )
}
