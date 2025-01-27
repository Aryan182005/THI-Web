import React from 'react'

const Discuss = () => {
    return (
        <>
            <section className=' py-[50px] px-[20px] sm:px-0'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap xl:flex-nowrap justify-around items-center">
                            <div className="w-full xl:w-8/12  2xl:w-7/12 3xl:w-5/12 text-center xl:text-start pb-[30px] xl:pb-0">
                                <h6 className='text-[16px] sm:text-[20px] lg:text-[24px] font-Secondary capitalize font-medium'>Let's Discuss</h6>
                                <h2 className='text-[20px] sm:text-[32px] lg:text-[48px] font-Secondary capitalize font-semibold'>About your upcoming projects and collaborations</h2>
                            </div>
                            <div className=" flex justify-center xl:justify-start">
                                <button class="relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px]">
                                    Let’s  Meet Together
                                    <span class="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discuss
