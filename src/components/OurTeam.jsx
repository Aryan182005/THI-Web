import React from 'react'
import Team from '../assets/Team.jpg'

const OurTeam = () => {

    const teamData = [
        {
            image: Team,
            name: "Pratik Desai",
            Category: "Software Engineer",
            dev: "Sr. ",
        },
        {
            image: Team,
            name: "Anil Ramani",
            Category: "Php, Laravel Devloper",
            dev: "Sr. ",
        },
        {
            image: Team,
            name: "Mitali Pithadiya",
            Category: "React js Devloper",
            dev: "Sr. ",
        },
        {
            image: Team,
            name: "Jeet Gondaliya",
            Category: "Php, Laravel Devloper",
            dev: "Jr. ",
        },
        {
            image: Team,
            name: "Aryan Chodvadiya",
            Category: "React js Devloper",
            dev: "Jr. ",
        },
        {
            image: Team,
            name: "Mitali Pithadiya",
            Category: "React js Devloper",
            dev: "Jr. ",
        },
        {
            image: Team,
            name: "Mitali Pithadiya",
            Category: "React js Devloper",
            dev: "Jr. ",
        },
    ]

    return (
        <>
            <section className='py-[50px] border-b-[1px] border-dotted border-[#0000005c] bg-[#7c78781a]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Secondary font-semibold mb-[40px] uppercase tracking-widest wow animate__animated animate__zoomIn">
                            <h2>Our Team</h2>
                        </div>
                        <div className=" w-full flex flex-wrap justify-center gap-[30px] sm:gap-[50px]">
                            {teamData.map((Team, index) => (
                                <div key={index} className="group p-[20px] bg-[#1173b942] relative w-[330px] sm:w-[470px] md:w-[320px] lg:w-[400px] h-[350px] sm:h-[370px] md:h-[370px] lg:h-[400px] rounded-lg shadow-md  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[#1173b942] before:duration-[0.5s] before:-z-[1] hover:before:rotate-[20deg] hover:before:shadow-xl after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-[#1173b942] after:duration-[0.5s] after:-z-[1] hover:after:rotate-[10deg] hover:after:shadow-xl">
                                    <div className="flex justify-center pb-[20px]">
                                        <img src={Team.image} className='rounded-full group-hover:scale-[1.1] origin-center transition-all duration-[0.5] overflow-hidden' alt={Team.name}/>
                                    </div>
                                    <div className="text-center">
                                        <h2 className='text-[20px] sm:text-[24px] lg:text-[32px] font-bold font-Secondary'><sup>{Team.dev}</sup>{Team.name}</h2>
                                        <h4 className='text-[16px] sm:text-[20px] lg:text-[24px] font-semibold font-Secondary'>{Team.Category}</h4>
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

export default OurTeam
