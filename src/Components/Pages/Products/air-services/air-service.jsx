import React from 'react'
import { Product } from '../../../Common/Product'
import {hero, features, benefits, joinUs} from './air-service-data';

export const Air_Service = () => {
  return (
    <Product
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
