import React, { useState , useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_no: "",
        services: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        successMessage: "",
        errorMessage: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^[0-9]{10}$/.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone_no || !formData.services || !formData.message) {
            setFormStatus({ errorMessage: "Please fill in all fields.", successMessage: "" });
            setShowModal(true);
            return;
        }

        if (!validateEmail(formData.email)) {
            setFormStatus({ errorMessage: "Invalid email format.", successMessage: "" });
            setShowModal(true);
            return;
        }

        if (!validatePhone(formData.phone_no)) {
            setFormStatus({ errorMessage: "Invalid phone number.", successMessage: "" });
            setShowModal(true);
            return;
        }

        setFormStatus({ isSubmitting: true, successMessage: "", errorMessage: "" });

        // emailjs
        // .sendForm(
        //   "service_3b80fzo",    
        //   "template_wbn2zir", 
        //   formRef.current,
        //   "P-OSDlUB9u3dfTODU"
        // )
        // .then(
        //   (response) => {
        //     setFormData({ name: "", email: "", phone_no: "", services: "", message: "" });
        //     setFormStatus({ isSubmitting: false, successMessage: "Message sent successfully!", errorMessage: "" });
        //     setShowModal(true);
        //   },
        //   (error) => {
        //     setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "Failed to send message. Try again!" });
        //     setShowModal(true);
        //     console.error(error);
        //   }
        // );

        setTimeout(() => {
            setFormData({ name: "", email: "", phone_no: "", services: "", message: "" });
            setFormStatus({ isSubmitting: false, successMessage: "Message sent successfully!", errorMessage: "" });
            setShowModal(true);
        }, 1000);
    };

    useEffect(() => {
        if (formStatus.successMessage) {
            const timer = setTimeout(() => {
                setShowModal(false);
                setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "" });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [formStatus.successMessage]);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="py-[50px]">
                <div className="container">
                    <div className="row">
                        <div className="flex justify-center">
                            <div className="w-full xl:w-10/12 3xl:w-8/12 shadow-custom p-6 sm:p-8 rounded-lg border-[3px]">
                                <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Secondary font-semibold mb-[20px] md:mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
                                    <h2>Get In touch</h2>
                                </div>
                                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-wrap md:p-[20px] justify-center">
                                    <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                                        <label className="font-Secondary">Your Name <span className="text-[#0073e9]">*</span></label>
                                        <input
                                            className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={formStatus.isSubmitting}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                                        <label className="font-Secondary">Your Email <span className="text-[#0073e9]">*</span></label>
                                        <input
                                            className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={formStatus.isSubmitting}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                                        <label className="font-Secondary">Phone Number <span className="text-[#0073e9]">*</span></label>
                                        <input
                                            className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                            type="number"
                                            placeholder="Phone Number"
                                            name="phone_no"
                                            value={formData.phone_no}
                                            onChange={handleChange}
                                            disabled={formStatus.isSubmitting}
                                            required
                                        />
                                    </div>

                                    <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                                        <label className="font-Secondary">Your Services <span className="text-[#0073e9]">*</span></label>
                                        <select
                                            name="services"
                                            className="pt-[20px] pb-[10px] text-[#7591B5] w-full border-b-[2px] border-solid border-Primary font-Secondary font-medium"
                                            value={formData.services}
                                            onChange={handleChange}
                                            disabled={formStatus.isSubmitting}
                                            required
                                        >
                                            <option value="">Select Services</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="App Development">App Development</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Game Development">Game Development</option>
                                        </select>
                                    </div>
                                    <div className="w-full md:px-[10px] py-[20px] wow animate__animated animate__zoomIn ">
                                        <label className="font-Secondary">Your Message <span className="text-[#0073e9]">*</span></label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={formStatus.isSubmitting}
                                            placeholder="Your Message"
                                            cols="20"
                                            rows="6"
                                            required
                                            className="pt-[20px] w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                        ></textarea>
                                    </div>
                                    <div className="pt-[20px] wow animate__animated animate__zoomIn">
                                        <button
                                            type="submit"
                                            disabled={formStatus.isSubmitting}
                                            className={`relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white hover:border-[3px] ${formStatus.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {formStatus.isSubmitting ? 'Submitting...' : 'Send Message'}
                                            <span className="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div
                        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="flex flex-col justify-center items-center p-8  w-9/12 md:w-7/12 lg:w-5/12 3xl:w-3/12 rounded-lg shadow-lg bg-white animate-zoomIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {formStatus.errorMessage && (
                                <div className="text-red-600 font-bold font-Secondary text-[14px] sm:text-xl">{formStatus.errorMessage}</div>
                            )}
                            {formStatus.successMessage && (
                                <div className="text-green-600 font-bold font-Secondary text-[14px] sm:text-xl">{formStatus.successMessage}</div>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ContactForm;
