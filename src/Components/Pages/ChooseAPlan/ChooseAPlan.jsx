import { Container } from '@mui/material'
import React from 'react'
import { Hero } from '../../Common/Products/hero-section/Hero'
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
            </Container>
        </div>
    </>
  )
}
