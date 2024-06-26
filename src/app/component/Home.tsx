"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Featurs from './Featurs/Featurs'
import Popularburger from './PopularBurger/Popularburger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import NewsLetter from './NewsLetter/NewsLetter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
    const initAOS = async ()=>{
    await import ('aos'); 
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:'top-center'
    })
  };
  initAOS();

  },[])
  return (
    <div className='overflow-hidden '>
     <Hero />
      <Featurs />
      <Popularburger />
      <Delivery />
      <Team />
      <Reservation />
      <NewsLetter />
      
    </div>
  )
}

export default Home