// import React from 'react'
// import idea from '../assets/idea_color.png'
// import strategize from '../assets/Strategize_color.png'
// import build from '../assets/build_color.png'
// import lounch from '../assets/lounch_color.png'
// import logo from '../assets/favicon.png'

// // const processData = [
// //     {
// //         id: 1,
// //         icon: idea,
// //         title: 'Ideate',
// //         description: 'Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.',
// //     },
// //     {
// //         id: 2,
// //         icon: strategize,
// //         title: 'Strategize',
// //         description: 'Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.',
// //     },
// //     {
// //         id: 3,
// //         icon: build,
// //         title: 'Build',
// //         description: 'Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.',
// //     },
// //     {
// //         id: 4,
// //         icon: lounch,
// //         title: 'Launch',
// //         description: 'Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.',
// //     },
// // ]

// const Process = () => {
//     return (
//         <>
//             <section className='py-[100px] bg-[#1173b942]'>
//                 <div className="container">
//                     <div className="row">
//                         <div className="heading flex justify-center text-[32px] font-Primary font-bold mb-[40px] uppercase tracking-wider">
//                             <h2>Agile Development Process</h2>
//                         </div>
//                         <div className="flex flex-col gap-[50px] relative">
//                             <div className="flex justify-center w-full relative">
//                                 <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl ">
//                                     <div className="flex justify-center pb-[20px]">
//                                         <img src={idea} alt="" className='w-10 h-10' />
//                                     </div>
//                                     <h3 className='text-[32px] font-Secondary font-medium'>Ideate</h3>
//                                     <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
//                                 </div>
//                             </div>
//                             <div className="flex justify-between items-center w-full relative">
//                                 <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl ">
//                                     <div className="flex justify-center pb-[20px]">
//                                         <img src={strategize} alt="" className='w-10 h-10' />
//                                     </div>
//                                     <h3 className='text-[32px] font-Secondary font-medium'>Launch</h3>
//                                     <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
//                                 </div>
//                                 <div className=" animate-translateY duration-[0.3s] ">
//                                     <img src={logo} alt="" className='opacity-[0.4] ' />
//                                 </div>
//                                 <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl ">
//                                     <div className="flex justify-center pb-[20px]">
//                                         <img src={build} alt="" className='w-10 h-10' />
//                                     </div>
//                                     <h3 className='text-[32px] font-Secondary font-medium'>Strategize</h3>
//                                     <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
//                                 </div>
//                             </div>
//                             <div className="flex justify-center w-full relative">
//                                 <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl">
//                                     <div className="flex justify-center pb-[20px]">
//                                         <img src={lounch} alt="" className='w-10 h-10' />
//                                     </div>
//                                     <h3 className='text-[32px] font-Secondary font-medium'>Build</h3>
//                                     <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
//                                 </div>
//                                 <div className="flex absolute w-[75%] h-[78%] left-[226px] top-[12%] bg-white border-[3px]  border-Primary rounded-2xl -z-10">
//                                     <div className="relative w-full h-full left-0 right-[10px] bottom-[9px] animate-followParent ">
//                                         <div class="absolute w-4 h-4 right-0 left-0 bg-Primary rounded-full animate-pulse "></div>
//                                         <div className="absolute w-3 h-3 left-[2px] top-[2px] bg-Primary rounded-full "></div>
//                                     </div>
//                                 </div>
//                                 {/* <div className="flex absolute w-[75%] h-[78%] left-[226px] top-[12%] bg-white border-[3px]  border-Primary rounded-2xl -z-10">
//                                     <div className="relative w-full h-full left-0 right-[10px] bottom-[9px] animate-followParent ">
//                                         <div class="absolute w-4 h-4 right-0 left-0 bg-Primary rounded-full animate-pulse "></div>
//                                         <div className="absolute w-3 h-3 left-[2px] top-[2px] bg-Primary rounded-full "></div>
//                                     </div>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </ div>
//             </section>
//         </>
//     )
// }

// export default Process


import React from 'react'
import idea from '../assets/idea_color.png'
import strategize from '../assets/Strategize_color.png'
import build from '../assets/build_color.png'
import lounch from '../assets/lounch_color.png'
import logo from '../assets/favicon.png'

const Process = () => {
    return (
        <>
            <section className='py-[100px] bg-[#1173b942]'>
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
                                    <h3 className='text-[32px] font-Secondary font-medium'>Ideate</h3>
                                    <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full relative z-10">
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={strategize} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[32px] font-Secondary font-medium'>Launch</h3>
                                    <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
                                </div>
                                <div className=" animate-translateY duration-[0.3s] ">
                                    <img src={logo} alt="" className='opacity-[0.4] ' />
                                </div>
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl  border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={build} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[32px] font-Secondary font-medium'>Strategize</h3>
                                    <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full relative z-10">
                                <div className="py-[30px] px-[30px] w-3/12 text-center bg-white shadow-process rounded-xl border-[3px]  border-Primary">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={lounch} alt="" className='w-10 h-10' />
                                    </div>
                                    <h3 className='text-[32px] font-Secondary font-medium'>Build</h3>
                                    <p className='font-Secondary'>Every project starts with an ideation. And our job is to convert your ideas into reality to achieve your goal.</p>
                                </div>
                            </div>
                            <div className="flex absolute w-[75%] h-[78%] left-[226px] top-[11%] bg-white border-[3px] overflow-hidden  border-Primary rounded-2xl -z-[2] border-[3px]  border-Primary">
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