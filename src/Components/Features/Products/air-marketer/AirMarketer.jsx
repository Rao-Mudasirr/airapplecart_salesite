import React from 'react'
import { Product } from '../../../Common/Product'

export const AirMarketer = ({hero, feature, benefits, joinUs}) => {
  return (
    <Product
        hero={hero}
        feature={feature}
        benefits={benefits}
        joinUs={joinUs}     
    />
  )
}
