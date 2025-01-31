import React from 'react'
import Marquee from 'react-fast-marquee'
import logo1 from '../assets/client1.webp'
import logo2 from '../assets/client2.webp'
import logo3 from '../assets/client3.webp'
import logo4 from '../assets/client4.webp'
import logo5 from '../assets/client5.webp'
import logo from '../assets/favicon.png'

const Clientlogo = () => {

    const clientLogo = [
        {
            Logo: logo1,
        },
        {
            Logo: logo2,
        },
        {
            Logo: logo3,
        },
        {
            Logo: logo4,
        },
        {
            Logo: logo5,
        },
        {
            Logo: logo1,
        },
        {
            Logo: logo2,
        },
        {
            Logo: logo3,
        },
        {
            Logo: logo4,
        },
        {
            Logo: logo5,
        },
        {
            Logo: logo1,
        },
        {
            Logo: logo2,
        },
        {
            Logo: logo3,
        },
        {
            Logo: logo4,
        },
        {
            Logo: logo5,
        },
    ]

    return (
        <>
            <section className='py-[60px] xl:py-[100px] relative'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px]  font-Primary font-bold mb-[50px] uppercase tracking-wider wow animate__animated animate__zoomIn">
                            <h2>Valued Clients</h2>
                        </div>
                        <div className="flex flex-wrap w-full gap-[30px] justify-center hidden lg:flex">
                            {clientLogo.map((clientLogo, index) => (
                                <div key={index} className="w-3/12 lg:w-2/12 3xl:w-1/12 flex justify-center items-center border-[3px] border-Primary rounded-xl p-[40px] grayscale transition-all duration-[0.2s] hover:grayscale-0 cursor-pointer wow animate__animated animate__zoomIn">
                                    <img src={clientLogo.Logo} alt={`Client ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap w-full gap-[30px] justify-center lg:hidden wow animate__animated animate__fadeInRightBig">
                            <Marquee speed={30} gradient={false}>
                                {clientLogo.map((clientLogo, index) => (
                                    <div
                                        key={index}
                                        className="w-[120px] lg:w-[150px] xl:w-[180px] flex justify-center items-center aspect-[2/2] border-[3px] border-Primary rounded-xl p-[20px] grayscale transition-all duration-[0.2s] hover:grayscale-0 cursor-pointer mx-2 "
                                    >
                                        <img src={clientLogo.Logo} alt={`Client ${index + 1}`} className="max-w-full" />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                        <div className="logo_thumb absolute w-[5%] left-[30px] top-[30px] animate-moveLeftBounce" >
                            <img src={logo} alt="" className='opacity-[0.5]' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clientlogo
