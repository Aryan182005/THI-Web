import React from 'react'
import logo from '../assets/Logo.png'
import location from '../assets/location.png'
import { TbPhoneCall, TbClockHour4 } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin, BiLogoInstagramAlt, BiLogoSkype } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Footer = () => {
    const companyLinks = [
        {
            id: 1,
            FLink: 'About',
        },
        {
            id: 2,
            FLink: 'Service',
        },
        {
            id: 3,
            FLink: 'Technologies',
        },
        {
            id: 4,
            FLink: 'Career',
        },
        {
            id: 5,
            FLink: 'Company',
        },
    ]
    const serviceLinks = [
        {
            id: 6,
            FLink: 'Web Development',
        },
        {
            id: 7,
            FLink: 'App Development',
        },
        {
            id: 8,
            FLink: 'Game Development',
        },
        {
            id: 9,
            FLink: 'Degital Marketing',
        },
        {
            id: 10,
            FLink: 'SEO',
        },
    ]

    const socialLink = [
        {
            icon: <RiFacebookFill />,
        },
        {
            icon: <BiLogoLinkedin />,
        },
        {
            icon: <BiLogoInstagramAlt />,
        },
        {
            icon: <BiLogoSkype />,
        },
    ]
    return (
        <>
            <footer className='pt-[100px] bg-[#1173b942]'>
                <div className="container">
                    <div className="row">
                        <div className="footer_top flex gap-[30px] w-full">
                            <div className="w-4/12 flex flex-col gap-[30px] pb-[50px]">
                                <div className="">
                                    <img src={logo} alt="" />
                                </div>
                                <ul className='flex flex-col gap-[25px]'>
                                    <li className='flex items-center'>
                                        <img src={location} alt="" className='w-[25px] h-[25px]' />
                                        <p className='ps-[10px] font-Secondary font-medium text-[20px] tracking-wider'>235,Golden Square near Dmart mota varachha,surat,Gujarat 394105</p>
                                    </li>
                                    <li className='flex items-center'>
                                        <TbPhoneCall className='text-[26px]' />
                                        <Link className='ps-[10px] font-Secondary font-medium text-[20px] tracking-wider'>+91 96873 11505</Link>
                                    </li>
                                    <li className='flex items-center'>
                                        <TbClockHour4 className='text-[26px]' />
                                        <div className='ps-[10px] font-Secondary font-medium text-[20px] tracking-wider'>
                                            <p>Mon-Fri: 9:30 am - 6:30pm,</p>
                                            <p>Saturday - Sunday: <b className='uppercase '>Closed</b></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-2/12">
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[28px]'>Company</h2>
                                    <ul className='flex flex-col gap-[20px]'>
                                        {companyLinks.map((companyLinks, id) => (
                                            <li key={id}>
                                                <Link className='text-[20px] font-Secondary tracking-wider'>{companyLinks.FLink}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-2/12">
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[28px]'>IT Service</h2>
                                    <ul className='flex flex-col gap-[20px]'>
                                        {serviceLinks.map((serviceLinks, id) => (
                                            <li key={id}>
                                                <Link className='text-[20px] font-Secondary tracking-wider'>{serviceLinks.FLink}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-4/12">
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[28px]'>Join Our Newsletter</h2>
                                    <p className='text-[20px] font-Secondary tracking-wider'>Stay ahead of the tech world with our newsletter! Subscribe to get the latest IT industry insights, tech trends, and expert tips straight to your inbox.</p>
                                    <div className="btn pt-[20px]">
                                        <Link className='py-3 px-6 bg-Primary text-white rounded-lg hover:bg-primary-dark uppercase font-semibold font-Secondary tracking-wider border-[3px] border-Primary transition-all duration-[0.3s] hover:bg-white hover:text-Primary hover:border-[3px] hover:border-Primary'>Get in Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom py-[30px] flex justify-between items-center px-[50px] border-t-[1px] border-dotted border-[#0000005c]">
                    <div className="text-[18px] font-Primary font-medium">
                        Copyright © 2025 <span className='font-bold text-Primary'>The Hidden Ideas.</span> All Rights Reserved
                    </div>
                    <ul className='flex gap-[20px]'>
                        {socialLink.map((socialLink, index) => (
                            <li key={index} className='overflow-hidden'>
                                <Link className='transition-all duration-[.3s] scale-[1] hover:scale-[1.2] hover:rounded-lg flex items-center justify-center w-10 h-10 bg-Primary text-white rounded-lg text-[20px]'>{socialLink.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
