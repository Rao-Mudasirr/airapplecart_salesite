import React from 'react'
import { Product } from '../../../Common/Product'
import {hero, features, benefits, joinUs} from './air-Stenogofer-data';

export const Air_Stenogofer = () => {
  return (
    <Product
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
