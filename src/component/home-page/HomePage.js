import React from 'react'
import Partners from '../coworking-partners/Partners'
import Footer from '../footer/Footer'
import FromUs from '../from-us/FromUs'
import HeaderPage from '../header/HeaderPage'
import LiveSpaces from '../live-spaces/LiveSpaces'
import SliderMenu from '../top-working-slider/SliderMenu'

function HomePage() {
  return (
      <>
            <HeaderPage />
            <LiveSpaces />
            <FromUs />
            <SliderMenu />
            <Partners />
            <Footer />
    </>
  )
}

export default HomePage