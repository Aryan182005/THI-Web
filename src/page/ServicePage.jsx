import React from 'react'
import Service from '../components/Service'
import ServiceSec from '../components/ServiceSec'
import Process from '../components/Process'
import Logoslide from '../components/Logoslide'
import Features from '../components/Features'
import Clientlogo from '../components/Clientlogo'

const ServicePage = () => {
  return (
    <>
    <ServiceSec />
    <Service />
    <Logoslide />
    <Features />
    <Process />
    <Clientlogo />
    </>
  )
}

export default ServicePage
