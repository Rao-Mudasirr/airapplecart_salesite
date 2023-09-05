import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export const Layout = ({children}) => {
  const SOCIAL_IMAGE =
    process.env.REACT_APP_DEVELOPMENT === "local"
      ? `${process.env.REACT_APP_LOCAL_URL}/Logo-Icon.svg`
      : `${process.env.REACT_APP_PRODUCTION_URL}/Logo_Icon.svg`;
  return (
    <React.Fragment>
      <HelmetProvider>
      <Helmet>
        <meta property="og:image" content={SOCIAL_IMAGE} />
      </Helmet>
        <Navbar />
        {children}
        <Footer />
      </HelmetProvider>
    </React.Fragment>
  )
}
