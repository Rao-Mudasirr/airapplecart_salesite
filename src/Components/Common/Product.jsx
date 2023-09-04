import React from 'react'
import { Hero } from './Products/hero-section/Hero'
import { Features } from './Products/features-section/Features'

export const Product = ({hero, feature, benefits, joinUs}) => {
  return (
    <React.Fragment>
        <Hero hero={hero} />
        <Features feature={feature} />
    </React.Fragment>
  )
}
