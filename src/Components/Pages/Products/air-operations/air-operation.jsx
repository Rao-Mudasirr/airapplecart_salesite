import React from 'react'
import { Product } from '../../../Common/Product'
import {hero, features, benefits, joinUs} from './air-operation-data';

export const Air_Operation = () => {
  return (
    <Product
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
