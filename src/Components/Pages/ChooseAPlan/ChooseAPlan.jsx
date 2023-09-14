import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Hero } from '../../Common/Products/hero-section/Hero'
import { PlanTable } from './plan-table/plan-table';
export const hero = [
    {
        title: 'Pricing Plans of AirApple Products',
        description: 'Choose the plan that you are interested in'
    }
];
export const ChooseAPlan = () => {
    return (
        <>
            <div className="choose-a-plan">
                <Container>
                    <Hero hero={hero} page={true} />
                    <Grid container>
                        <Grid item xs={12}>
                            <div className="back-button flex flex-center">
                                <div className="icon pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12.7598 7.90662L4.66643 16L12.7598 24.0933" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.334 16H4.89398" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <Box sx={{mb:'7px',ml:'10px'}} className="text-24-600 pointer">
                                    Choose a plan
                                </Box>
                            </div>
                            <div className="table">
                                <PlanTable />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
