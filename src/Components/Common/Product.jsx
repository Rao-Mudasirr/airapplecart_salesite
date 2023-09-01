import React from 'react'
import { Hero } from './Products/hero-section/Hero'

export const Product = ({hero, feature, benefits, joinUs}) => {
  return (
    <React.Fragment>
        <Hero hero={hero} />
    </React.Fragment>
  )
}
