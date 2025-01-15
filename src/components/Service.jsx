import React from 'react'
import website from '../assets/settings.png'
import android from '../assets/android.png'
import website_color from '../assets/settings color.png'
import android_color from '../assets/android color.png'

const serviceData = [
    {
        image: website,
        colorImage: website_color,
        title: "Website Development",
        decription: "We are dedicated to providing professional web design and development services to clients around the world. Our team of experts specializes in creating custom websites that are tailored to meet the specific needs of each of our clients."
    },
    {
        image: android,
        colorImage: android_color,
        title: "Android App Development",
        decription: "We specialize in developing mobile applications using a range of different platforms, including hybrid and native app development. Our team of experienced developers has expertise in working with various mobile application platforms, including Flutter, React-Native, and Android."
    },
    {
        image: website,
        colorImage: android_color,
        title: "Freelancer",
        decription: "We specialize in providing web, e-commerce, and mobile development services to enhance your business. Our team of experienced developers has expertise in creating high-quality websites, online stores, and mobile applications that are tailored to meet the specific needs of our clients."
    },
]

const Service = () => {
    return (
        <>
            <section className='py-[100px] border-b-[1px] border-dotted border-[#0000005c] bg-[#7c78781a]'>
                <div className="container">
                    <div className="row">
                        <div className="heading flex justify-center text-[38px] font-Primary font-bold mb-[40px] uppercase tracking-wider">
                            <h2>Our Service</h2>
                        </div>
                        <div className="flex w-full gap-[20px]">
                            {serviceData.map((service, index) => (
                                <div
                                    key={index}
                                    className="card group w-4/12 py-[50px] px-[20px] bg-white text-center rounded-2xl hover:bg-Primary hover:text-white transition-all duration-[0.3s] ease-in-out hover:shadow-custom border-[3px] border-Primary"
                                >
                                    <div className="flex justify-center mb-[20px]">
                                        <div className="w-[120px] h-[120px] bg-Primary p-[30px] rounded-full transition-colors duration-300 group-hover:bg-white relative">
                                            <img
                                                src={service.image}
                                                alt=""
                                                className=" absolute w-[65px] h-[65px] top-[27px] left-[28px] transition-opacity duration-300 group-hover:opacity-0"
                                            />
                                            <img
                                                src={service.colorImage}
                                                alt=""
                                                className=" absolute w-[65px] h-[65px] top-[27px] left-[28px] transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-Secondary pb-[20px]">{service.title}</h5>
                                    <p className="text-[20px] font-Secondary">{service.decription}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
