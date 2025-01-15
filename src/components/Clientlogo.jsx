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
            <section className='py-[100px] relative'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Primary font-bold mb-[50px] uppercase tracking-wider">
                            <h2>Valued Clients</h2>
                        </div>
                        <div className="flex flex-wrap w-full gap-[30px] justify-center">
                            {clientLogo.map((clientLogo, index) => (
                                <div key={index} className="w-1/12 flex justify-center items-center border-[3px] border-Primary rounded-xl p-[40px] grayscale transition-all duration-[0.2s] hover:grayscale-0 cursor-pointer ">
                                    <img src={clientLogo.Logo} alt="" />
                                </div>
                            ))}
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
