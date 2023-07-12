import React from 'react'
import Hero from '../../components/home_components/Hero'
import Carousel from '../../components/home_components/Carousel'
import Featured from '../../components/home_components/Featured'
import Footer from '../../components/home_components/Footer'

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
