import React from 'react'
import CountUp from 'react-countup';



const Count = () => {
    const Card = ({  value, title }) => {
        return (
            <div className="w-full sm:w-6/12 xl:w-3/12 ">
                <div className="shadow-sm rounded-t-2xl p-6 flex flex-col items-center transform transition-all duration-300 mx-[10px] xl:mx-[0px]  relative overflow-hidden z-1   ">
                    <CountUp
                        start={0}
                        end={value}
                        className="text-white text-[48px] font-bold text-white font-Secondary"
                        duration={2}
                        suffix="+"
                    />
                    <h6 className='text-[24px] text-white font-Primary font-medium'>{title}</h6>
                </div>
            </div>
        );
    };

    const countData = [
        {
            value: 500,
            title: 'Successful PROJECT',
        },
        {
            value: 500,
            title: 'SUCCESS PROJECT',
        },
        {
            value: 500,
            title: 'SUCCESS PROJECT',
        },
        {
            value: 500,
            title: 'SUCCESS PROJECT',
        },
    ]

    return (
        <>
            <section className='py-[50px] bg-THI_banner bg-no-repeat bg-cover  bg-blend-darken bg-[#000000b3] bg-fixed'>
                <div className="container">
                    <div className="row">
                        <div className="flex w-full">
                            {countData.map((count, index) => (
                                // <div className="flex w-3/12 justify-center text-center">
                                //     <div key={index} >
                                //         <h2 className='text-[48px] font-bold text-white font-Secondary'>{count.numbers}</h2>
                                //         <h6 className='text-[24px] text-white font-Primary font-medium'>{count.title}</h6>
                                //     </div>
                                // </div>
                                <Card
                                key={index}
                                value={count.value}
                                title={count.title}
                              />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Count
