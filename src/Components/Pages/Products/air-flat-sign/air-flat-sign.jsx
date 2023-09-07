import React from 'react'
import { Product } from '../../../Common/Product'
import {hero, features, benefits, joinUs} from './air-FiatSign-data';

export const Air_Flat_Sign = () => {
  return (
    <Product
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
