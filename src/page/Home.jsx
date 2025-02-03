import React from 'react'
import Banner from '../components/Banner'
import Test from '../components/test'
import AboutUs from '../components/AboutUs'
import Service from '../components/Service'
import Logoslide from '../components/Logoslide'
import Process from '../components/Process'
import Count from '../components/Count'
import Choose from '../components/Choose'   
import Testimonial from '../components/Testimonial'
import Clientlogo from '../components/Clientlogo'


const Home = () => {
  return (
    <>
      <div >
        <Banner />
        <AboutUs />
        <Service />
        <Logoslide /> 
        <Process /> 
        <Count /> 
        <Choose />  
        <Testimonial />   
        <Clientlogo />  
        {/* <Test /> */}
      </div>
    </>
  )
}

export default Home
