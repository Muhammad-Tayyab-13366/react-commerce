import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext';

export const About = () => {

  const {myname} = useProductContext();
  const data = {
    name: "Tayyab Ecommerce"
   };

  return (
    <>
      {myname}
      <HeroSection myData={data}/>
    </>
    
  )
}
