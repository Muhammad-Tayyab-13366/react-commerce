import React from 'react'
import styled from 'styled-components'
import  HeroSection  from './components/HeroSection';
import Services from './components/Services';
import { Trusted } from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';
const Home = () => {
    const data = {
        name: "Tayyab Store"
    };
  return (
    <>
        <HeroSection myData={data} />
        <FeatureProducts/>
        <Services/>
        <Trusted/>
    </>
    
  )
}


export default Home
// This is a simple React component that renders a div with the text "Home".
