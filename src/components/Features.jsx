import React from 'react'

const Features = () => {

    const FeaturesData = [
        {
            title: "Experience",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
        {
            title: "Expertise",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
        {
            title: "Flexibility",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
        {
            title: "Quality",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
        {
            title: "Cost-effectiveness",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
        {
            title: "Scalability",
            description: "The hidden Ideas has been in business for over 5+ years and has a proven track record of success. We have worked with a wide range of businesses, from small startups to large enterprises, and have helped them achieve their business goals."
        },
    ]
    return (
        <>
            <section className='py-[50px] lg:py-[100px] border-b-[1px] border-dotted border-[#0000005c]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Primary font-bold mb-[40px] uppercase tracking-wider">
                            <h2>key features</h2>
                        </div>
                        <div className="w-full flex flex-wrap justify-center">
                            {FeaturesData.map((features, index) => (
                                <div className="w-3/12 " key={index}>
                                    <div className="bg-[#1173b942] m-[10px] p-[30px] rounded-xl relative overflow-hidden group">
                                        <div className="w-[128px] h-[128px] bg-Primary -z-[1] absolute top-[-75px] right-[-75px] rounded-[50%] transition-all duration-[0.5s] ease-in group-hover:scale-[10]"></div>
                                        <h2 className='text-[32px] font-Secondary pb-[10px] font-semibold  transition-all duration-[0.7s] group-hover:text-white'>{features.title}</h2>
                                        <p className='text-[18px] font-Secondary transition-all duration-[0.7s] group-hover:text-white'>{features.description}</p>
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

export default Features
