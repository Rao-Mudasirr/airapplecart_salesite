import React from 'react'
import { Hero } from './Products/hero-section/Hero'
import { Features } from './Products/features-section/Features'
import { Benefit } from './Products/benefits-section/Benefit'

export const Product = ({hero, feature, benefits, joinUs}) => {
  return (
    <React.Fragment>
        <Hero hero={hero} />
        <Features feature={feature} />
        {/* <Benefit benefits={benefits}/> */}
    </React.Fragment>
  )
}
