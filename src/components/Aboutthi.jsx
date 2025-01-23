import React from 'react'
import idea from '../assets/idea_color.png'

const Aboutthi = () => {
    return (
        <>
            <section className='py-[50px] px-[20px] md:px-0'>
                <div className="container">
                    <div className="row">
                        <div className="w-full ">
                            <div className="flex justify-center pb-[50px]">
                                <div className="w-full 2xl:w-8/12 text-center">
                                    <h5 className='text-[24px] sm:text-[30px] md:text-[40px] lg:text-[44px] font-Secondary font-medium capitalize'>About This Hidden ideas</h5>
                                    <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] 3xl:text-[64px] font-Secondary font-semibold capitalize pb-[15px] sm:pb-[30px]'><span className='text-Primary'>10k</span> Client using our service</h2>
                                    <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-[20px] text-[#83909e] font-Secondary'>For upgrading customer communications, The Hidden Ideas offers a quick, effective, and scalable solution. Businesses of various sizes, from startups to major corporations, trust The Hidden Ideas because it helps them improve their connections with customers.</p>
                                    <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#83909e] font-Secondary'>With coverage in over 220 countries, the The Hidden Ideas enterprise-grade platform boasts a strong carrier network that provides seamless phone and text access. Through robust APIs and customized solutions for support and sales teams, The Hidden Ideas assists companies in improving customer interaction. Supported by a group of software and communication specialists, The Hidden Ideas is committed to providing quality, scalability, and innovation to satisfy the changing demands of contemporary enterprises.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-6/12">
                                    <div className="flex p-[20px] xl:p-[40px] border-[4px]  lg:border-l-[4px] lg:border-r-[2px] lg:border-b-[4px] border-Primary rounded-xl lg:rounded-b-xl mb-[20px] lg:mb-0">
                                        <div className="pe-[10px] h-fit">
                                            <img src={idea} alt="" className='w-[100px] 3xl:w-[60px] 3xl:h-[30px]' />
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[24px] md:text-[26px] font-Secondary font-medium'>Decades of Experience</h3>
                                            <p className='text-[18px] font-Secondary font-normal'>With our dedication to cutting-edge technology, we at LogicGo Infotech have been a pioneer in IT and software solutions, enabling brands all over the world to thrive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12">
                                    <div className="flex p-[20px] xl:p-[40px] border-[4px]  lg:border-r-[4px] lg:border-l-[2px] lg:border-b-[4px] border-Primary rounded-xl lg:rounded-b-xl">
                                        <div className="pe-[10px] h-fit">
                                            <img src={idea} alt="" className='w-[100px] 3xl:w-[60px] 3xl:h-[30px]'/>
                                        </div>
                                        <div className="content">
                                            <h3  className='text-[24px] md:text-[26px] font-Secondary font-medium'>Decades of Experience</h3>
                                            <p className='text-[18px] font-Secondary font-normal'>With our dedication to cutting-edge technology, we at LogicGo Infotech have been a pioneer in IT and software solutions, enabling brands all over the world to thrive.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutthi
