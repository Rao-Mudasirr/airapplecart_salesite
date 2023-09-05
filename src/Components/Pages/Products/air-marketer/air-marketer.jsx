import React from 'react'
import { AirMarketer } from '../../../Features/Products/air-marketer/AirMarketer';
import {hero, features, benefits, joinUs} from './air-marketr-data';

export const Air_Marketer = () => {
  return (
    <AirMarketer
        hero={hero}
        feature={features}
        benefits={benefits}
        joinUs={joinUs}
    />
  )
}
