import React from 'react'
import logo from '../assets/Logo.png'
import location from '../assets/location.png'
import { TbPhoneCall, TbClockHour4 } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin, BiLogoInstagramAlt, BiLogoSkype } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const companyLinks = [
        {
            id: 1,
            FLink: 'About',
            path: "/about"
        },
        {
            id: 2,
            FLink: 'Service',
            path: "/service",
        },
        {
            id: 3,
            FLink: 'Technologies',
            path: "/technologies",
        },
        {
            id: 4,
            FLink: 'Career',
            path: "/career",
        },
        {
            id: 5,
            FLink: 'Company',
            path: "/company",
        },
    ]
    const serviceLinks = [
        {
            id: 6,
            FLink: 'Web Development',
            path: "/service",
        },
        {
            id: 7,
            FLink: 'App Development',
            path: "/service",
        },
        {
            id: 8,
            FLink: 'Ui/Ux Design',
            path: "/service",
        },
        {
            id: 9,
            FLink: 'Degital Marketing',
            path: "/service",
        },
        {
            id: 10,
            FLink: 'SEO',
            path: "/service",
        },
    ]

    const socialLink = [
        {
            icon: <RiFacebookFill />,
            path: "/facebook",
        },
        {
            icon: <BiLogoLinkedin />,
            path: "/linkdin",
        },
        {
            icon: <BiLogoInstagramAlt />,
            path: "/instagram",
        },
        {
            icon: <BiLogoSkype />,
            path: "/skupe",
        },
    ]
    return (
        <>
            <footer className='pt-[60px] xl:pt-[100px] bg-[#1173b942]'>
                <div className="container">
                    <div className="row">
                        <div className="footer_top flex flex-wrap xl:flex-nowrap xl:gap-[30px] w-full">
                            <div className="w-full md:w-6/12 xl:w-3/12 2xl:w-4/12 flex md:flex-col gap-[30px] pb-[50px] md:pb-[30px]">
                                <div className=" px-[10px] xl:px-0 ">
                                    <div className='pb-[30px] lg:pb-[40px] flex justify-center md:justify-start'>
                                        <img src={logo} alt="" />
                                    </div>
                                    <ul className='flex flex-col gap-[25px]'>
                                        <li className='flex items-center justify-center md:justify-start'>
                                            <img src={location} alt="" className='w-[25px] h-[25px]' />
                                            <p className='ps-[10px] font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider text-center md:text-start'>235,Golden Square near Dmart mota varachha, surat,Gujarat 394105</p>
                                        </li>
                                        <li className='flex items-center justify-center md:justify-start'>
                                            <TbPhoneCall className='text-[26px]' />
                                            <Link to={'tel:9687311505'} className='ps-[10px] font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider'>+91 96873 11505</Link>
                                        </li>
                                        <li className='flex items-center justify-center md:justify-start'>
                                            <TbClockHour4 className='text-[26px]' />
                                            <div className='ps-[10px] font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider'>
                                                <p>Mon-Fri: 9:30 am - 6:30pm,</p>
                                                <p>Saturday - Sunday: <b className='uppercase '>Closed</b></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-2/12 pb-[50px] md:pb-[30px] xl:pb-0">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px]'>Company</h2>
                                    <ul className='flex flex-col gap-[10px] md:gap-[20px] '>
                                        {companyLinks.map((companyLinks, id) => (
                                            <li key={id}>
                                                <NavLink to={companyLinks.path || "#"} className={({ isActive }) => ` uppercase font-semibold text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-widest duration-200 ${isActive || (socialLink.path === "/" && window.location.pathname === "/")
                                                    ? "text-Primary"
                                                    : "text-gray-700"
                                                    } hover:text-Primary`}>
                                                    {companyLinks.FLink}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-2/12  pb-[50px] md:pb-[20px] xl:pb-0">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px]'>IT Service</h2>
                                    <ul className='flex flex-col gap-[10px] md:gap-[20px]'>
                                        {serviceLinks.map((serviceLinks, id) => (
                                            <li key={id}>
                                                <NavLink to={serviceLinks.path || "#"} className={({ isActive }) => `uppercase font-semibold text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-widest duration-200 ${isActive || (serviceLinks.path === "/" && window.location.pathname === "/")
                                                    ? "text-Primary"
                                                    : "text-gray-700"
                                                    } hover:text-Primary`}>
                                                    {serviceLinks.FLink}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-4/12 pb-[50px] md:pb-[20px] xl:pb-0">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px]'>Join Our Newsletter</h2>
                                    <p className='text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-wider'>Stay ahead of the tech world with our newsletter! Subscribe to get the latest IT industry insights, tech trends, and expert tips straight to your inbox.</p>
                                    <div className="btn flex justify-center md:justify-start">
                                        <button class="relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px]">
                                            Get in Touch
                                            <span class="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom py-[30px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center px-[30px] lg:px-[50px] border-t-[1px] border-dotted border-[#0000005c]">
                    <div className="text-[16px] lg:text-[18px] font-Primary font-medium pb-[30px] text-center md:text-start">
                        Copyright © 2025 <span className='font-bold text-Primary'>The Hidden Ideas.</span> All Rights Reserved
                    </div>
                    <ul className='flex gap-[10px] lg:gap-[20px]'>
                        {socialLink.map((socialLink, index) => (
                            <li key={index} className='overflow-hidden'>
                                <NavLink to={socialLink.path || "#"} target='' className={({ isActive }) => `relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-3 font-Secondary text-Primary text-[16px] lg:text-[20px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px] ${isActive || (socialLink.path === "/" && window.location.pathname === "/")}`}>
                                    {socialLink.icon}
                                    <span class="absolute inset-0 w-[200px] h-[100px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
