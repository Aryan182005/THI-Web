import React from 'react'

const chooseData = [
    {
        number: '01',
        title: 'High Quality Work',
        description: 'We deliver exceptional quality in every project, ensuring your digital solutions are top-notch and effective.'
    },
    {
        number: '02',
        title: 'Dedicated 24/7 Support',
        description: 'Our team is available around the clock to provide you with support and resolve any issues promptly and efficiently.'
    },
    {
        number: '03',
        title: 'Agile and Fast Working Style',
        description: 'We adopt an agile methodology, allowing us to work quickly and adapt to changes, ensuring timely delivery of projects.'
    },
    {
        number: '04',
        title: 'High Level of Usability',
        description: 'We prioritize user-friendly designs that offer seamless experiences, making your digital solutions easy to use and intuitive.'
    },
    {
        number: '05',
        title: 'Innovative Solutions',
        description: 'We utilize the latest technologies and design trends to create innovative solutions that set you apart from the competition.'
    },
    {
        number: '06',
        title: 'Proven Track Record',
        description: 'Our portfolio of successful projects and satisfied clients demonstrates our ability to deliver outstanding results consistently.'
    },
]

const Choose = () => {
    return (
        <>
            <section className='py-[60px] xl:py-[100px] bg-[#7c78781a]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Primary font-bold mb-[50px] uppercase tracking-wider text-center xl:text-start px-[10px]">
                            <h2>Why Choose The Hidden ideas?</h2>
                        </div>
                        <div className="flex flex-wrap justify-center w-full xl:gap-[20px] ">
                            {chooseData.map((choose, index) => (
                                <div className="w-full md:w-6/12 xl:w-3/12 p-[10px] xl:p-0">
                                    <div key={index} className=" p-[30px] md:aspect-[1.5/1] lg:aspect-[1.5/.7] xl:aspect-[1.5/1.5] 3xl:aspect-auto relative bg-white shadow-chooseBox z-[2] rounded-xl overflow-hidden hover:text-white hover:transition-all hover:duration-[0.5s] before:absolute before:w-full before:left-0 before:right-0 before:bottom-0  before:top-auto before:h-0 before:bg-Primary before:z-[-1] before:transition-all before:duration-[0.5s] hover:before:h-[100%] ">
                                        <span className='text-[16px] md:text-[14px] lg:text-[20px] 2xl:text-[24px] font-Secondary'>{choose.number}</span>
                                        <h3 className=' text-[20px] md:text-[18px] lg:text-[22px] 2xl:text-[28px] pb-[10px] font-Secondary font-normal'>{choose.title}</h3>
                                        <p className='text-[16px] md:text-[14px] 2xl:text-[18px] font-Secondary'>{choose.description}</p>
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

export default Choose
