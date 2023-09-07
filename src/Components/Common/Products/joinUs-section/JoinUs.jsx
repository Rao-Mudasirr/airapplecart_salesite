import React from 'react';
import './join-us.scss';
import { Box, Button, Typography } from '@mui/material';

export const JoinUs = ({joinUs}) => {
  return (
    <React.Fragment>
    <Box className='joinUs'>
        <Box className='joinUs-box1'>
            <Typography className='join-title'>{joinUs?.title}</Typography>
        </Box>
        <br/>
        <Box className='joinUs-box2'>
            <Typography className='join-desc'><span>{joinUs?.description}</span></Typography>
        </Box>
        <Box sx={{textAlign: 'center', marginTop:'40px'}}>
            <Button className='btn-join'>Join Us Today</Button>
        </Box>
    </Box>
    <Box className="joinUs-image">
        <img style={{ position: 'relative', top: '-200px', width: '65%'}} src={joinUs?.img} />
    </Box>
    </React.Fragment>
  )
}
