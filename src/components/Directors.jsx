import React from 'react'
import person1 from '../assets/mukesh.png'
import person2 from '../assets/gutam.png'
import image from '../assets/mukesh.png'
import { Link } from 'react-router-dom'



const Directors = () => {

    const directorsData = [
        {
            DirectorsImage: person1,
            DirectorsName: 'Kishan Gareja',
            DirectorsLevel: 'Ceo',
        },
        {
            DirectorsImage: person2,
            DirectorsName: 'Jay Vaghela',
            DirectorsLevel: 'Ceo',
        },
    ]
    return (
        <>
            <section className='py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Secondary font-semibold mb-[40px] uppercase tracking-widest">
                            <h2>Meet Our Directors</h2>
                        </div>
                        <div className="flex justify-center items-center gap-[80px] w-full">
                            {directorsData.map((directors, index) => (
                                <div key={index} className="relative w-3/12 h-[450px] m-[20px] rounded-xl overflow-hidden shadow-lg flex justify-center items-center group">
                                    <div className="absolute inset-0">
                                        <img src={directors.DirectorsImage} alt="" className='w-full rounded-xl' />
                                    </div>
                                    <div className="absolute bottom-[-200px] left-0 right-0 w-full h-48 flex flex-col justify-center items-center z-10 backdrop-blur-2xl shadow-lg border border-white/10 rounded-xl transition-all duration-500 delay-300 group-hover:bottom-0">
                                        <div className="content flex flex-col text-center pt-[20px]">
                                            <h2 className='text-[32px] font-Secondary font-semibold uppercase text-white tracking-wide mb-3 '>{directors.DirectorsName}</h2>
                                            <p className='text-[18px] uppercase font-Secondary text-slate-400'>{directors.DirectorsLevel}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Directors
