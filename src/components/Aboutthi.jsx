import React from 'react'
import idea from '../assets/idea_color.png'
import rocket from '../assets/rocket_color.png'

const Aboutthi = () => {
    return (
        <>
            <section className='py-[50px] px-[20px] md:px-0'>
                <div className="container">
                    <div className="row">
                        <div className="w-full ">
                            <div className="flex justify-center pb-[50px]">
                                <div className="w-full 2xl:w-8/12 text-center">
                                    <h5 className='text-[24px] sm:text-[30px] md:text-[40px] lg:text-[44px] font-Secondary font-medium capitalize wow animate__animated animate__zoomIn'>About The Hidden ideas</h5>
                                    <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] 3xl:text-[64px] font-Secondary font-semibold capitalize pb-[15px] sm:pb-[30px] wow animate__animated animate__zoomIn'><span className='text-Primary'>10k</span> Client using our service</h2>
                                    <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-[20px] text-[#83909e] font-Secondary wow animate__animated animate__zoomIn'> The Hidden Ideas empowers businesses to connect smarter, faster, and better. From agile startups to global giants, over 10,000 clients trust us to redefine their customer engagement.</p>
                                    <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#83909e] font-Secondary wow animate__animated animate__zoomIn'>Backed by a powerhouse team of tech wizards and communication strategists, The Hidden Ideas isn’t just about keeping up with the pace of change—it’s about staying ahead.  Whether you’re looking to supercharge your support team or inspire your salesforce, our cutting-edge APIs and tailored tools make it effortless. Innovation, scalability, and a relentless passion for excellence fuel our mission to transform modern business communication into a true competitive edge.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-6/12 wow animate__animated animate__zoomIn">
                                    <div className="flex p-[20px] xl:p-[40px] border-[4px] lg:border-[0px] lg:border-l-[4px] lg:border-r-[2px] lg:border-b-[4px] border-Primary rounded-xl lg:rounded-b-xl mb-[20px] lg:mb-0">
                                        <div className="pe-[10px] h-fit">
                                            <img src={idea} alt="" className='w-[140px] sm:w-[100px] 3xl:w-[60px] 3xl:h-[35px]' />
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[20px] sm:text-[24px] md:text-[26px] font-Secondary font-medium'>Empowering Your Vision</h3>
                                            <p className='text-[14px] sm:text-[18px] font-Secondary font-normal'>We help bring your ideas to life with innovative solutions and cutting-edge technology, delivering results that exceed expectations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 wow animate__animated animate__zoomIn">
                                    <div className="flex p-[20px] xl:p-[40px] border-[4px] lg:border-[0px] lg:border-r-[4px] lg:border-l-[2px] lg:border-b-[4px] border-Primary rounded-xl lg:rounded-b-xl">
                                        <div className="pe-[10px] h-fit">
                                            <img src={rocket} alt="" className='w-[140px] sm:w-[100px] 3xl:w-[60px] 3xl:h-[35px]'/>
                                        </div>
                                        <div className="content">
                                            <h3  className='text-[20px] sm:text-[24px] md:text-[26px] font-Secondary font-medium'>Creating Tomorrow, Today</h3>
                                            <p className='text-[14px] sm:text-[18px] font-Secondary font-normal'>With a passion for progress, we shape the future by offering high-quality services tailored to your needs, ensuring success at every step. </p>
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
