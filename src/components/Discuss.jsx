import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import Wow from "wow.js";
import "animate.css";
import emailjs from "@emailjs/browser"; 


const Discuss = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scheduleDate, setscheduleDate] = useState("dd/MM/yyyy");
    const [scheduleTime, setscheduleTime] = useState("00:00");
    const [isClosing, setIsClosing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone_no: "",
        date: "",
        time: "",
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        successMessage: "",
        errorMessage: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === "date"){
            setscheduleDate(value);
        }else if (name === "time") {
            setscheduleTime(value);
        }else{
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const validatePhone = (phone) => {
        return /^[0-9]{10}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone_no || !scheduleDate || !scheduleTime) {
            setFormStatus({ errorMessage: "Please fill in all fields.", successMessage: "", isSubmitting: false });
            setShowModal(true);
            return;
        }

        if (!validatePhone(formData.phone_no)) {
            setFormStatus({ errorMessage: "Invalid phone number. Enter a valid 10-digit number.", successMessage: "", isSubmitting: false });
            setShowModal(true);
            return;
        }

        setFormStatus({ isSubmitting: true, successMessage: "", errorMessage: "" });

        // const templateParams = {
        //     name: formData.name,
        //     phone_no: formData.phone_no,
        //     date: scheduleDate,
        //     time: scheduleTime,
        // };

        // try {
        //     await emailjs.send(
        //         'your_service_id', 
        //         'your_template_id', 
        //         templateParams, 
        //         'your_public_key'
        //     );
        //     setFormData({ name: "", phone_no: "" });
        //     setscheduleDate("dd/MM/yyyy");
        //     setscheduleTime("00:00");
        //     setFormStatus({ isSubmitting: false, successMessage: "Meeting scheduled successfully!", errorMessage: "" });
        //     setShowModal(true);
        //     setTimeout(() => {
        //         setIsOpen(false);
        //         setShowModal(false);
        //     }, 2000);
        // } catch (error) {
        //     setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "An error occurred, please try again later." });
        //     setShowModal(true);
        // }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setFormData({ name: "", phone_no: "",});
            setscheduleDate("dd/MM/yyyy");
            setscheduleTime("00:00");

            setFormStatus({ isSubmitting: false, successMessage: "Meeting scheduled successfully!", errorMessage: "" });
            setShowModal(true);

            setTimeout(() => {
                setIsOpen(false);
                setShowModal(false);
            }, 2000);
        } catch (error) {
            setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "An error occurred, please try again later." });
            setShowModal(true);
        }
    };

    const closeModal = () => setShowModal(false);

    const toggleModal = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        const handleKeydown = (e) => {
          if (e.key === "Escape" && isOpen) toggleModal();
        };
    
        if (isOpen) {
          window.addEventListener("keydown", handleKeydown);
          document.body.style.overflow = "hidden";
        }
    
        return () => {
          window.removeEventListener("keydown", handleKeydown);
          document.body.style.overflow = "auto";
        };
      });

    useEffect(() => {
        new Wow({ live: false }).init();
    }, []);


    return (
        <>
            <section className=' py-[50px] px-[20px] sm:px-0 bg-[#7c78781a] dark:bg-black dark:text-white'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap xl:flex-nowrap justify-around items-center">
                            <div className="w-full xl:w-8/12  2xl:w-7/12 3xl:w-5/12 text-center xl:text-start pb-[30px] xl:pb-0">
                                <h6 className='text-[16px] sm:text-[20px] lg:text-[24px] font-Secondary capitalize font-medium  wow animate__animated animate__zoomIn'>Let's Discuss</h6>
                                <h2 className='text-[20px] sm:text-[32px] lg:text-[48px] font-Secondary capitalize font-semibold wow animate__animated animate__zoomIn' >About your upcoming projects and collaborations</h2>
                            </div>
                            <div className=" flex justify-center xl:justify-start wow animate__animated animate__zoomIn">
                                <button onClick={() => setIsOpen(true)} class="relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px]">
                                    Let’s  Meet Together
                                    <span class="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                </button>
                                {isOpen && (
                                    <div
                                        className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 transition-all duration-500 ease-in-out`}
                                        onClick={toggleModal}
                                    >
                                        <div
                                            className={`flex flex-col gap-[10px] md:gap-[20px] bg-white p-4 sm:p-8 w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 3xl:w-5/12 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out animate__animated animate__zoomIn`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <h2 className="text-xl md:text-3xl font-semibold text-black font-Secondary mb-4 text-center">Let’s Build Together</h2>
                                            <div className="dark:text-black">
                                                <form onSubmit={handleSubmit} className="flex flex-wrap md:p-[20px] justify-center">
                                                    <div className="text-start w-full md:w-6/12 md:px-[10px] py-[10px] sm:py-[20px] wow animate__animated animate__zoomIn">
                                                        <label className="font-Secondary text-[14px] sm:text-[16px]">Your Name <span className="text-[#0073e9]">*</span></label>
                                                        <input
                                                            className="pt-[20px] pb-[10px] placeholder:text-[14px] placeholder:sm:text-[16px]  w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                                            type="text"
                                                            placeholder="Name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            disabled={formStatus.isSubmitting}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="text-start w-full md:w-6/12 md:px-[10px] py-[10px] sm:py-[20px] wow animate__animated animate__zoomIn">
                                                        <label className="font-Secondary text-[14px] sm:text-[16px]">Phone Number <span className="text-[#0073e9]">*</span></label>
                                                        <input
                                                            className="pt-[20px] pb-[10px] placeholder:text-[14px] placeholder:sm:text-[16px]  w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                                                            type="number"
                                                            placeholder="Phone Number"
                                                            name="phone_no"
                                                            value={formData.phone_no}
                                                            onChange={handleChange}
                                                            disabled={formStatus.isSubmitting}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="text-start w-full md:w-6/12 md:px-[10px] py-[10px] sm:py-[20px] wow animate__animated animate__zoomIn">
                                                        <label className="font-Secondary text-[14px] sm:text-[16px]">Schedule Date
                                                            <span className="text-[#0073e9]">*</span></label>
                                                        <br />
                                                        <input
                                                            className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid border-Primary focus-visible:outline-none placeholder:text-[#7591B5]"
                                                            type="date"
                                                            name='date'
                                                            value={scheduleDate}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="text-start w-full md:w-6/12 md:px-[10px] py-[10px] sm:py-[20px] wow animate__animated animate__zoomIn">
                                                        <label className="font-Secondary text-[14px] sm:text-[16px]">Schedule Time <span className="text-[#0073e9]">*</span></label>
                                                        <input
                                                            className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid border-Primary focus-visible:outline-none placeholder:text-[#7591B5]"
                                                            type="time"
                                                            name='time'
                                                            value={scheduleTime}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="flex justify-center gap-4 sm:gap-8 mt-4 sm:mt-8">
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
                                            <button
                                                onClick={toggleModal}
                                                className="absolute top-0 right-0 flex items-center justify-center  p-2  text-Primary text-3xl "
                                            >
                                                <IoClose />
                                            </button>
                                        </div>
                                    </div>
                                )}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discuss



