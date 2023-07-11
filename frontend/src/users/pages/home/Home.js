import React from 'react'
import Hero from './Hero'
import Carousel from './Carousel'
import Featured from './Featured'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Carousel/>
      <Featured/>
      <Footer/>
    </div>
  )
}
