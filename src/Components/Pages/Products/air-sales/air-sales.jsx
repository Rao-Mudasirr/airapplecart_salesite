import React from 'react'
import { Product } from '../../../Common/Product'
import {hero, features, benefits, joinUs} from './air-sales-data';

export const Air_Sales = () => {
  return (
    <Product
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
