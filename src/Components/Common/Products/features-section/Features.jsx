import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './feature-section.scss';

export const Features = ({feature}) => {
  return (
    <Container maxWidth='xl'>
        <Box className="feature-top">
            <Typography className='feature-top-title'>Features</Typography>
            <Typography className='feature-top-paragrph'>Browse through our list of features and  benefits to your liking</Typography>
        </Box>
        <Box className='feature-cards'>
            <Grid container>
                {
                    feature?.map((val, index) => (
                        <Grid key={val?.id} xs={12} sm={6} md={6} lg={4} xl={4}>
                            {/* <Box className='card-grid'> */}
                                <div className='card'>
                                    <div className='card-icons' style={{background: val?.icon_color}}>
                                        <img src={val?.img} alt='Icon'/>
                                    </div>
                                    <div className='card-title'>
                                        {val?.title}
                                    </div>
                                    <div className='card-desc'>
                                        {val?.description}
                                    </div>
                                </div>
                            {/* </Box> */}
                        </Grid>
                    ))
                }
            </Grid> 
        </Box>
    </Container>
  )
}
