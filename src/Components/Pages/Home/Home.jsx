import React from 'react'
import { HeroSection } from './hero-section/HeroSection'
import { AppleCart1 } from './apple-cart1/AppleCart1'
import { AppleCart2 } from './apple-cart2/AppleCart2'
import { AirServices } from './air-services/AirServices'
import { CustomersSection } from './customers-section/CustomersSection'
import { FAQ } from './Faq/FAQ'

export const Home = () => {
  return (
    <div>
        <HeroSection />
        <AppleCart1 />
        <AppleCart2 />
        <AirServices />
        <CustomersSection />
        <FAQ />
    </div>
  )
}
