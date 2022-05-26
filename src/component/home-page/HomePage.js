import React from 'react'
import Partners from '../coworking-partners/Partners'
import Footer from '../footer/Footer'
import FromUs from '../from-us/FromUs'
import HeaderPage from '../header/HeaderPage'
import LiveSpaces from '../live-spaces/LiveSpaces'
import PosterPage from '../poster/PosterPage'
import SliderMenu from '../top-working-slider/SliderMenu'

function HomePage() {
  return (
      <>
            <HeaderPage />
            <PosterPage />
            <LiveSpaces />
            <FromUs />
            <SliderMenu />
            <Partners />
            <Footer />
    </>
  )
}

export default HomePage