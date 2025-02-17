
const Features = () => {

    const FeaturesData = [
        {
            title: "Experience",
            description: "Backed by years of hands-on expertise, we craft seamless, high-performing solutions that drive real results. We know what works, what captivates, and what fuels success—so you can focus on growth while we take care of the rest."
        },
        {
            title: "Expertise",
            description: "Our team is built on knowledge, innovation, and deep industry insights. We bring the latest trends and cutting-edge technologies to the table, ensuring your project stands out in a competitive landscape."
        },
        {
            title: "Flexibility",
            description: "Every business is unique, and so are our solutions. We adapt to your needs, whether it’s customization, integration, or scaling on demand providing agile and future-ready services tailored just for you."
        },
        {
            title: "Quality",
            description: "Excellence is our standard. With rigorous testing, best-in-class practices and a passion for perfection From strategy to execution, we maintain a focus on delivering top tier solutions that exceed expectations and ensure long-term success."
        },
        {
            title: "Cost-effectiveness",
            description: "Top-tier solutions shouldn’t come with a hefty price tag. We optimize efficiency, eliminate waste, and ensure every dollar invested delivers maximum value, impact, and results."
        },
        {
            title: "Scalability",
            description: "Your success knows no bounds. Our solutions evolve with your business seamlessly adapting to new demands, scaling effortlessly, and ensuring sustainability at every stage."
        },
    ]
    return (
        <>
            <section className='py-[50px] lg:py-[100px] border-b-[1px] border-dotted border-[#0000005c] dark:border-white bg-[#7c78781a] dark:bg-black '>
                <div className="container">
                    <div className="row">
                        <div className="dark:text-white heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Secondary font-semibold mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
                            <h2>key features</h2>
                        </div>
                        <div className="w-full flex flex-wrap justify-center">
                            {FeaturesData.map((features, index) => (
                                <div className="w-full md:w-6/12 xl:w-4/12 3xl:w-3/12 wow animate__animated animate__zoomIn" key={index}>
                                    <div className="bg-[#1173b942] dark:bg-black dark:text-white m-[10px] p-[20px] 2xl:p-[30px] rounded-xl relative overflow-hidden group aspect-[1/0.7] sm:aspect-[1/0.4] md:aspect-[1/0.9] lg:aspect-[1/0.6] xl:aspect-[1/0.9] 2xl:aspect-[1/0.7] dark:shadow-chooseBox2">
                                        <div className="w-[128px] h-[128px] bg-Primary z-[1] absolute top-[-75px] right-[-75px] rounded-[50%] transition-all duration-[0.5s] ease-in group-hover:scale-[10]"></div>
                                        <div className="relative z-[2]">
                                            <h2 className='text-[24px] sm:text-[26px] md:text-[32px] font-Secondary pb-[10px] font-semibold  transition-all duration-[0.7s] group-hover:text-white wow animate__animated animate__zoomIn'>{features.title}</h2>
                                            <p className='text-[16px] md:text-[18px] font-Secondary transition-all duration-[0.7s] group-hover:text-white wow animate__animated animate__zoomIn'>{features.description}</p>
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

export default Features
