import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material'
import React from 'react'
import { accordian_data } from './accordian-data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.scss';

export const FAQ = () => {
  return (
    <Container sx={{marginTop:'120px', marginBottom:'50px'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <div className='faq-heading'>Frequently Asked Questions</div>
        </Box>
        <Box className="accordian-body" sx={{padding: '100px', paddingTop: '60px'}}>
        {
            accordian_data?.map((acc, index)=>(
                <Accordion key={acc?.id} elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className='acc-title'>{acc?.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className='acc-desc'>
                        {acc?.desc}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            ))
        }
            </Box>
    </Container>
  )
}
