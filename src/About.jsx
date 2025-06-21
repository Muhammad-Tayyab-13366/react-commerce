import React from 'react'
import HeroSection from './components/HeroSection'
// import { useProductContext } from './context/productcontext';

export const About = () => {

 // const {products, featureProducts} = useProductContext();
  const data = {
    name: "Tayyab Ecommerce"
   };

  return (
    <>
      
      <HeroSection myData={data}/>
    </>
    
  )
}
