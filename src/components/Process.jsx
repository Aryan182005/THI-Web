import React from 'react'
import idea from '../assets/idea_color.png'
import strategize from '../assets/Strategize_color.png'
import build from '../assets/build_color.png'
import lounch from '../assets/lounch_color.png'
import logo from '../assets/favicon.png'

const Process = () => {
    return (
        <>
            <section className='py-[100px] bg-[#1173b942] hidden xl:block'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Primary font-bold mb-[40px] uppercase tracking-wider">
                            <h2>Agile Development Process</h2>
                        </div>
                        <div className="flex flex-col gap-[50px] relative">
                            <div className="flex justify-center w-full relative z-10">
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={idea} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className=' text-[22px] 2xl:text-[28px] 3xl:text-[32px] font-Secondary font-medium'>Vision Crafting</h3>
                                    <p className='font-Secondary'> Our mission is to turn that spark into something tangible, breathing life into your ideas with purpose and precision, guiding you every step of the way toward your ultimate goal.</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full relative z-10">
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={strategize} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className=' text-[22px] 2xl:text-[28px] 3xl:text-[32px] font-Secondary font-medium'> Execute</h3>
                                    <p className='font-Secondary'>Turning plans into action with precision and purpose. We transform strategy into tangible results, ensuring every step is flawlessly carried out to deliver success.  </p>
                                </div>
                                <div className=" animate-translateY duration-[0.3s] ">
                                    <img src={logo} alt="" className='opacity-[0.4] ' />
                                </div>
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={build} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className=' text-[22px] 2xl:text-[28px] 3xl:text-[32px] font-Secondary font-medium'>Precision Planning</h3>
                                    <p className='font-Secondary'>Where strategy meets accuracy—our approach is about meticulously crafting each step to ensure your vision is executed flawlessly, with every detail aligned to achieve the best possible outcome.</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full relative z-10">
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={lounch} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className=' text-[22px] 2xl:text-[28px] 3xl:text-[32px] font-Secondary font-medium'>Creation</h3>
                                    <p className='font-Secondary'>From concept to completion, creation is the heartbeat of innovation. We bring ideas to life, shaping them into unique, impactful realities that resonate and inspire.</p>
                                </div>
                            </div>
                            <div className=" absolute w-[76%] 2xl:w-[74%] 3xl:w-[75%] h-[78%] left-[140px] 2xl:left-[170px] 3xl:left-[226px] top-[11%] bg-white border-[3px] overflow-hidden  border-Primary rounded-2xl -z-[2] border-[3px]  border-Primary">
                                <div className="relative w-[99%] h-[98%] left-0 right-0 bottom-0 rounded-2xl z-20  animate-followParent ">
                                    <div class="absolute w-4 h-4 right-0 left-0 bg-Primary rounded-full animate-pulse "></div>
                                    <div className="absolute w-3 h-3 left-[2px] top-[2px] bg-Primary rounded-full "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-[60px] bg-[#1173b942] block xl:hidden'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Primary font-bold mb-[40px] uppercase tracking-wider text-center">
                            <h2>Agile Development Process</h2>
                        </div>
                        <div className=" relative w-full flex flex-wrap">
                            <div className="w-full md:w-6/12 xl:w-3/12 md:py-[40px] md:px-[40px] p-[20px]">
                                <div className="py-[30px] px-[30px]  text-center bg-white shadow-process rounded-xl border-[3px]  border-Primary aspect-[1.5/1.3]">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={idea} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[26px] lg:text-[32px] font-Secondary font-medium'>Vision Crafting</h3>
                                    <p className='font-Secondary'>Our mission is to turn that spark into something tangible, breathing life into your ideas with purpose and precision, guiding you every step of the way toward your ultimate goal.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-3/12 md:py-[40px] md:px-[40px] p-[20px]">
                                <div className="py-[30px] px-[30px] text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary aspect-[1.5/1.3]">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={strategize} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[26px] lg:text-[32px] font-Secondary font-medium'>Execute</h3>
                                    <p className='font-Secondary'>Turning plans into action with precision and purpose. We transform strategy into tangible results, ensuring every step is flawlessly carried out to deliver success. </p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-3/12 md:py-[40px] md:px-[40px] p-[20px]">
                                <div className="py-[30px] px-[30px] text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary aspect-[1.5/1.3]">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={build} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[26px] lg:text-[32px] font-Secondary font-medium'>Precision Planning</h3>
                                    <p className='font-Secondary'>Where strategy meets accuracy—our approach is about meticulously crafting each step to ensure your vision is executed flawlessly, with every detail aligned to achieve the best possible outcome.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-3/12 md:py-[40px] md:px-[40px] p-[20px]">
                                <div className="py-[30px] px-[30px] text-center bg-white shadow-process rounded-xl border-[3px]  border-Primary aspect-[1.5/1.3]">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={lounch} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[26px] lg:text-[32px] font-Secondary font-medium'>Creation</h3>
                                    <p className='font-Secondary'>From concept to completion, creation is the heartbeat of innovation. We bring ideas to life, shaping them into unique, impactful realities that resonate and inspire.</p>
                                </div>
                            </div>
                            {/* <div className=" animate-translateY duration-[0.3s] absolute left-0 top-0 ">
                                <img src={logo} alt="" className='opacity-[0.4] w-[10%] h-[10%]' />
                            </div> */}
                            <div className=" absolute md:w-[50%]  h-[64%] left-[188px] sm:left-[268px] md:left-[180px] lg:left-[230px]  top-[19%] bg-white border-[3px] overflow-hidden  border-Primary rounded-2xl -z-[2] border-[2px] md:border-[3px]  border-Primary">
                                <div className="relative w-[99%] h-[98%] left-0 right-0 bottom-0 rounded-2xl z-20  animate-followParent ">
                                    <div class="absolute w-4 h-4 right-0 left-0 bg-Primary rounded-full animate-pulse "></div>
                                    <div className="absolute w-3 h-3 left-[2px] top-[2px] bg-Primary rounded-full "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process