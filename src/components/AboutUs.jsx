import React from 'react'
import Image_1 from '../assets/AboutUs_1.jpg'
import Image_2 from '../assets/AboutUs_2.jpg'
import Image_3 from '../assets/AboutUs_3.jpeg'
import Image_4 from '../assets/AboutUs_4.jpg'
import Image_clock from '../assets/AboutClock.svg'
import Image_code from '../assets/AboutCode.svg'
import Image_service from '../assets/AboutService.svg'

const aboutBox = [
    {
        image: Image_clock,
        title: 'Fast Service',
    },
    {
        image: Image_code,
        title: 'Quality code',
    },
    {
        image: Image_service,
        title: 'Best Service',
    },
]

const AboutUs = () => {
    return (
        <>
            <section className='py-[100px] bg-[#1173b942]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Primary font-bold mb-[40px] uppercase tracking-wider">
                            <h2>What is The Hidden Ideas?</h2>
                        </div>
                        <div className="flex w-full">
                            <div className="w-6/12 flex flex-wrap">
                                <img src={Image_1} alt="" className='w-[50%] p-[10px]' />
                                <img src={Image_2} alt="" className='w-[50%] p-[10px]' />
                                <img src={Image_3} alt="" className='w-[50%] p-[10px]' />
                                <img src={Image_4} alt="" className='w-[50%] p-[10px]' />
                            </div>
                            <div className="w-6/12 p-[40px] flex flex-col justify-center">
                                <h3 className='text-[42px] font-bold font-Secondary pb-[30px]'>We are the most prominent software provider in the marketplace.</h3>
                                <p className='pb-[20px] font-Secondary'>The Hidden Ideas is a global leader in IT services that provides IT solutions for businesses. It offers a website, mobile application, custom software development, digital marketing, UI-UX design services, artificial intelligence (AI), blockchain, machine learning (ML), data analytics, metaverse, crypto currency, NFT, game development, cyber security, data science, cloud computing, etc. We are located in USA, India, Dubai, Australia, United Kingdom, and Canada. In addition, it is one of the top IT companies for all IT project management. We provide In the IT sector, offer server administration and business intelligence. We are dedicated to offering the best customer service and cutting-edge solutions to our clients. Our information technology specialist developer’s team of bright and skilled engineers is passionate about making software that has an impact.</p>
                                <ul className='w-full flex gap-[10px]'>
                                    {aboutBox.map((aboutBox,index) => (
                                    <li key={index} className='w-4/12 flex flex-col items-center justify-center h-full py-[35px] px-[25px] bg-white rounded-lg'>
                                        <img src={aboutBox.image} alt="" className='w-[20%] pb-[20px]' />
                                        <h3 className='uppercase font-Secondary'>{aboutBox.title}</h3>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
