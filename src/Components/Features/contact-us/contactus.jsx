import React from 'react'
import { Hero_Section } from './hero-section'
import { ContactFormSection } from './contact-form-section'
import { ContactInfo } from './contact-info'
import { Box } from '@mui/material'
import { VisitUs } from './visit-us'

export const ContactUs = () => {
  return (
    <Box className="ContactUs">
        <Hero_Section />
        <ContactFormSection />
        <ContactInfo />
        <VisitUs />
    </Box>
  )
}
