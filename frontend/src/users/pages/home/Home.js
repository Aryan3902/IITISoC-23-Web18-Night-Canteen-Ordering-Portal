import React,{useContext} from 'react'
import Hero from '../../components/home_components/Hero'
import Carousel from '../../components/home_components/Carousel'
import Featured from '../../components/home_components/Featured'
import Footer from '../../components/home_components/Footer'
import { AuthContext } from "../../../context/auth-context";

export default function Home() {
  const a=useContext(AuthContext)
  return (
    <div>
      <Hero/>
      <Carousel/>
      <Featured/>
      <Footer/>
    </div>
  )
}
