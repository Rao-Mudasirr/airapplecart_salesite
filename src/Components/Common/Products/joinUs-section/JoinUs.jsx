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
            <Typography className='join-desc'>{joinUs?.description}</Typography>
        </Box>
        <Box sx={{textAlign: 'center', marginTop:'40px'}}>
            <Button className='btn-join'>Join Us Today</Button>
        </Box>
        {/* <div style={{background: 'linear-gradient(#FFFFFF00, #34CAB4)'}}> */}
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <img style={{position:'relative', bottom: '-75px', left: '-65px'}} src='assets/Products/Ornament 69.svg'/>
            <img style={{position:'relative', bottom: '-75px', right: '-65px'}} src='assets/Products/Ornament 69.svg'/>
        </Box>
        {/* </div> */}
    </Box>
    <Box className="joinUs-image">
        <img style={{width:'70%', position: 'relative', top: '-300px'}} src={joinUs?.img} />
    </Box>
    </React.Fragment>
  )
}
