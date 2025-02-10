import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import Wow from "wow.js";
import "animate.css";
import emailjs from "@emailjs/browser";

const Banner = () => {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone_no || !formData.message) {
      setFormStatus({ errorMessage: "Please fill in all fields.", successMessage: "" });
      setShowModal(true);
      return;
    }

    if (!validatePhone(formData.phone_no)) {
      setFormStatus({ errorMessage: "Invalid phone number. Enter a valid 10-digit number.", successMessage: "" });
      setShowModal(true);
      return;
    }

    setFormStatus({ isSubmitting: true, successMessage: "", errorMessage: "" });

    // try {
    //       await new Promise((resolve) => setTimeout(resolve, 1000));

    //       setFormData({ name: "", phone_no: "", message: "" });
    //       setFormStatus({ isSubmitting: false, successMessage: "Message sent successfully!", errorMessage: "" });
    //       setShowModal(true);


    //       setTimeout(() => {
    //         setIsOpen(false);
    //         setShowModal(false);
    //       }, 2000);
    //     } catch (error) {
    //       setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "An error occurred, please try again later." });
    //       setShowModal(true);
    //     }

    emailjs
      .sendForm("service_3ukcssu", "template_dbxs0md", formRef.current, "P-OSDlUB9u3dfTODU")
      .then(
        () => {
          setFormData({ name: "", phone_no: "", message: "" });
          setFormStatus({ isSubmitting: false, successMessage: "Message sent successfully!", errorMessage: "" });
          setShowModal(true);

          setTimeout(() => {
            setShowModal(false);
            setIsOpen(false);
          }, 2000);
        },
        () => {
          setFormStatus({ isSubmitting: false, successMessage: "", errorMessage: "Failed to send message. Try again!" });
          setShowModal(true);
        }
      );
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  const closeModal = () => {
    setShowModal(false);
  };

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
    new Wow({ live: false }).init();
  }, []);

  return (
    <>
      <section className="py-[50px] bg-[#7c78781a] dark:bg-black dark:text-white ">
        <div className="container">
          <div className="row">
            <div className="flex flex-wrap w-full justify-between relative px-[20px] sm:px-0">
              <div className="Banner_content w-full lg:w-6/12 flex flex-col justify-center text-center xl:text-start mb-[50px] lg:mb-0">
                <h3 className="text-[18px] sm:text-[20px] md:text-[26px] font-Secondary font-semibold capitalize wow animate__animated animate__zoomIn">
                  Your Vision, Our Code Delivered Innovation todays.
                </h3>
                <h2 className="text-[28px] sm:text-[50px] 3xl:text-[74px] dark:text-Primary font-Secondary font-bold pb-[15px] sm:pb-0 wow animate__animated animate__zoomIn">
                  The Hidden Ideas
                </h2>
                <p className="text-[14px] sm:text-[16px] md:text-[20px] capitalize font-Secondary tracking-wider wow animate__animated animate__zoomIn">
                  Welcome to a world where innovation meets precision.The Hidden Ideas specializes in crafting high-quality, cost-effective
                  software solutions that elevate your business. With a focus on efficiency, innovative, quality, and affordability, our expert
                  team ensures your vision becomes a digital masterpiece.
                </p>
                <div className="pt-[30px] flex justify-center xl:justify-start wow animate__animated animate__zoomIn">
                  <button onClick={toggleModal} className="relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white hover:border-[3px]">
                    Let’s Build Together
                    <span className="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
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
                          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-wrap md:p-[20px] justify-center">
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
                            <div className="text-start w-full md:px-[10px] py-[10px] sm:py-[20px] wow animate__animated animate__zoomIn">
                              <label className="font-Secondary text-[14px] sm:text-[16px]">Your Message <span className="text-[#0073e9]">*</span></label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={formStatus.isSubmitting}
                                placeholder="Your Message"
                                cols="20"
                                rows="6"
                                required
                                className="pt-[20px] placeholder:text-[14px] placeholder:sm:text-[16px]  w-full border-b-[2px] border-solid border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                              ></textarea>
                            </div>
                            <div className="flex justify-center gap-4 sm:gap-8 mt-4 sm:mt-0">
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
                          <button
                            onClick={toggleModal}
                            className="absolute top-0 right-0 flex items-center justify-center  p-2  text-Primary text-3xl "
                          >
                            <IoClose />
                          </button>
                        </div>
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
              <div className="Banner_svg w-full lg:w-6/12 flex justify-end wow animate__animated animate__zoomIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  fill="enable-background:new 0 0 500 500"
                  className="w-full lg:w-[450px] xl:w-[550px] 2xl:w-[700px] h-full lg:h-[450px] xl:h-[550px] 2xl:h-[700px]"
                >
                  <g id="Floor">
                    <path
                      id="Floor_00000105411661892854211080000011897633904647101626_"
                      fill="#FAFAFA"
                      d="M77.661,252.526
      c-95.177,54.951-95.175,144.044,0.005,198.995c95.18,54.951,249.496,54.951,344.674,0c95.178-54.951,95.175-144.044-0.005-198.995
      S172.838,197.575,77.661,252.526z"
                    />
                  </g>
                  <g id="Table">
                    <g>
                      <g id="Desk_00000130607068667251319980000004307192444561529240_">
                        <polygon
                          fill="#37474F"
                          points="24.496,334.052 24.496,353.401 164.207,434.203 164.207,414.854 			"
                        />
                        <polygon
                          fill="#455A64"
                          points="164.207,414.854 425.875,263.756 425.875,283.105 164.207,434.203 			"
                        />
                        <g id="XMLID_00000049907995572814936560000011704493498974040469_">
                          <polygon
                            fill="#EBEBEB"
                            points="164.207,407.523 19.569,323.896 285.328,170.441 429.966,254.068 				"
                          />
                        </g>
                        <g id="XMLID_00000042007517753493524770000008486224605024973956_">
                          <polygon
                            fill="#E0E0E0"
                            points="19.569,323.896 19.569,334.159 164.207,417.786 164.207,407.523 				"
                          />
                        </g>
                        <g
                          id="XMLID_00000129897025466455210370000015966856221626386058_"
                          fill="#E0E0E05"
                        >
                          <polygon points="19.569,323.896 19.569,334.159 164.207,417.786 164.207,407.523 				" />
                        </g>
                        <g id="XMLID_00000027570743040483700000000011561859651047759281_">
                          <polygon
                            fill="#E0E0E0"
                            points="164.207,417.786 429.966,264.33 429.966,254.068 164.207,407.523 				"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Button_00000018231605142516898530000007904799946916101035_">
                    <g id="Button">
                      <path
                        id="Shadow_00000039117461390767040760000017375590233533546668_"
                        fill="#E0E0E0"
                        d="M118.307,361.927
        c-1.112,0-2.195-0.271-3.046-0.762l-48.798-28.172c-1.243-0.718-1.955-1.857-1.954-3.125c0-1.268,0.714-2.406,1.955-3.121
        l46.695-27.019c0.855-0.492,1.936-0.763,3.049-0.763c1.113,0,2.197,0.271,3.049,0.764l48.796,28.171
        c1.241,0.716,1.954,1.855,1.954,3.122c0,1.268-0.712,2.407-1.955,3.122l-46.695,27.019
        C120.503,361.656,119.421,361.927,118.307,361.927z"
                      />
                      <g id="Box_4_">
                        <path
                          id="XMLID_5239_"
                          fill="#1173b9ee"
                          d="M164.706,331.496l-44.724,25.877c-0.987,0.57-2.589,0.571-3.577,0.001
          L69.669,330.39c-0.988-0.57-1.777-1.957-1.766-3.097l0.03-3.916c0.011-1.141,0.821-2.527,1.808-3.098l44.724-25.877
          c0.988-0.57,2.589-0.57,3.577,0l46.734,26.982c0.988,0.57,1.779,1.957,1.768,3.098l-0.03,3.917
          C166.503,329.539,165.693,330.926,164.706,331.496z"
                        />
                        <path
                          id="XMLID_00000064319750407853949210000003640900594777362562_"
                          fill="opacity:0.2"
                          d="M69.741,320.279
          c-0.954,0.548-1.84,2.045-1.813,3.098l-0.022,3.917c-0.016,1.135,0.776,2.526,1.763,3.096l46.736,26.983
          c0.515,0.297,1.191,0.431,1.866,0.42l-0.008-8.045c-0.644,0.009-1.294-0.137-1.788-0.422l-46.731-26.98
          C68.84,321.824,68.686,320.886,69.741,320.279z"
                        />
                        <path
                          id="XMLID_00000129928115524727783240000008482402176370403251_"
                          fill="#E0E0E0"
                          d="M165.045,321.567
          c0.71,0.572,0.621,1.37-0.269,1.886l-44.723,25.87c-0.498,0.285-1.143,0.427-1.791,0.425l0.004,8.052
          c0.626-0.011,1.242-0.151,1.717-0.43l44.727-25.877c0.985-0.567,1.793-1.95,1.807-3.097l0.029-3.913
          C166.553,323.449,165.906,322.207,165.045,321.567z"
                        />
                        <path
                          fill="#1173b9ee"
                          d="M164.776,323.449l-44.725,25.877c-0.988,0.57-2.589,0.57-3.577,0l-29.696-17.145l-17.038-9.837
          c-0.988-0.57-0.987-1.495,0-2.065l44.724-25.877c0.988-0.57,2.589-0.57,3.577,0l46.734,26.982
          C165.763,321.954,165.763,322.879,164.776,323.449z"
                        />
                      </g>
                      <g id="_x3C__x2F__x3E__2_">
                        <path
                          fill="#FFFFFF"
                          d="M94.965,333.493c-0.376-0.217-0.597-0.423-0.663-0.613c-0.068-0.191-0.085-0.419-0.049-0.683
          l1.057-11.586c0.022-0.067,0.05-0.118,0.083-0.15c0.032-0.032,0.065-0.058,0.101-0.08c0.158-0.091,0.361-0.126,0.606-0.105
          c0.247,0.02,0.476,0.091,0.687,0.213l5.703,3.293c0.469,0.271,0.708,0.527,0.717,0.765c0.008,0.238-0.007,0.438-0.047,0.597
          l-0.748,4.904l8.458-0.453c0.275-0.024,0.626-0.029,1.051-0.017c0.426,0.012,0.873,0.153,1.342,0.424l5.703,3.293
          c0.211,0.122,0.335,0.255,0.369,0.397c0.036,0.142-0.025,0.258-0.184,0.349c-0.036,0.022-0.08,0.04-0.136,0.06
          c-0.057,0.018-0.144,0.035-0.26,0.048l-20.069,0.609c-0.458,0.02-0.852,0.011-1.183-0.028c-0.331-0.039-0.686-0.166-1.061-0.383
          L94.965,333.493z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M95.696,317.54c-0.153-0.045-0.277-0.096-0.37-0.15c-0.211-0.122-0.335-0.26-0.374-0.415
          c-0.038-0.154,0.022-0.277,0.179-0.367l3.459-1.998c0.352-0.203,0.734-0.287,1.145-0.253c0.411,0.033,0.769,0.098,1.073,0.193
          l37.407,11.29c0.154,0.048,0.276,0.098,0.371,0.153c0.211,0.122,0.335,0.26,0.374,0.414c0.037,0.155-0.022,0.277-0.18,0.368
          l-3.539,2.043c-0.335,0.194-0.701,0.277-1.1,0.25c-0.4-0.028-0.772-0.091-1.117-0.188L95.696,317.54z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M138.878,309.848c0.375,0.216,0.596,0.421,0.664,0.612c0.067,0.192,0.083,0.42,0.047,0.684
          l-1.055,11.587c-0.024,0.066-0.052,0.117-0.083,0.15c-0.031,0.031-0.066,0.057-0.102,0.077c-0.159,0.092-0.361,0.128-0.607,0.107
          c-0.247-0.02-0.476-0.092-0.687-0.214l-5.703-3.293c-0.47-0.271-0.714-0.528-0.736-0.775c-0.02-0.245-0.009-0.449,0.031-0.607
          l0.784-4.883l-8.493,0.432c-0.275,0.022-0.621,0.032-1.035,0.027c-0.413-0.005-0.854-0.143-1.324-0.415l-5.703-3.293
          c-0.211-0.122-0.335-0.254-0.37-0.396c-0.036-0.142,0.026-0.258,0.185-0.351c0.036-0.02,0.082-0.04,0.136-0.057
          c0.056-0.019,0.143-0.036,0.26-0.048l20.068-0.61c0.458-0.021,0.853-0.011,1.185,0.027c0.33,0.039,0.684,0.167,1.061,0.384
          L138.878,309.848z"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    class="rotate"
                    d="M144.699 35.3218C149.373 32.504 154.4 30.3199 159.65 28.8268L162.713 14.1211L187.688 13.6799L191.291 28.3856C196.579 29.6307 201.674 31.5846 206.438 34.1944L219.061 25.9102L237.026 43.2629L229.208 56.2529C232.011 60.9256 234.194 65.9432 235.703 71.1792L250.408 74.2674L250.849 99.2426L236.144 102.846C234.854 108.141 232.851 113.237 230.188 117.992L238.472 130.615L221.119 148.605L208.424 140.737C203.755 143.565 198.726 145.75 193.473 147.232L190.409 161.938L165.434 162.355L161.831 147.649C156.541 146.342 151.448 144.339 146.684 141.693L133.915 150.1L115.949 132.747L123.768 119.978C120.958 115.303 118.782 110.275 117.297 105.027L102.591 101.963L102.052 76.8409L116.758 73.2625C118.036 67.9664 120.014 62.8643 122.64 58.0911L114.43 45.4688L131.782 27.5033L144.699 35.3218ZM158.007 68.5077C154.329 72.3197 151.863 77.1368 150.921 82.3501C149.98 87.5634 150.606 92.9388 152.719 97.7967C154.832 102.655 158.338 106.777 162.794 109.642C167.25 112.508 172.455 113.988 177.752 113.895C183.049 113.803 188.199 112.142 192.552 109.122C196.905 106.103 200.265 101.861 202.207 96.9324C204.15 92.0037 204.587 86.6097 203.464 81.4325C202.341 76.2553 199.709 71.5272 195.899 67.8459C193.37 65.3974 190.382 63.4719 187.108 62.1797C183.833 60.8875 180.336 60.2539 176.816 60.3154C173.296 60.3769 169.823 61.1321 166.596 62.5379C163.368 63.9437 160.45 65.9723 158.007 68.5077Z"
                    fill="#1173b9ee"
                  ></path>
                  <g id="Coffee_00000093135176280219100200000005347609640055442597_">
                    <g id="Coffee_00000149359871173542705670000002369964627798816674_">
                      <ellipse
                        id="Shadow_00000010304393062791725340000004888838750351497863_"
                        fill="#E0E0E0"
                        cx="287.275"
                        cy="203.848"
                        rx="20.248"
                        ry="11.69"
                      />
                      <g id="Coffee">
                        <g id="XMLID_00000152982400663964853440000015853794610603415683_">
                          <path
                            id="XMLID_00000115503961724892753830000013940608731759050382_"
                            fill="#1173b9ee"
                            d="M273.484,167.982
            c7.726-2.942,20.093-3.079,27.624-0.305c7.531,2.773,7.582,7.405,0.115,10.344c-7.468,2.94-19.835,3.076-27.624,0.305
            C265.809,175.555,265.758,170.924,273.484,167.982z"
                          />
                          <path
                            id="XMLID_00000166636796094071598250000003616320857433861791_"
                            fill="opacity:0.3"
                            d="M273.484,167.982
            c7.726-2.942,20.093-3.079,27.624-0.305c7.531,2.773,7.582,7.405,0.115,10.344c-7.468,2.94-19.835,3.076-27.624,0.305
            C265.809,175.555,265.758,170.924,273.484,167.982z"
                          />
                        </g>
                        <g id="Soda">
                          <g id="Coffe_2_">
                            <g id="XMLID_735_">
                              <g id="XMLID_00000155120838140713416210000003002881361392525493_">
                                <g id="XMLID_00000117671275709292143250000006057168223864878737_">
                                  <path
                                    fill="#FAFAFA"
                                    d="M287.439,210.58c-4.323,0-8.41-0.841-11.508-2.369c-2.798-1.38-4.439-3.19-4.621-5.096
                    l-0.037-0.381h-0.033l-4.145-47.449l40.362,0.049l-4.145,47.42l-0.068,0.361c-0.177,1.909-1.763,3.719-4.464,5.098
                    C295.787,209.74,291.76,210.58,287.439,210.58z"
                                  />
                                  <path
                                    fill="#E6E6E6"
                                    d="M267.554,155.707l39.442,0.048l-4.069,46.557h-0.032l-0.071,0.765
                    c-0.163,1.76-1.668,3.451-4.236,4.761c-2.934,1.497-6.893,2.321-11.149,2.321c-4.26,0-8.281-0.826-11.322-2.326
                    c-2.661-1.313-4.22-3.002-4.388-4.758l-0.095-0.653L267.554,155.707 M266.634,154.863l4.218,48.292h0.038
                    c0.189,1.976,1.794,3.925,4.854,5.434c3.261,1.609,7.491,2.413,11.694,2.413c4.203,0,8.379-0.804,11.532-2.413
                    c2.958-1.508,4.509-3.458,4.693-5.434h0.037l4.216-48.242L266.634,154.863L266.634,154.863z"
                                  />
                                </g>
                              </g>
                              <g id="XMLID_00000150084904652852556760000005973304322844055432_">
                                <g id="XMLID_00000016753813167814893400000014296407443295714983_">
                                  <path
                                    id="XMLID_00000000916388101396611820000004320286399628568962_"
                                    fill="#1173b9ee"
                                    d="M265.568,158.922
                    l-0.744-8.256h5.235c0.6-0.375,1.254-0.737,1.974-1.08c8.621-4.105,22.365-4.105,30.699-0.001
                    c0.694,0.342,1.308,0.707,1.886,1.081h5.108l-0.744,8.257l0,0c0,2.69-2.083,5.38-6.25,7.432
                    c-8.334,4.105-22.078,4.104-30.699-0.001C267.723,164.303,265.568,161.613,265.568,158.922z"
                                  />
                                </g>
                                <g
                                  id="XMLID_00000091708292118236430240000016993819615311021997_"
                                  fill="opacity:0.2"
                                >
                                  <path
                                    id="XMLID_00000025438309679512949850000003487858975214403494_"
                                    d="M265.568,158.922l-0.744-8.256h5.235
                    c0.6-0.375,1.254-0.737,1.974-1.08c8.621-4.105,22.365-4.105,30.699-0.001c0.694,0.342,1.308,0.707,1.886,1.081h5.108
                    l-0.744,8.257l0,0c0,2.69-2.083,5.38-6.25,7.432c-8.334,4.105-22.078,4.104-30.699-0.001
                    C267.723,164.303,265.568,161.613,265.568,158.922z"
                                  />
                                </g>
                                <g id="XMLID_00000010307415515893784700000007732688767009466504_">
                                  <path
                                    id="XMLID_00000009563110949303136890000002507024915929020087_"
                                    fill="#1173b9ee"
                                    d="M271.511,142.979
                    c8.916-4.245,23.132-4.246,31.751,0c8.619,4.245,8.62,11.129,0,15.374c-8.62,4.245-22.835,4.245-31.751,0
                    C262.595,154.108,262.595,147.225,271.511,142.979z"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="XMLID_00000142170778872275649720000007750083011283303814_">
                          <path
                            fill="#1173b9ee"
                            d="M306.784,172.89l-0.042,0.792l-0.034,0.607l-1.239,16.126c-0.017,1.104-0.742,2.192-2.183,3.178
            c-0.126,0.084-0.253,0.169-0.388,0.245c-0.658,0.379-1.416,0.75-2.293,1.096c-3.397,1.332-7.857,2.057-12.392,2.158
            c-0.641,0.008-1.273,0.008-1.914,0c-4.24-0.076-8.413-0.691-11.717-1.871c-1.172-0.413-2.166-0.885-2.967-1.382
            c-0.135-0.084-0.261-0.16-0.388-0.245c-1.441-0.986-2.167-2.074-2.183-3.178l-1.239-16.126l-0.059-0.7
            c0.008,0.025,0.017,0.059,0.025,0.093c0.312,1.711,2.251,3.372,5.825,4.645c3.827,1.357,8.758,2.015,13.665,1.99
            c5.092-0.034,10.158-0.801,13.96-2.293C304.887,176.574,306.741,174.728,306.784,172.89z"
                          />
                          <path
                            fill="opacity:0.35#FFFFFF"
                            d="M306.784,172.89l-0.042,0.792l-0.034,0.607l-1.239,16.126
            c-0.017,1.104-0.742,2.192-2.183,3.178c-0.126,0.084-0.253,0.169-0.388,0.245c-0.658,0.379-1.416,0.75-2.293,1.096
            c-3.397,1.332-7.857,2.057-12.392,2.158c-0.641,0.008-1.273,0.008-1.914,0c-4.24-0.076-8.413-0.691-11.717-1.871
            c-1.172-0.413-2.166-0.885-2.967-1.382c-0.135-0.084-0.261-0.16-0.388-0.245c-1.441-0.986-2.167-2.074-2.183-3.178
            l-1.239-16.126l-0.059-0.7c0.008,0.025,0.017,0.059,0.025,0.093c0.312,1.711,2.251,3.372,5.825,4.645
            c3.827,1.357,8.758,2.015,13.665,1.99c5.092-0.034,10.158-0.801,13.96-2.293C304.887,176.574,306.741,174.728,306.784,172.89z"
                          />
                        </g>
                        {/* <g id="XMLID_00000070807744585459370070000007413952699115990438_">
                                  <g id="XMLID_00000178913179078337382710000012955214572164818102_">
                                      <path id="XMLID_00000070839863800315906400000016542627156763476353_" fill="#37474F" d="M293.714,191.153
              c0.647-0.889,0.997-1.977,1.518-2.938c1.036-1.914,2.533-3.224,4.457-4.013c0.257-0.105,0.578-0.002,0.703,0.246
              c1.001,1.982,0.431,4.778-1.572,6.826c-1.983,2.027-4.737,2.678-6.737,1.764c-0.113-0.052-0.147-0.271-0.056-0.326
              C292.663,192.333,293.229,191.822,293.714,191.153z"/>
                                  </g>
                                  <g id="XMLID_00000121966701311185391200000009474842362796044463_">
                                      <path id="XMLID_00000122710312865215403030000018040117872763446670_" fill="#37474F" d="M298.604,183.668
              c-1.039,0.41-2.007,1.048-2.819,1.777c-0.869,0.78-1.537,1.771-2.023,2.833c-0.738,1.614-1.448,2.614-2.547,3.453
              c-0.239,0.182-0.608,0.138-0.776-0.111c-1.345-1.987-0.854-5.061,1.305-7.268c2.046-2.091,4.91-2.717,6.921-1.673
              C299.069,182.889,299.028,183.501,298.604,183.668z"/>
                                  </g>
                              </g> */}
                        <g id="XMLID_00000010304227776023992080000014412440685105928838_">
                          <path
                            fill="#1173b9ee"
                            d="M269.088,148.964l-0.016,0l1.352-6.744l11.309-0.125c3.668-0.565,7.607-0.608,11.247-0.124
            l10.977-0.121l1.507,6.712l-0.019,0c0.736,2.436-0.926,5.016-5.034,6.94c-7.013,3.283-18.635,3.411-25.961,0.286
            C270.158,153.958,268.38,151.416,269.088,148.964z"
                          />
                          <path
                            fill="opacity:0.2"
                            d="M269.088,148.964l-0.016,0l1.352-6.744l11.309-0.125c3.668-0.565,7.607-0.608,11.247-0.124
            l10.977-0.121l1.507,6.712l-0.019,0c0.736,2.436-0.926,5.016-5.034,6.94c-7.013,3.283-18.635,3.411-25.961,0.286
            C270.158,153.958,268.38,151.416,269.088,148.964z"
                          />
                          <g id="XMLID_00000118371344774441117630000015443946000680024193_">
                            <path
                              id="XMLID_00000121994988533005030820000011003617148125496244_"
                              fill="#1173b9ee"
                              d="M275.303,137.867
              c6.665-2.864,17.34-2.982,23.844-0.264c6.504,2.718,6.553,7.241,0.111,10.102c-6.442,2.862-17.117,2.979-23.844,0.263
              C268.688,145.253,268.638,140.73,275.303,137.867z"
                            />
                          </g>
                          <g id="XMLID_00000039844696355689416580000015296888782055123875_">
                            <path
                              id="XMLID_00000108994367017984572400000007686846249794423697_"
                              fill="#1173b9ee"
                              d="M272.659,142.955
              c0.013,0.106,0.19,0.463,0.752,0.947c0.527,0.446,1.402,1.007,2.764,1.563c2.968,1.188,7.066,1.86,11.237,1.814
              c4.171-0.046,8.184-0.794,11.009-2.047c1.326-0.586,2.154-1.179,2.636-1.636c0.539-0.51,0.685-0.883,0.684-0.976
              c-0.002-0.186-0.594-1.361-3.376-2.525c-2.853-1.19-6.881-1.849-11.052-1.803c-4.171,0.046-8.253,0.794-11.194,2.061
              C273.35,141.54,272.668,142.716,272.659,142.955z"
                            />
                          </g>
                          <g
                            id="XMLID_00000181791579869195474610000011040332403403950490_"
                            fill="opacity:0.5"
                          >
                            <path
                              id="XMLID_00000024706779966000025230000007484335670169718671_"
                              d="M272.659,142.955c0.013,0.106,0.19,0.463,0.752,0.947
              c0.527,0.446,1.402,1.007,2.764,1.563c2.968,1.188,7.066,1.86,11.237,1.814c4.171-0.046,8.184-0.794,11.009-2.047
              c1.326-0.586,2.154-1.179,2.636-1.636c0.539-0.51,0.685-0.883,0.684-0.976c-0.002-0.186-0.594-1.361-3.376-2.525
              c-2.853-1.19-6.881-1.849-11.052-1.803c-4.171,0.046-8.253,0.794-11.194,2.061C273.35,141.54,272.668,142.716,272.659,142.955z
              "
                            />
                          </g>
                          <g id="XMLID_00000160899935510950526240000015508366221973948083_">
                            <path
                              id="XMLID_00000046302809506892698210000004214488373955415969_"
                              fill="#1173b9ee"
                              d="M273.411,143.902
              c0.527,0.446,1.402,1.007,2.764,1.563c2.968,1.188,7.066,1.86,11.237,1.814c4.171-0.046,8.184-0.794,11.009-2.047
              c1.326-0.586,2.154-1.179,2.636-1.636c-0.492-0.446-1.333-1.021-2.671-1.576c-2.853-1.19-6.881-1.849-11.052-1.803
              c-4.171,0.046-8.253,0.795-11.194,2.061C274.79,142.865,273.927,143.432,273.411,143.902z"
                            />
                          </g>
                          <g
                            id="XMLID_00000157269666681897010690000003609016207707996823_"
                            fill="opacity:0.2"
                          >
                            <path
                              id="XMLID_00000020388585843889708600000000501469881761215382_"
                              d="M273.411,143.902
              c0.527,0.446,1.402,1.007,2.764,1.563c2.968,1.188,7.066,1.86,11.237,1.814c4.171-0.046,8.184-0.794,11.009-2.047
              c1.326-0.586,2.154-1.179,2.636-1.636c-0.492-0.446-1.333-1.021-2.671-1.576c-2.853-1.19-6.881-1.849-11.052-1.803
              c-4.171,0.046-8.253,0.795-11.194,2.061C274.79,142.865,273.927,143.432,273.411,143.902z"
                            />
                          </g>
                          <g
                            id="XMLID_00000051367712544106341150000010687520660626487990_"
                            fill="opacity:0.5"
                          >
                            <path
                              id="XMLID_00000146490555572094659420000013620254191994735804_"
                              d="M280.122,144.002
              c-0.982-0.622-2.171-0.868-2.655-0.549c-0.485,0.32-0.08,1.09,0.902,1.721c0.982,0.63,2.171,0.876,2.655,0.548
              C281.508,145.395,281.104,144.624,280.122,144.002z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Device">
                    <g id="Laptop_00000103980038921559206170000018040286741664923541_">
                      <path
                        id="Shadow_00000024685252108655581900000010028846740094055859_"
                        fill="#E0E0E0"
                        d="M110.294,280.982l82.054,47.356
        c1.861,1.074,4.878,1.074,6.739,0l122.098-70.499c1.861-1.074,1.861-2.817,0-3.891l-82.053-47.356
        c-1.861-1.074-4.878-1.074-6.74,0L110.294,277.09C108.433,278.165,108.433,279.907,110.294,280.982z"
                      />
                      <g>
                        <g>
                          <path
                            fill="#1173b9ee"
                            d="M116.82,277.685c0,1.905,1.425,3.125,3.183,4.14l72.064,41.606c1.758,1.015,4.609,1.015,6.367,0
            l116.255-67.12c1.758-1.015,3.184-2.322,3.184-4.226c0-1.905-1.425-3.083-3.184-4.098l-72.064-41.606
            c-1.758-1.015-4.609-1.015-6.367,0l-116.256,67.12C118.244,274.516,116.82,275.78,116.82,277.685z"
                          />
                          <path
                            fill="#E0E0E0"
                            d="M116.82,277.685c0,1.905,1.425,3.125,3.183,4.14l72.064,41.606
            c1.758,1.015,4.609,1.015,6.367,0l116.255-67.12c1.758-1.015,3.184-2.322,3.184-4.226c0-1.905-1.425-3.083-3.184-4.098
            l-72.064-41.606c-1.758-1.015-4.609-1.015-6.367,0l-116.256,67.12C118.244,274.516,116.82,275.78,116.82,277.685z"
                          />
                          <path
                            fill="#1173b9ee"
                            d="M120.003,277.177l72.064,41.606c1.758,1.015,4.609,1.015,6.367,0l116.256-67.12
            c1.758-1.015,1.758-2.661,0-3.676l-72.064-41.606c-1.758-1.015-4.609-1.015-6.367,0l-116.256,67.12
            C118.244,274.516,118.244,276.162,120.003,277.177z"
                          />
                          <path
                            fill="opacity:0.85#FFFFFF"
                            d="M120.003,277.177l72.064,41.606c1.758,1.015,4.609,1.015,6.367,0l116.256-67.12
            c1.758-1.015,1.758-2.661,0-3.676l-72.064-41.606c-1.758-1.015-4.609-1.015-6.367,0l-116.256,67.12
            C118.244,274.516,118.244,276.162,120.003,277.177z"
                          />
                          <path
                            fill="#1173b9ee"
                            d="M195.253,319.551v4.64c-1.154,0-2.309-0.25-3.184-0.757l-72.067-41.608
            c-1.757-1.014-3.183-2.236-3.183-4.14c0-1.787,1.282-3.031,2.935-4.042c-1.365,0.965-1.391,2.586,0.248,3.535l72.067,41.608
            C192.944,319.294,194.099,319.551,195.253,319.551z"
                          />
                        </g>
                        <path
                          fill="#1173b9ee"
                          d="M129.836,274.042l106.835-61.68c0.829-0.479,2.173-0.479,3.002,0l3.891,2.183
          c0.829,0.479,0.829,1.255,0,1.733l-106.851,61.671c-0.829,0.479-2.173,0.478-3.002,0l-3.875-2.173
          C129.007,275.296,129.007,274.52,129.836,274.042z"
                        />
                        <path
                          fill="opacity:0.7#FFFFFF"
                          d="M129.836,274.042l106.835-61.68c0.829-0.479,2.173-0.479,3.002,0l3.891,2.183
          c0.829,0.479,0.829,1.255,0,1.733l-106.851,61.671c-0.829,0.479-2.173,0.478-3.002,0l-3.875-2.173
          C129.007,275.296,129.007,274.52,129.836,274.042z"
                        />
                        <g>
                          <path
                            fill="#1173b9ee"
                            d="M140.327,280.23l106.833-61.681c0.829-0.479,2.057-0.546,2.743-0.149l27.808,16.055
            c0.686,0.396,0.57,1.105-0.259,1.584l-106.709,61.597c-0.829,0.479-2.059,0.548-2.746,0.154l-27.925-15.98
            C139.384,281.416,139.498,280.709,140.327,280.23z"
                          />
                          <path
                            fill="#E0E0E0"
                            d="M140.327,280.23l106.833-61.681c0.829-0.479,2.057-0.546,2.743-0.149l27.808,16.055
            c0.686,0.396,0.57,1.105-0.259,1.584l-106.709,61.597c-0.829,0.479-2.059,0.548-2.746,0.154l-27.925-15.98
            C139.384,281.416,139.498,280.709,140.327,280.23z"
                          />
                          <path
                            fill="#FAFAFA"
                            d="M232.9,244.456l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28l3.2,1.848
            C232.541,244.546,232.758,244.538,232.9,244.456z M228.016,237.774l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C228.376,237.684,228.158,237.692,228.016,237.774z M217.209,244.013l-5.661,3.268c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l5.661-3.268c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C217.569,243.924,217.352,243.931,217.209,244.013z M223.127,240.596l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.201-1.848
            C223.487,240.507,223.269,240.514,223.127,240.596z M210.005,248.173l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932c0.142-0.082,0.155-0.207,0.028-0.28l-3.2-1.848
            C210.365,248.083,210.147,248.091,210.005,248.173z M205.116,250.995l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.847c0.126,0.073,0.343,0.066,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.208,0.028-0.281l-3.2-1.847
            C205.476,250.906,205.258,250.913,205.116,250.995z M217.659,258.534l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.281l3.2,1.848
            C217.299,258.624,217.517,258.616,217.659,258.534z M212.77,261.357l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C212.411,261.446,212.628,261.439,212.77,261.357z M207.882,264.179l3.345-1.932c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C207.522,264.269,207.739,264.261,207.882,264.179z M202.993,267.002l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C202.633,267.091,202.851,267.084,202.993,267.002z M228.012,247.279l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C227.652,247.368,227.869,247.361,228.012,247.279z M222.548,255.712l7.462-4.308c0.142-0.082,0.155-0.208,0.029-0.281
            l-7.771-4.487c-0.126-0.073-0.344-0.065-0.486,0.017l-3.859,2.228c-0.142,0.082-0.155,0.208-0.029,0.281l4.115,2.375
            c0.126,0.073,0.113,0.199-0.029,0.281l-3.087,1.783c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C222.188,255.801,222.406,255.794,222.548,255.712z M200.227,253.818l-3.345,1.931c-0.142,0.082-0.155,0.208-0.028,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.028-0.281l-3.2-1.848
            C200.587,253.728,200.369,253.736,200.227,253.818z M195.338,256.64l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C195.698,256.551,195.48,256.559,195.338,256.64z M168.285,286.777c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L168.285,286.777z M156.228,279.221l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847
            C156.587,279.132,156.37,279.139,156.228,279.221z M162.427,284.88c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932
            c0.142-0.082,0.155-0.208,0.028-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L162.427,284.88z M175.916,287.914l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.028,0.281l3.2,1.847
            C175.556,288.003,175.774,287.996,175.916,287.914z M170.541,290.753c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.932
            c-0.142,0.082-0.155,0.207-0.029,0.28L170.541,290.753z M161.117,276.398l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            C161.476,276.309,161.259,276.316,161.117,276.398z M185.561,262.286l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            C185.92,262.196,185.703,262.203,185.561,262.286z M166.005,273.576l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C166.365,273.486,166.148,273.494,166.005,273.576z M190.449,259.463l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C190.809,259.373,190.592,259.381,190.449,259.463z M180.672,265.108l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C181.032,265.019,180.814,265.026,180.672,265.108z M175.783,267.931l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C176.143,267.841,175.925,267.849,175.783,267.931z M170.894,270.753l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847
            C171.254,270.664,171.036,270.671,170.894,270.753z M193.215,272.647l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C192.855,272.737,193.073,272.729,193.215,272.647z M238.823,231.534l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C239.183,231.445,238.965,231.452,238.823,231.534z M232.905,234.951l-3.345,1.932c-0.142,0.082-0.155,0.207-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C233.265,234.862,233.047,234.869,232.905,234.951z M243.712,228.712l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C244.072,228.623,243.854,228.63,243.712,228.712z M216.69,253.815l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.281l-3.2-1.848
            c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C216.33,253.904,216.548,253.897,216.69,253.815z M249.087,225.873c-0.126-0.073-0.344-0.065-0.486,0.016l-3.344,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.207,0.029-0.28L249.087,225.873z M198.104,269.824l3.345-1.931c0.142-0.082,0.155-0.208,0.028-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.932c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C197.744,269.914,197.962,269.906,198.104,269.824z M258.056,235.211l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.847c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847
            C257.697,235.3,257.914,235.293,258.056,235.211z M248.596,235.394l3.345-1.932c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            c-0.126-0.073-0.344-0.065-0.485,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C248.236,235.484,248.454,235.476,248.596,235.394z M253.658,228.512c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.028,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281L253.658,228.512z M254.688,227.918l7.771,4.487c0.126,0.073,0.344,0.065,0.486-0.017
            l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-7.772-4.487c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            C254.574,227.719,254.561,227.845,254.688,227.918z M243.395,234.174l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C243.754,234.085,243.537,234.092,243.395,234.174z M206.6,255.417l-3.345,1.932c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C206.96,255.328,206.742,255.335,206.6,255.417z M252.682,238.05c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L252.682,238.05z M211.489,252.595l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C211.848,252.505,211.631,252.513,211.489,252.595z M173.174,283.954c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.028-0.281l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L173.174,283.954z M167.49,277.998l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C167.849,277.908,167.632,277.916,167.49,277.998z M178.548,281.115l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C178.189,281.204,178.407,281.197,178.548,281.115z M183.437,278.292l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C183.078,278.382,183.296,278.374,183.437,278.292z M188.326,275.47l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C187.967,275.559,188.184,275.552,188.326,275.47z M172.378,275.175l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.201,1.847c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847
            C172.738,275.086,172.52,275.093,172.378,275.175z M177.267,272.353l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            C177.627,272.263,177.409,272.271,177.267,272.353z M196.822,261.063l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847
            C197.182,260.973,196.964,260.98,196.822,261.063z M191.933,263.885l-3.345,1.931c-0.142,0.082-0.155,0.208-0.028,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848
            C192.293,263.796,192.076,263.803,191.933,263.885z M201.711,258.24l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848
            C202.071,258.15,201.853,258.158,201.711,258.24z M182.156,269.53l-3.345,1.932c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.847
            C182.516,269.441,182.298,269.448,182.156,269.53z M187.044,266.707l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281
            l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            C187.405,266.618,187.187,266.626,187.044,266.707z M180.805,285.091l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C180.445,285.18,180.662,285.173,180.805,285.091z M155.025,283.874l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017
            l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28l3.2,1.848c0.127,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            C155.139,284.073,155.151,283.947,155.025,283.874z M161.398,285.474l-3.2-1.847c-0.126-0.073-0.343-0.066-0.486,0.017
            l-5.146,2.971c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l5.146-2.971
            C161.511,285.672,161.524,285.547,161.398,285.474z M150.249,280.225l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.016
            l-4.117,2.377c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l4.117-2.377
            C150.362,280.424,150.375,280.298,150.249,280.225z M153.405,278.403c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932
            c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L153.405,278.403z M167.256,287.37l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017
            l-6.433,3.714c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.016l6.433-3.714
            C167.369,287.569,167.382,287.444,167.256,287.37z M169.512,291.347l-3.201-1.847c-0.126-0.073-0.344-0.066-0.486,0.016
            l-4.117,2.377c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l4.117-2.377
            C169.625,291.546,169.638,291.42,169.512,291.347z M189.754,257.417c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932
            c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.344,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L189.754,257.417z M179.976,263.062c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.207,0.028-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L179.976,263.062z M158.293,275.58c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L158.293,275.58z M184.865,260.24c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L184.865,260.24z M175.087,265.885c0.126,0.072,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.028,0.28L175.087,265.885z M171.913,291.545c-0.126-0.073-0.344-0.066-0.486,0.016l-5.146,2.971
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.016l5.146-2.971
            c0.142-0.082,0.155-0.208,0.029-0.281L171.913,291.545z M168.071,269.935c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.207-0.029,0.28L168.071,269.935z M163.182,272.758c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L163.182,272.758z M262.484,239.253c-0.126-0.073-0.344-0.066-0.486,0.016l-8.233,4.754
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.201,1.847c0.126,0.073,0.344,0.066,0.486-0.017l8.234-4.754
            c0.142-0.082,0.155-0.207,0.029-0.28L262.484,239.253z M251.677,245.492c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281L251.677,245.492z M185.693,282.268l3.345-1.931c0.142-0.082,0.155-0.208,0.028-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28l3.2,1.848
            C185.334,282.358,185.551,282.35,185.693,282.268z M241.9,251.137c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932
            c0.142-0.082,0.155-0.208,0.029-0.28L241.9,251.137z M267.373,236.43c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.932
            c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281L267.373,236.43z M275.462,235.456l-7.772-4.487c-0.126-0.073-0.344-0.065-0.486,0.017
            l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l7.772,4.487c0.126,0.073,0.344,0.065,0.486-0.016l3.345-1.932
            C275.575,235.654,275.588,235.528,275.462,235.456z M223.631,261.685c-0.126-0.073-0.344-0.065-0.486,0.017l-4.117,2.377
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.017l4.117-2.377
            c0.142-0.082,0.155-0.208,0.029-0.28L223.631,261.685z M235.982,254.554c-0.126-0.073-0.344-0.065-0.486,0.017l-5.146,2.971
            c-0.142,0.082-0.155,0.207-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l5.146-2.971
            c0.142-0.082,0.155-0.208,0.028-0.281L235.982,254.554z M212.31,268.221c-0.126-0.073-0.344-0.065-0.486,0.017l-27.532,15.896
            c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.066,0.486-0.017l27.531-15.895
            c0.142-0.082,0.155-0.208,0.029-0.281L212.31,268.221z M183.234,285.008c-0.126-0.073-0.344-0.065-0.486,0.017l-4.117,2.377
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l4.117-2.377
            c0.142-0.082,0.155-0.207,0.028-0.28L183.234,285.008z M217.97,264.953c-0.126-0.073-0.344-0.065-0.486,0.017l-4.117,2.377
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847c0.126,0.073,0.344,0.066,0.486-0.016l4.117-2.377
            c0.142-0.082,0.155-0.207,0.029-0.28L217.97,264.953z M177.573,288.276c-0.126-0.073-0.344-0.065-0.486,0.017l-4.117,2.377
            c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l4.117-2.377
            c0.142-0.082,0.155-0.208,0.029-0.281L177.573,288.276z M229.292,258.417c-0.126-0.073-0.344-0.066-0.486,0.017l-4.117,2.377
            c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l4.117-2.377
            c0.142-0.082,0.155-0.208,0.029-0.28L229.292,258.417z M246.789,248.315c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281L246.789,248.315z M257.739,240.673l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847
            C257.379,240.762,257.597,240.755,257.739,240.673z M237.789,241.633l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.201-1.847c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.847
            C237.429,241.723,237.647,241.715,237.789,241.633z M224.804,259.688l9.778-5.645c0.142-0.082,0.155-0.208,0.028-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-9.778,5.645c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.847
            C224.444,259.777,224.662,259.77,224.804,259.688z M252.364,243.512c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L252.364,243.512z M248.279,240.856l3.345-1.931c0.142-0.082,0.155-0.208,0.028-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C247.919,240.946,248.137,240.938,248.279,240.856z M219.915,262.511l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.207-0.028,0.28l3.2,1.848
            C219.555,262.6,219.773,262.593,219.915,262.511z M241.557,249.751c0.127,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L241.557,249.751z M195.471,276.623l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C195.111,276.713,195.329,276.705,195.471,276.623z M200.36,273.801l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.343-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.847
            C200,273.89,200.218,273.883,200.36,273.801z M190.582,279.446l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848
            c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.281l3.2,1.848
            C190.223,279.535,190.44,279.528,190.582,279.446z M210.137,268.156l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.207-0.029,0.28l3.2,1.848
            C209.778,268.245,209.995,268.238,210.137,268.156z M205.249,270.978l3.345-1.931c0.142-0.082,0.155-0.207,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.028,0.281l3.2,1.848
            C204.889,271.068,205.107,271.06,205.249,270.978z M215.026,265.333l3.345-1.931c0.142-0.082,0.155-0.208,0.029-0.281
            l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C214.667,265.423,214.884,265.415,215.026,265.333z M241.704,226.068c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.207,0.029-0.28l-0.852-0.492c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.028,0.28L241.704,226.068z M217.406,241.452c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.207,0.029-0.28l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L217.406,241.452z M227.183,235.807c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L227.183,235.807z M211.436,244.899c0.126,0.073,0.344,0.066,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.072-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L211.436,244.899z M222.294,238.63c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.932
            c0.142-0.082,0.155-0.208,0.028-0.28l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L222.294,238.63z M201.658,250.544c0.126,0.072,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.847c-0.126-0.073-0.344-0.066-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.028,0.281L201.658,250.544z M206.547,247.721c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.028-0.281l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L206.547,247.721z M231.927,231.713c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.207,0.029-0.28l-0.852-0.492c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.932
            c-0.142,0.082-0.155,0.207-0.029,0.28L231.927,231.713z M246.594,223.245c0.126,0.073,0.344,0.065,0.486-0.017l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-0.852-0.492c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L246.594,223.245z M253.316,227.126c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.281l-3.2-1.848c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.28L253.316,227.126z M262.628,237.85l3.345-1.932c0.142-0.082,0.155-0.207,0.029-0.28
            l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.017l-3.345,1.931c-0.142,0.082-0.155,0.208-0.029,0.28l3.2,1.848
            C262.268,237.94,262.486,237.932,262.628,237.85z M236.816,228.89c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.28l-0.852-0.492c-0.126-0.073-0.344-0.066-0.486,0.016l-3.345,1.931
            c-0.142,0.082-0.155,0.208-0.029,0.281L236.816,228.89z M196.769,253.366c0.126,0.073,0.344,0.066,0.486-0.016l3.345-1.931
            c0.142-0.082,0.155-0.208,0.029-0.28l-3.2-1.848c-0.126-0.073-0.344-0.065-0.486,0.016l-3.345,1.932
            c-0.142,0.082-0.155,0.207-0.028,0.28L196.769,253.366z"
                          />
                        </g>
                        <g id="Tuch_Pad_00000002343466117857148470000004871769881598076824_">
                          <polygon
                            fill="#1173b9ee"
                            points="210.772,281.187 211.499,281.606 230.817,292.758 265.173,272.922 265.888,272.515 
            245.842,260.944 				"
                          />
                          <polygon
                            fill="#1173b9ee"
                            points="264.732,273.177 245.842,262.28 211.94,281.861 230.817,292.758 				"
                          />
                          <polygon
                            fill="#E0E0E0"
                            points="264.732,273.177 245.842,262.28 211.94,281.861 230.817,292.758 				"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          fill="#1173b9ee"
                          d="M115.436,273.993c-1.396-0.643-1.774-1.752-1.908-3.706l-6.247-91.397
          c-0.133-1.953,1.184-4.36,2.942-5.375l116.256-67.12c1.758-1.015,3.047-1.566,4.671-0.457c1.699,1.161,1.659,1.724,1.792,3.677
          l6.247,91.397c0.133,1.953-1.184,4.36-2.942,5.375l-116.256,67.12C118.231,274.523,117.235,274.822,115.436,273.993z"
                        />
                        <path
                          fill="opacity:0.7#FFFFFF"
                          d="M115.436,273.993c-1.396-0.643-1.774-1.752-1.908-3.706l-6.247-91.397
          c-0.133-1.953,1.184-4.36,2.942-5.375l116.256-67.12c1.758-1.015,3.047-1.566,4.671-0.457c1.699,1.161,1.659,1.724,1.792,3.677
          l6.247,91.397c0.133,1.953-1.184,4.36-2.942,5.375l-116.256,67.12C118.231,274.523,117.235,274.822,115.436,273.993z"
                        />
                        <path
                          fill="#1173b9ee"
                          d="M232.943,109.614c-0.133-1.949-1.668-2.709-3.426-1.699l-116.258,67.124
          c-0.879,0.508-1.651,1.366-2.178,2.339l-3.034-1.525l-0.006,0c0.533-0.974,1.305-1.831,2.184-2.339l116.252-67.118
          c1.758-1.016,3.054-1.577,4.67-0.457C232.854,107.121,232.809,107.664,232.943,109.614z"
                        />
                        <path
                          fill="#E0E0E0"
                          d="M232.943,109.614c-0.133-1.949-1.668-2.709-3.426-1.699l-116.258,67.124
          c-0.879,0.508-1.651,1.366-2.178,2.339l-3.034-1.525l-0.006,0c0.533-0.974,1.305-1.831,2.184-2.339l116.252-67.118
          c1.758-1.016,3.054-1.577,4.67-0.457C232.854,107.121,232.809,107.664,232.943,109.614z"
                        />
                        <path
                          fill="#1173b9ee"
                          d="M119.753,273.643c-1.601,0.945-2.614,1.062-4.317,0.347c-1.302-0.546-1.773-1.749-1.906-3.702
          l-6.247-91.401c-0.067-0.976,0.226-2.066,0.764-3.034l3.033,1.514l0,0.007c-0.53,0.974-0.83,2.058-0.763,3.034l6.247,91.401
          C116.687,273.621,118.251,274.53,119.753,273.643z"
                        />
                        <path
                          fill="#1173b9ee"
                          d="M115.279,178.534l111.879-64.576c1.055-0.609,1.975-0.153,2.055,1.02l5.829,85.264
          c0.08,1.172-0.711,2.616-1.766,3.225l-111.879,64.575c-1.055,0.609-1.975,0.152-2.055-1.019l-5.829-85.263
          C113.433,180.587,114.224,179.143,115.279,178.534z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M115.279,178.534c-1.055,0.609-1.846,2.053-1.766,3.225l5.732,83.842l110.6-63.836
          c1.055-0.609,1.846-2.053,1.766-3.225l-5.732-83.844L115.279,178.534z"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Window">
                    <g id="Window_00000019639418001063179140000002693440358923899321_">
                      <g id="Window_00000096761615323487672690000006916590093751413908_">
                        <path
                          fill="#455A64"
                          d="M239.263,122.503c-0.012-0.069-0.024-0.131-0.051-0.192c0.007-0.014-0.002-0.028-0.01-0.041
          c-0.012-0.069-0.039-0.131-0.065-0.185c-0.036-0.096-0.087-0.185-0.152-0.267c-0.018-0.041-0.05-0.075-0.082-0.109
          c-0.024-0.027-0.041-0.054-0.072-0.075c-0.049-0.054-0.096-0.095-0.158-0.135c0,0-0.008-0.007-0.016-0.014
          c-0.063-0.04-0.132-0.073-0.201-0.099c-0.422-0.171-0.947-0.111-1.515,0.212l-110.084,63.338
          c-1.206,0.696-2.115,2.355-1.955,4.698l5.403,79.222c-0.068-0.998-0.066-0.992-0.065-0.986l0.031,0.46
          c0.039,0.571,0.414,1.02,0.904,1.248c0.034,0.019,0.067,0.038,0.101,0.058c0.039,0.02,0.077,0.04,0.124,0.06
          c0.061,0.026,0.13,0.046,0.198,0.058c0.098,0.019,0.196,0.031,0.293,0.029c0.231,0.002,0.487-0.073,0.739-0.216l0.057-0.033
          c0.002-0.001,0.003-0.001,0.005-0.002l2.086-1.204l107.933-62.133c1.206-0.696,2.115-2.348,2.023-3.694l-5.438-79.733
          C239.289,122.676,239.276,122.586,239.263,122.503z"
                        />
                        <g id="XMLID_00000018935308525597496640000011185785553880120988_">
                          <g id="XMLID_00000040565057432052520460000008156313271963885245_">
                            <path
                              fill="#1173b9ee"
                              d="M238.455,121.386c-0.422-0.171-0.948-0.111-1.515,0.212l-110.084,63.338
              c-1.206,0.696-2.115,2.355-2.023,3.694l0.278,4.081l-3.006-1.514l-0.275-4.033c-0.091-1.34,0.811-2.991,2.017-3.687
              l110.091-63.338c0.624-0.366,1.205-0.385,1.638-0.159C236.002,120.2,237.955,121.161,238.455,121.386z"
                            />
                          </g>
                          <path
                            id="XMLID_00000115482488969018290330000002945145584522857350_"
                            fill="#1173b9ee"
                            d="M239.289,122.751
            c-0.1-1.329-1.147-1.845-2.35-1.151l-110.084,63.337c-1.208,0.697-2.113,2.35-2.021,3.692l0.281,4.085l114.454-65.855
            L239.289,122.751z"
                          />
                          <g
                            id="XMLID_00000181049215946397770950000007391470692231983011_"
                            fill="opacity:0.2"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M236.939,121.6l-110.081,63.337c-0.598,0.35-1.13,0.932-1.492,1.595l-2.989-1.488
              c0.363-0.657,0.882-1.232,1.474-1.57l110.086-63.337c0.626-0.365,1.204-0.382,1.641-0.159c0.423,0.223,2.375,1.176,2.869,1.404
              C238.035,121.212,237.503,121.277,236.939,121.6z"
                            />
                          </g>
                          <path
                            id="XMLID_00000126298821317021596570000016071108032756393613_"
                            fill="#E0E0E05"
                            d="M122.103,191.207l-0.274-4.043
            c-0.047-0.682,0.172-1.442,0.547-2.119l2.996,1.481c-0.376,0.671-0.582,1.424-0.535,2.105l0.279,4.084L122.103,191.207z"
                          />
                        </g>
                        <g id="XMLID_00000007428815557393254490000004708913557100271286_">
                          <path
                            id="XMLID_00000023242049882354703490000017317665778773284501_"
                            fill="#FFFFFF"
                            d="M230.638,127.261
            c-0.459,0.265-0.793,1.031-0.747,1.711c0.046,0.68,0.456,1.016,0.915,0.751c0.459-0.265,0.793-1.031,0.747-1.711
            C231.507,127.333,231.097,126.996,230.638,127.261z"
                          />
                          <path
                            id="XMLID_00000046329184344155427580000012066640285911377026_"
                            fill="#FFFFFF"
                            d="M233.63,125.531
            c-0.459,0.265-0.793,1.031-0.747,1.711c0.046,0.68,0.456,1.016,0.915,0.751c0.459-0.265,0.793-1.031,0.747-1.71
            C234.498,125.602,234.089,125.266,233.63,125.531z"
                          />
                          <path
                            id="XMLID_00000145043000549213566820000010361548143381789615_"
                            fill="#FFFFFF"
                            d="M236.621,123.801
            c-0.459,0.265-0.793,1.031-0.747,1.711c0.046,0.68,0.456,1.016,0.915,0.751c0.459-0.265,0.793-1.031,0.747-1.711
            C237.49,123.872,237.08,123.536,236.621,123.801z"
                          />
                        </g>
                        <path
                          fill="#263238"
                          d="M131.172,269.586l-0.122-0.059l-2.48-1.233c-0.671-0.328-1.147-0.926-1.297-1.606
          c-0.022-0.102-0.036-0.204-0.043-0.307l-5.128-75.183l3.009,1.516l5.157,75.613c0.036,0.526,0.352,0.949,0.788,1.18
          c0.023,0.02,0.054,0.033,0.077,0.046c0.008,0.007,0.008,0.013,0.016,0.013L131.172,269.586z"
                        />
                      </g>
                      <g
                        id="Code_00000044864981441332724150000002255566491985696954_"
                        fill="opacity:0.5"
                      >
                        <g>
                          <g fill="opacity:0.6">
                            <path
                              fill="#FFFFFF"
                              d="M134.508,235.912l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.721c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C133.985,236.494,134.209,236.085,134.508,235.912z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M134.794,240.106l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C134.271,240.688,134.495,240.279,134.794,240.106z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M135.08,244.301l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C134.557,244.882,134.781,244.473,135.08,244.301z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M135.366,248.495l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C134.843,249.077,135.067,248.667,135.366,248.495z"
                            />
                          </g>
                          <g fill="opacity:0.6">
                            <path
                              fill="#FFFFFF"
                              d="M133.089,215.107l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C132.566,215.688,132.79,215.279,133.089,215.107z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M133.375,219.301l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C132.852,219.883,133.076,219.473,133.375,219.301z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M133.661,223.495l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C133.138,224.077,133.362,223.668,133.661,223.495z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M133.947,227.689l2.98-1.721c0.299-0.172,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C133.424,228.271,133.648,227.862,133.947,227.689z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M135.927,256.717l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C135.404,257.299,135.628,256.89,135.927,256.717z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M136.213,260.912l2.98-1.721c0.299-0.172,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C135.69,261.494,135.914,261.085,136.213,260.912z"
                            />
                          </g>
                          <g fill="opacity:0.6">
                            <path
                              fill="#FFFFFF"
                              d="M131.67,194.301l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C131.147,194.883,131.371,194.474,131.67,194.301z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M131.956,198.495l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C131.433,199.077,131.657,198.668,131.956,198.495z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M132.242,202.69l2.98-1.721c0.299-0.173,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.72c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C131.719,203.271,131.943,202.862,132.242,202.69z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M132.528,206.884l2.98-1.721c0.299-0.172,0.56-0.043,0.582,0.289l0.072,1.054
              c0.023,0.332-0.201,0.741-0.5,0.914l-2.98,1.721c-0.299,0.173-0.56,0.043-0.582-0.289l-0.072-1.054
              C132.005,207.466,132.229,207.056,132.528,206.884z"
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            fill="#37474F"
                            d="M235.38,170.348l-21.601,12.471c-0.801,0.463-1.402,1.56-1.341,2.45l2.135,31.301
            c0.061,0.89,0.76,1.237,1.561,0.774l21.601-12.472c0.801-0.463,1.402-1.559,1.341-2.45l-2.135-31.301
            C236.88,170.232,236.182,169.885,235.38,170.348z"
                          />
                          <g>
                            <g>
                              <path
                                id="XMLID_00000018209117542151593360000006791927867985367476_"
                                fill="#1173b9ee"
                                d="M234.921,194.18l-1.988,1.15
                c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.766,0.682-1.189
                C235.679,194.098,235.327,193.945,234.921,194.18z"
                              />
                              <path
                                id="XMLID_00000141433676444786195050000002271322944334060984_"
                                fill="opacity:0.6#FFFFFF"
                                d="M234.921,194.18
                l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15
                c0.406-0.234,0.711-0.766,0.682-1.189C235.679,194.098,235.327,193.945,234.921,194.18z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000152953384572984497730000006953037750640391854_"
                                fill="#1173b9ee"
                                d="M233.581,174.528l-1.988,1.15
                c-0.405,0.234-0.711,0.767-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.766,0.682-1.189
                C234.339,174.446,233.987,174.294,233.581,174.528z"
                              />
                              <path
                                id="XMLID_00000103251188663873103640000005209821584502627757_"
                                fill="opacity:0.6#FFFFFF"
                                d="M233.581,174.528
                l-1.988,1.15c-0.405,0.234-0.711,0.767-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15
                c0.406-0.234,0.711-0.766,0.682-1.189C234.339,174.446,233.987,174.294,233.581,174.528z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M231.054,180.063l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C231.811,179.982,231.459,179.829,231.054,180.063z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M231.054,180.063l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C231.811,179.982,231.459,179.829,231.054,180.063z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M231.321,183.983l-1.988,1.15c-0.405,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C232.079,183.902,231.727,183.749,231.321,183.983z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M231.321,183.983l-1.988,1.15c-0.405,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C232.079,183.902,231.727,183.749,231.321,183.983z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M234.385,186.316l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.767,0.682-1.189
                C235.143,186.235,234.791,186.082,234.385,186.316z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M234.385,186.316l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.767,0.682-1.189
                C235.143,186.235,234.791,186.082,234.385,186.316z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M231.858,191.855l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C232.616,191.774,232.264,191.621,231.858,191.855z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M231.858,191.855l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C232.616,191.774,232.264,191.621,231.858,191.855z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                id="XMLID_00000112590917277440783350000013275606619691568819_"
                                fill="#1173b9ee"
                                d="M228.136,177.673
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.405-0.234,0.711-0.766,0.682-1.189C228.894,177.592,228.542,177.439,228.136,177.673z"
                              />
                              <path
                                id="XMLID_00000179635495302132451450000006830448804906758836_"
                                fill="#E0E0E0"
                                d="M228.136,177.673
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.405-0.234,0.711-0.766,0.682-1.189C228.894,177.592,228.542,177.439,228.136,177.673z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000071559209636339224090000003295901507786102188_"
                                fill="#1173b9ee"
                                d="M229.476,197.325
                l-12.144,7.012c-0.406,0.234-0.711,0.767-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C230.234,197.244,229.882,197.091,229.476,197.325z"
                              />
                              <path
                                id="XMLID_00000039125278610629506730000005904239114231727012_"
                                fill="#E0E0E0"
                                d="M229.476,197.325
                l-12.144,7.012c-0.406,0.234-0.711,0.767-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C230.234,197.244,229.882,197.091,229.476,197.325z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M225.609,183.208l-9.349,5.408c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C226.366,183.126,226.014,182.974,225.609,183.208z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M225.609,183.208l-9.349,5.408c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C226.366,183.126,226.014,182.974,225.609,183.208z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M225.877,187.138l-9.349,5.408c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C226.634,187.057,226.282,186.904,225.877,187.138z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M225.877,187.138l-9.349,5.408c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C226.634,187.057,226.282,186.904,225.877,187.138z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M228.94,189.464l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l12.144-7.012c0.406-0.234,0.711-0.767,0.682-1.189
                C229.698,189.383,229.346,189.23,228.94,189.464z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M228.94,189.464l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l12.144-7.012c0.406-0.234,0.711-0.767,0.682-1.189
                C229.698,189.383,229.346,189.23,228.94,189.464z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M226.413,195.001l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.406-0.234,0.711-0.766,0.682-1.189
                C227.171,194.919,226.818,194.766,226.413,195.001z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M226.413,195.001l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.406-0.234,0.711-0.766,0.682-1.189
                C227.171,194.919,226.818,194.766,226.413,195.001z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000117647700890273557930000000205982929646042294_"
                                fill="#1173b9ee"
                                d="M235.46,202.083l-1.988,1.15
                c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C236.218,202.002,235.866,201.849,235.46,202.083z"
                              />
                              <path
                                id="XMLID_00000015320911123782728990000013804358853718539917_"
                                fill="opacity:0.6#FFFFFF"
                                d="M235.46,202.083
                l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15
                c0.405-0.234,0.711-0.766,0.682-1.189C236.218,202.002,235.866,201.849,235.46,202.083z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M232.397,199.759l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C233.155,199.678,232.803,199.525,232.397,199.759z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M232.397,199.759l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C233.155,199.678,232.803,199.525,232.397,199.759z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000116206416525091786170000009290137752208696997_"
                                fill="#1173b9ee"
                                d="M230.015,205.229
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C230.773,205.148,230.421,204.995,230.015,205.229z"
                              />
                              <path
                                id="XMLID_00000095320798097649658400000017416797382928801431_"
                                fill="#E0E0E0"
                                d="M230.015,205.229
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C230.773,205.148,230.421,204.995,230.015,205.229z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M226.952,202.904l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.405-0.234,0.711-0.766,0.682-1.189
                C227.71,202.823,227.357,202.67,226.952,202.904z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M226.952,202.904l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.405-0.234,0.711-0.766,0.682-1.189
                C227.71,202.823,227.357,202.67,226.952,202.904z"
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <path
                            fill="#37474F"
                            d="M233.184,138.153l-21.601,12.471c-0.801,0.463-1.402,1.56-1.341,2.45l1.636,23.997
            c0.061,0.89,0.76,1.237,1.561,0.774l21.601-12.472c0.801-0.463,1.402-1.56,1.341-2.45l-1.637-23.997
            C234.685,138.037,233.986,137.69,233.184,138.153z"
                          />
                          <g>
                            <g>
                              <path
                                id="XMLID_00000023260910945562842280000007052188331964548275_"
                                fill="#1173b9ee"
                                d="M232.726,161.984l-1.988,1.15
                c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.766,0.682-1.189
                C233.483,161.903,233.131,161.75,232.726,161.984z"
                              />
                              <path
                                id="XMLID_00000079443743760800209210000011269152791424138913_"
                                fill="opacity:0.6#FFFFFF"
                                d="M232.726,161.984
                l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15
                c0.406-0.234,0.711-0.766,0.682-1.189C233.483,161.903,233.131,161.75,232.726,161.984z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000045578580697286036880000000073191383227017106_"
                                fill="#1173b9ee"
                                d="M231.385,142.333l-1.988,1.15
                c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C232.143,142.251,231.791,142.098,231.385,142.333z"
                              />
                              <path
                                id="XMLID_00000034081737020815298510000006495524212636005764_"
                                fill="opacity:0.6#FFFFFF"
                                d="M231.385,142.333
                l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15
                c0.405-0.234,0.711-0.766,0.682-1.189C232.143,142.251,231.791,142.098,231.385,142.333z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M228.858,147.868l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C229.616,147.787,229.264,147.634,228.858,147.868z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M228.858,147.868l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C229.616,147.787,229.264,147.634,228.858,147.868z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M229.126,151.788l-1.988,1.15c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C229.883,151.707,229.531,151.554,229.126,151.788z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M229.126,151.788l-1.988,1.15c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.766,0.682-1.189
                C229.883,151.707,229.531,151.554,229.126,151.788z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M232.189,154.121l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.767,0.682-1.189
                C232.947,154.04,232.595,153.887,232.189,154.121z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M232.189,154.121l-1.988,1.15c-0.405,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.406-0.234,0.711-0.767,0.682-1.189
                C232.947,154.04,232.595,153.887,232.189,154.121z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M229.662,159.66l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.767,0.682-1.189
                C230.42,159.579,230.068,159.426,229.662,159.66z"
                              />
                              <path
                                fill="opacity:0.6#FFFFFF"
                                d="M229.662,159.66l-1.988,1.15c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l1.988-1.15c0.405-0.234,0.711-0.767,0.682-1.189
                C230.42,159.579,230.068,159.426,229.662,159.66z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                id="XMLID_00000049942371358412967850000002538504558892334269_"
                                fill="#1173b9ee"
                                d="M225.94,145.478
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C226.698,145.397,226.346,145.244,225.94,145.478z"
                              />
                              <path
                                id="XMLID_00000022545925686696781270000008156134249444536761_"
                                fill="#E0E0E0"
                                d="M225.94,145.478
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C226.698,145.397,226.346,145.244,225.94,145.478z"
                              />
                            </g>
                            <g>
                              <path
                                id="XMLID_00000004531938708678599600000005017805876622484159_"
                                fill="#1173b9ee"
                                d="M227.281,165.13
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C228.038,165.049,227.686,164.896,227.281,165.13z"
                              />
                              <path
                                id="XMLID_00000008141046695670199380000004716850678272688543_"
                                fill="#E0E0E0"
                                d="M227.281,165.13
                l-12.144,7.012c-0.406,0.234-0.711,0.766-0.682,1.189c0.029,0.423,0.381,0.575,0.786,0.341l12.144-7.012
                c0.406-0.234,0.711-0.766,0.682-1.189C228.038,165.049,227.686,164.896,227.281,165.13z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M223.413,151.013l-9.349,5.408c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.408c0.405-0.234,0.711-0.766,0.682-1.189
                C224.171,150.931,223.818,150.779,223.413,151.013z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M223.413,151.013l-9.349,5.408c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.408c0.405-0.234,0.711-0.766,0.682-1.189
                C224.171,150.931,223.818,150.779,223.413,151.013z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M223.681,154.943l-9.349,5.408c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C224.439,154.862,224.087,154.709,223.681,154.943z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M223.681,154.943l-9.349,5.408c-0.406,0.234-0.711,0.767-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.348-5.408c0.406-0.234,0.711-0.766,0.682-1.189
                C224.439,154.862,224.087,154.709,223.681,154.943z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M226.745,157.269l-12.144,7.012c-0.405,0.234-0.711,0.767-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l12.144-7.012c0.405-0.234,0.711-0.767,0.682-1.189
                C227.502,157.188,227.15,157.035,226.745,157.269z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M226.745,157.269l-12.144,7.012c-0.405,0.234-0.711,0.767-0.682,1.189
                c0.029,0.422,0.381,0.575,0.786,0.341l12.144-7.012c0.405-0.234,0.711-0.767,0.682-1.189
                C227.502,157.188,227.15,157.035,226.745,157.269z"
                              />
                            </g>
                            <g>
                              <path
                                fill="#1173b9ee"
                                d="M224.217,162.805l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.406-0.234,0.711-0.766,0.682-1.189
                C224.975,162.724,224.623,162.571,224.217,162.805z"
                              />
                              <path
                                fill="#E0E0E0"
                                d="M224.217,162.805l-9.349,5.406c-0.406,0.234-0.711,0.766-0.682,1.189
                c0.029,0.423,0.381,0.575,0.786,0.341l9.349-5.406c0.406-0.234,0.711-0.766,0.682-1.189
                C224.975,162.724,224.623,162.571,224.217,162.805z"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <path
                          id="XMLID_00000036937509220404152050000017373475609233944194_"
                          fill="#1173b9ee"
                          d="M139.648,190.319l21.629-12.488
          c0.302-0.175,0.565-0.061,0.587,0.254c0.022,0.315-0.206,0.713-0.509,0.887l-21.629,12.488c-0.303,0.175-0.565,0.061-0.587-0.255
          C139.118,190.891,139.346,190.494,139.648,190.319z"
                        />
                        <path
                          id="XMLID_00000034061910439953484330000015588728641121563792_"
                          fill="#1173b9ee"
                          d="M140.567,204.118l63.661-36.7
          c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-63.661,36.7c-0.302,0.175-0.565,0.061-0.587-0.255
          C140.037,204.689,140.265,204.292,140.567,204.118z"
                        />
                        <path
                          id="XMLID_00000020373188179073771580000004151518926236942514_"
                          fill="#1173b9ee"
                          d="M163.4,176.605l40.222-23.145
          c0.302-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-40.222,23.145c-0.303,0.175-0.565,0.061-0.587-0.255
          C162.87,177.177,163.098,176.779,163.4,176.605z"
                        />
                        <g id="XMLID_00000145768878920199538390000007809366237253206407_">
                          <path
                            id="XMLID_00000172417604266438597290000004368940254797355187_"
                            fill="#1173b9ee"
                            d="M139.872,193.598l10.951-6.329
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-10.951,6.329c-0.303,0.175-0.565,0.061-0.587-0.255
            C139.342,194.17,139.569,193.773,139.872,193.598z"
                          />
                          <path
                            id="XMLID_00000034777594424088022160000002938312028678442912_"
                            fill="opacity:0.6#FFFFFF"
                            d="M139.872,193.598
            l10.951-6.329c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-10.951,6.329
            c-0.303,0.175-0.565,0.061-0.587-0.255C139.342,194.17,139.569,193.773,139.872,193.598z"
                          />
                        </g>
                        <g id="XMLID_00000172433127046533896060000013025621756733398974_">
                          <path
                            id="XMLID_00000160179695570425949430000001967799662197101234_"
                            fill="#1173b9ee"
                            d="M140.094,196.859l6.578-3.786
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-6.578,3.786c-0.303,0.175-0.565,0.061-0.587-0.255
            C139.564,197.431,139.792,197.033,140.094,196.859z"
                          />
                          <path
                            id="XMLID_00000009556476930666979150000001705274408496343214_"
                            fill="opacity:0.6#FFFFFF"
                            d="M140.094,196.859
            l6.578-3.786c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-6.578,3.786
            c-0.303,0.175-0.565,0.061-0.587-0.255C139.564,197.431,139.792,197.033,140.094,196.859z"
                          />
                        </g>
                        <g id="XMLID_00000116221426477049165080000000292613641306651020_">
                          <path
                            id="XMLID_00000035512227816413577990000012374311564905893807_"
                            fill="#1173b9ee"
                            d="M152.946,186.043l38.11-21.952
            c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-38.109,21.952
            c-0.303,0.175-0.565,0.061-0.587-0.255C152.415,186.615,152.643,186.218,152.946,186.043z"
                          />
                          <path
                            id="XMLID_00000017492798471703900810000016604553634201173121_"
                            fill="opacity:0.6#FFFFFF"
                            d="M152.946,186.043
            l38.11-21.952c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-38.109,21.952
            c-0.303,0.175-0.565,0.061-0.587-0.255C152.415,186.615,152.643,186.218,152.946,186.043z"
                          />
                        </g>
                        <g id="XMLID_00000174587020864828520720000004538804190342940851_">
                          <path
                            id="XMLID_00000176023799042492934520000003935366433158029233_"
                            fill="#FFA8A7"
                            d="M146.875,211.598l58.264-33.665
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.264,33.665
            c-0.303,0.175-0.565,0.061-0.587-0.255C146.344,212.171,146.572,211.773,146.875,211.598z"
                          />
                        </g>
                        <g id="XMLID_00000056401901976862743210000011351984269308272266_">
                          <path
                            id="XMLID_00000152949758347171760820000009638324432857484935_"
                            fill="#FFA8A7"
                            d="M146.652,208.34l58.263-33.682
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.263,33.683
            c-0.302,0.175-0.565,0.061-0.587-0.255C146.122,208.912,146.35,208.515,146.652,208.34z"
                          />
                        </g>
                        <g id="XMLID_00000159433963609360174390000017561562100716511918_">
                          <path
                            id="XMLID_00000127018434370945616800000011767990912621369527_"
                            fill="#1173b9ee"
                            d="M148.431,192.069l10.835-6.285
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-10.835,6.286c-0.303,0.174-0.565,0.061-0.587-0.255
            C147.901,192.641,148.128,192.243,148.431,192.069z"
                          />
                          <path
                            id="XMLID_00000176023412408188516280000018417364366331448495_"
                            fill="opacity:0.6#FFFFFF"
                            d="M148.431,192.069
            l10.835-6.285c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-10.835,6.286
            c-0.303,0.174-0.565,0.061-0.587-0.255C147.901,192.641,148.128,192.243,148.431,192.069z"
                          />
                        </g>
                        <g id="XMLID_00000036932189096556570020000017690727466245291174_">
                          <path
                            id="XMLID_00000156581596045093898630000011974003085096852136_"
                            fill="#1173b9ee"
                            d="M161.389,184.557l42.364-24.267
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-42.364,24.267
            c-0.302,0.175-0.565,0.061-0.587-0.255C160.859,185.129,161.087,184.732,161.389,184.557z"
                          />
                          <path
                            id="XMLID_00000008830965256567489120000009275654371571176354_"
                            fill="opacity:0.6#FFFFFF"
                            d="M161.389,184.557
            l42.364-24.267c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-42.364,24.267
            c-0.302,0.175-0.565,0.061-0.587-0.255C160.859,185.129,161.087,184.732,161.389,184.557z"
                          />
                        </g>
                        <g id="XMLID_00000028307292900531039630000014808375456604872578_">
                          <path
                            id="XMLID_00000072248457892815802050000016921866546672236165_"
                            fill="#1173b9ee"
                            d="M140.307,200.303l19.198-11.02
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-19.198,11.02c-0.302,0.175-0.565,0.061-0.587-0.255
            C139.777,200.875,140.005,200.478,140.307,200.303z"
                          />
                          <path
                            id="XMLID_00000121254243082190844350000008979867527147357339_"
                            fill="opacity:0.6#FFFFFF"
                            d="M140.307,200.303
            l19.198-11.02c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-19.198,11.02
            c-0.302,0.175-0.565,0.061-0.587-0.255C139.777,200.875,140.005,200.478,140.307,200.303z"
                          />
                        </g>
                        <g id="XMLID_00000139294406808664974030000004623910363409886885_">
                          <path
                            id="XMLID_00000119806664839602369690000016284036855690790555_"
                            fill="#1173b9ee"
                            d="M161.628,188.057l42.364-24.267
            c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-42.364,24.267
            c-0.303,0.175-0.565,0.061-0.587-0.255C161.098,188.629,161.325,188.232,161.628,188.057z"
                          />
                          <path
                            id="XMLID_00000127042446136662944900000017692907694316091548_"
                            fill="opacity:0.6#FFFFFF"
                            d="M161.628,188.057
            l42.364-24.267c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-42.364,24.267
            c-0.303,0.175-0.565,0.061-0.587-0.255C161.098,188.629,161.325,188.232,161.628,188.057z"
                          />
                        </g>
                        <path
                          id="XMLID_00000075163545295454383630000005948479033177950394_"
                          fill="#F28F8F"
                          d="M147.1,214.9l58.27-33.586
          c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.27,33.586c-0.303,0.175-0.565,0.061-0.587-0.255
          C146.569,215.472,146.797,215.074,147.1,214.9z"
                        />
                        <path
                          id="XMLID_00000129893870665013094200000015046504924653410181_"
                          fill="#F28F8F"
                          d="M147.323,218.167l58.27-33.586
          c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.27,33.586c-0.302,0.175-0.565,0.061-0.587-0.255
          C146.792,218.739,147.02,218.342,147.323,218.167z"
                        />
                        <path
                          id="XMLID_00000089573281089419226660000012920121366548418693_"
                          fill="#F28F8F"
                          d="M147.546,221.434l58.27-33.586
          c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.27,33.586c-0.302,0.175-0.565,0.061-0.587-0.255
          C147.015,222.006,147.243,221.609,147.546,221.434z"
                        />
                        <path
                          id="XMLID_00000003098220776210609890000013185724521129837478_"
                          fill="#1173b9ee"
                          d="M147.841,225.771l58.27-33.578
          c0.302-0.175,0.565-0.061,0.587,0.255s-0.206,0.712-0.509,0.887l-58.27,33.578c-0.302,0.175-0.565,0.061-0.587-0.255
          C147.311,226.343,147.539,225.946,147.841,225.771z"
                        />
                        <g id="XMLID_00000143610920622801810200000014255819930086386083_">
                          <path
                            id="XMLID_00000019657748465263587780000015726094625475477419_"
                            fill="#1173b9ee"
                            d="M142.249,228.956l2.536-1.457
            c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.303,0.175-0.565,0.061-0.587-0.255
            C141.718,229.528,141.946,229.131,142.249,228.956z"
                          />
                          <path
                            id="XMLID_00000052807709107449776820000015624734910810528659_"
                            fill="opacity:0.6#FFFFFF"
                            d="M142.249,228.956
            l2.536-1.457c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
            c-0.303,0.175-0.565,0.061-0.587-0.255C141.718,229.528,141.946,229.131,142.249,228.956z"
                          />
                          <g id="XMLID_00000101074276728313329800000017014340618437321862_">
                            <path
                              id="XMLID_00000015338783035499890970000008797596388700836005_"
                              fill="#1173b9ee"
                              d="M141.031,211.105l2.536-1.457
              c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.713-0.509,0.887l-2.536,1.457c-0.302,0.175-0.565,0.061-0.587-0.255
              S140.729,211.279,141.031,211.105z"
                            />
                            <path
                              id="XMLID_00000048478016778540489780000014397115307964176020_"
                              fill="opacity:0.6#FFFFFF"
                              d="M141.031,211.105
              l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.713-0.509,0.887l-2.536,1.457
              c-0.302,0.175-0.565,0.061-0.587-0.255S140.729,211.279,141.031,211.105z"
                            />
                          </g>
                          <g id="XMLID_00000110429133394999637360000010676990093189216952_">
                            <path
                              id="XMLID_00000016069799534824955730000004677564472925333690_"
                              fill="#1173b9ee"
                              d="M141.51,218.13l2.536-1.457
              c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.303,0.175-0.565,0.061-0.587-0.255
              C140.98,218.702,141.208,218.305,141.51,218.13z"
                            />
                            <path
                              id="XMLID_00000049904357066751297020000007156096361052036286_"
                              fill="opacity:0.6#FFFFFF"
                              d="M141.51,218.13
              l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
              c-0.303,0.175-0.565,0.061-0.587-0.255C140.98,218.702,141.208,218.305,141.51,218.13z"
                            />
                          </g>
                          <g id="XMLID_00000158007979113604625550000006253249300104588682_">
                            <path
                              id="XMLID_00000035497894271838804660000005575188600210266796_"
                              fill="#1173b9ee"
                              d="M141.733,221.398l2.536-1.457
              c0.303-0.175,0.565-0.061,0.587,0.255c0.022,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.302,0.175-0.565,0.061-0.587-0.255
              C141.203,221.969,141.431,221.572,141.733,221.398z"
                            />
                            <path
                              id="XMLID_00000150808142047269927730000002992056828316156816_"
                              fill="opacity:0.6#FFFFFF"
                              d="M141.733,221.398
              l2.536-1.457c0.303-0.175,0.565-0.061,0.587,0.255c0.022,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
              c-0.302,0.175-0.565,0.061-0.587-0.255C141.203,221.969,141.431,221.572,141.733,221.398z"
                            />
                          </g>
                          <g id="XMLID_00000002360078310766672450000018206662893035544719_">
                            <path
                              id="XMLID_00000142147196458557470730000017291994581829816501_"
                              fill="#1173b9ee"
                              d="M141.956,224.665l2.536-1.457
              c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.302,0.175-0.565,0.061-0.587-0.255
              C141.426,225.237,141.653,224.839,141.956,224.665z"
                            />
                            <path
                              id="XMLID_00000183951129641149520170000004824852552426064035_"
                              fill="opacity:0.6#FFFFFF"
                              d="M141.956,224.665
              l2.536-1.457c0.303-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
              c-0.302,0.175-0.565,0.061-0.587-0.255C141.426,225.237,141.653,224.839,141.956,224.665z"
                            />
                          </g>
                        </g>
                        <g id="XMLID_00000023280436708142019540000007343734262158281621_">
                          <path
                            id="XMLID_00000171679928534908502190000002695658134510323589_"
                            fill="#1173b9ee"
                            d="M142.45,231.91l2.536-1.457
            c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.303,0.175-0.565,0.061-0.587-0.255
            C141.92,232.482,142.148,232.085,142.45,231.91z"
                          />
                          <path
                            id="XMLID_00000048468221454998973440000004390036356362621883_"
                            fill="opacity:0.6#FFFFFF"
                            d="M142.45,231.91
            l2.536-1.457c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
            c-0.303,0.175-0.565,0.061-0.587-0.255C141.92,232.482,142.148,232.085,142.45,231.91z"
                          />
                        </g>
                        <g id="XMLID_00000150103563259267655800000010497646383501622410_">
                          <path
                            id="XMLID_00000093143262299971205450000013029313740582919356_"
                            fill="#FFA8A7"
                            d="M148.044,228.746l58.263-33.682
            c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.263,33.682
            c-0.302,0.175-0.565,0.061-0.587-0.255C147.514,229.318,147.742,228.921,148.044,228.746z"
                          />
                        </g>
                        <path
                          id="XMLID_00000132800776704522406330000011986142543486209431_"
                          fill="#1173b9ee"
                          d="M149.775,249.945l15.652-9.031
          c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-15.652,9.031c-0.302,0.175-0.565,0.061-0.587-0.255
          C149.244,250.517,149.472,250.12,149.775,249.945z"
                        />
                        <g id="XMLID_00000061462552619492935190000008944857229633095061_">
                          <path
                            id="XMLID_00000078029522254764806590000014003769425766742406_"
                            fill="#1173b9ee"
                            d="M143.909,253.299l2.536-1.457
            c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.535,1.457c-0.303,0.175-0.565,0.061-0.587-0.255
            C143.378,253.87,143.606,253.473,143.909,253.299z"
                          />
                          <path
                            id="XMLID_00000072266584790031733480000010223298177240725939_"
                            fill="opacity:0.6#FFFFFF"
                            d="M143.909,253.299
            l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.535,1.457
            c-0.303,0.175-0.565,0.061-0.587-0.255C143.378,253.87,143.606,253.473,143.909,253.299z"
                          />
                        </g>
                        <g id="XMLID_00000101071611617989090050000003866321130869517197_">
                          <path
                            id="XMLID_00000011009727337376868300000009230886239020843139_"
                            fill="#1173b9ee"
                            d="M144.11,256.253l2.536-1.457
            c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.303,0.175-0.565,0.061-0.587-0.254
            C143.58,256.824,143.808,256.427,144.11,256.253z"
                          />
                          <path
                            id="XMLID_00000054265991346006824610000016291363879729449866_"
                            fill="opacity:0.6#FFFFFF"
                            d="M144.11,256.253
            l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
            c-0.303,0.175-0.565,0.061-0.587-0.254C143.58,256.824,143.808,256.427,144.11,256.253z"
                          />
                        </g>
                        <g id="XMLID_00000131340279209777542450000010497312733510532256_">
                          <path
                            id="XMLID_00000090294456882158614160000000093697975220569528_"
                            fill="#FFA8A7"
                            d="M149.945,252.772l57.778-33.34
            c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-57.778,33.34c-0.302,0.175-0.565,0.061-0.587-0.255
            C149.415,253.344,149.643,252.947,149.945,252.772z"
                          />
                        </g>
                        <path
                          id="XMLID_00000131345955025863684600000005099855769788705440_"
                          fill="#1173b9ee"
                          d="M148.618,235.694l58.175-33.499
          c0.302-0.174,0.565-0.06,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.175,33.498c-0.303,0.175-0.565,0.061-0.587-0.255
          C148.088,236.266,148.316,235.869,148.618,235.694z"
                        />
                        <g id="XMLID_00000002380700444808210730000006502493601916900020_">
                          <path
                            id="XMLID_00000038414051761262876480000010730413974061975977_"
                            fill="#1173b9ee"
                            d="M142.929,238.936l2.536-1.457
            c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.713-0.509,0.887l-2.536,1.457c-0.303,0.175-0.565,0.061-0.587-0.255
            C142.399,239.508,142.627,239.11,142.929,238.936z"
                          />
                          <path
                            id="XMLID_00000099646407631582959070000015709057334271574167_"
                            fill="opacity:0.6#FFFFFF"
                            d="M142.929,238.936
            l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.713-0.509,0.887l-2.536,1.457
            c-0.303,0.175-0.565,0.061-0.587-0.255C142.399,239.508,142.627,239.11,142.929,238.936z"
                          />
                        </g>
                        <path
                          id="XMLID_00000059992301080295335530000014069840326266009768_"
                          fill="#1173b9ee"
                          d="M148.838,238.921l58.175-33.498
          c0.303-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-58.175,33.498c-0.303,0.175-0.565,0.061-0.587-0.255
          C148.308,239.493,148.536,239.096,148.838,238.921z"
                        />
                        <g id="XMLID_00000122713635485748713240000005350573437827197315_">
                          <path
                            id="XMLID_00000101821503314656517910000009125185639635366539_"
                            fill="#1173b9ee"
                            d="M143.152,242.203l2.536-1.457
            c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.302,0.175-0.565,0.061-0.587-0.255
            C142.622,242.775,142.85,242.378,143.152,242.203z"
                          />
                          <path
                            id="XMLID_00000098900896961403427390000007292045896428222112_"
                            fill="opacity:0.6#FFFFFF"
                            d="M143.152,242.203
            l2.536-1.457c0.302-0.175,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
            c-0.302,0.175-0.565,0.061-0.587-0.255C142.622,242.775,142.85,242.378,143.152,242.203z"
                          />
                        </g>
                        <path
                          id="XMLID_00000178913200315356987410000006748871545480700582_"
                          fill="#F28F8F"
                          d="M149.062,242.202l58.175-33.498
          c0.302-0.174,0.565-0.061,0.587,0.255c0.021,0.315-0.206,0.713-0.509,0.887l-58.175,33.498c-0.302,0.175-0.565,0.061-0.587-0.255
          C148.532,242.774,148.759,242.377,149.062,242.202z"
                        />
                        <g id="XMLID_00000088108549902799611470000010905163939187789726_">
                          <path
                            id="XMLID_00000023970433151412595760000014741648386337589693_"
                            fill="#1173b9ee"
                            d="M143.375,245.47l2.536-1.457
            c0.303-0.175,0.565-0.061,0.587,0.255c0.022,0.315-0.206,0.712-0.509,0.887l-2.536,1.457c-0.302,0.175-0.565,0.061-0.587-0.255
            C142.845,246.042,143.072,245.645,143.375,245.47z"
                          />
                          <path
                            id="XMLID_00000017499972838775056520000002602187240392440464_"
                            fill="opacity:0.6#FFFFFF"
                            d="M143.375,245.47
            l2.536-1.457c0.303-0.175,0.565-0.061,0.587,0.255c0.022,0.315-0.206,0.712-0.509,0.887l-2.536,1.457
            c-0.302,0.175-0.565,0.061-0.587-0.255C142.845,246.042,143.072,245.645,143.375,245.47z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Text_Box">
                    <g id="Text_Box_00000043441094559846279780000015926632196381135244_">
                      <path
                        id="Shadow_00000006702564175630759660000006797200504166850953_"
                        fill="#E0E0E0"
                        d="M79.433,167.225l-34.464,19.854
        c-0.472,0.273-0.855,0.936-0.855,1.481v19.238c0,0.545,0.383,0.766,0.855,0.494l34.464-19.854
        c0.472-0.273,0.855-0.936,0.855-1.481v-19.238C80.288,167.174,79.905,166.953,79.433,167.225z"
                      />
                      <g id="Box_00000049926536477500120660000009130354688362288553_">
                        <g id="Speech_Bubble_00000079446694386569722840000010838299230309775549_">
                          <g id="Speach_Bubble_00000145045352810229502200000014739399381691260599_">
                            <g id="XMLID_00000055667577403584350090000013297205028656789688_">
                              <path
                                id="XMLID_456_"
                                fill="#1173b9ee"
                                d="M83.42,169.256L48.956,189.11c-0.472,0.272-0.856,0.936-0.856,1.481v19.239
                c0,0.546,0.385,1.204,0.86,1.472l3.402,1.934c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854
                c0.472-0.273,0.855-0.936,0.855-1.481v-19.238c0-0.545-0.385-1.205-0.86-1.473l-3.402-1.934
                C84.66,168.98,83.892,168.984,83.42,169.256z"
                              />
                              <path
                                id="XMLID_00000141446743568889932500000013140981279656123300_"
                                fill="opacity:0.4"
                                d="M83.42,169.256L48.956,189.11
                c-0.472,0.272-0.856,0.936-0.856,1.481v19.239c0,0.546,0.385,1.204,0.86,1.472l3.402,1.934
                c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                c0-0.545-0.385-1.205-0.86-1.473l-3.402-1.934C84.66,168.98,83.892,168.984,83.42,169.256z"
                              />
                              <path
                                id="XMLID_00000099634524049346244580000003513421461437746343_"
                                fill="#1173b9ee"
                                d="M89.385,172.5
                c-0.067-0.431-0.419-0.585-0.845-0.34l-34.461,19.855c-0.237,0.138-0.45,0.371-0.604,0.64l-5.106-2.937
                c0.154-0.257,0.36-0.478,0.589-0.608l34.465-19.855c0.47-0.272,1.236-0.276,1.714-0.008l3.4,1.934
                C88.967,171.426,89.326,171.99,89.385,172.5z"
                              />
                              <g>
                                <path
                                  fill="#1173b9ee"
                                  d="M88.541,172.161l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238
                  c0,0.545,0.383,0.766,0.855,0.494l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                  C89.396,172.11,89.014,171.889,88.541,172.161z"
                                />
                              </g>
                              <g fill="opacity:0.2">
                                <path
                                  d="M88.541,172.161l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238c0,0.545,0.383,0.766,0.855,0.494
                  l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238C89.396,172.11,89.014,171.889,88.541,172.161z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <path
                          fill="#F0F0F0"
                          d="M61.739,196.946c-0.008,0.152-0.013,0.358-0.017,0.62c-0.004,0.262-0.006,0.532-0.006,0.808
          c0,0.277,0.002,0.547,0.006,0.81c0.004,0.263,0.009,0.466,0.017,0.609c0.014,0.251,0.048,0.481,0.099,0.689
          c0.051,0.207,0.132,0.37,0.243,0.487c0.11,0.118,0.249,0.181,0.418,0.191c0.169,0.01,0.377-0.057,0.627-0.201
          c0.249-0.144,0.455-0.307,0.616-0.491c0.161-0.184,0.293-0.37,0.395-0.559c0.103-0.189,0.182-0.379,0.237-0.569
          c0.055-0.19,0.097-0.361,0.126-0.513c0.037-0.202,0.077-0.352,0.121-0.452c0.044-0.098,0.129-0.184,0.254-0.256l1.441-0.832
          c0.066-0.038,0.122-0.034,0.17,0.011c0.048,0.046,0.072,0.12,0.072,0.221c-0.007,0.58-0.1,1.175-0.275,1.785
          c-0.176,0.61-0.419,1.19-0.726,1.741c-0.309,0.551-0.67,1.056-1.084,1.515c-0.415,0.46-0.864,0.829-1.348,1.109
          c-0.528,0.305-1,0.456-1.415,0.452c-0.414-0.004-0.768-0.13-1.062-0.378c-0.293-0.248-0.519-0.606-0.677-1.075
          c-0.157-0.468-0.247-1.007-0.269-1.615c-0.014-0.454-0.023-0.947-0.023-1.478c0-0.531,0.008-1.044,0.023-1.538
          c0.014-0.63,0.102-1.271,0.264-1.923c0.161-0.652,0.387-1.271,0.677-1.857c0.289-0.585,0.643-1.12,1.062-1.604
          c0.418-0.484,0.891-0.879,1.42-1.184c0.484-0.279,0.933-0.429,1.348-0.448c0.415-0.019,0.776,0.069,1.084,0.264
          c0.308,0.195,0.55,0.496,0.726,0.902c0.175,0.407,0.268,0.896,0.275,1.468c0,0.102-0.024,0.204-0.072,0.304
          c-0.048,0.101-0.104,0.17-0.17,0.208L64.876,195c-0.125,0.072-0.209,0.085-0.254,0.036c-0.044-0.048-0.084-0.152-0.121-0.311
          c-0.029-0.118-0.071-0.241-0.126-0.368c-0.056-0.126-0.134-0.224-0.237-0.295c-0.102-0.07-0.234-0.104-0.395-0.102
          c-0.162,0.003-0.367,0.076-0.616,0.22c-0.25,0.144-0.458,0.318-0.627,0.523c-0.169,0.205-0.309,0.43-0.418,0.674
          c-0.111,0.244-0.191,0.5-0.243,0.767C61.787,196.41,61.754,196.678,61.739,196.946z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M71.104,186.863c0.47-0.271,0.901-0.416,1.294-0.433c0.392-0.017,0.731,0.055,1.018,0.217
          c0.286,0.163,0.51,0.395,0.671,0.697c0.161,0.302,0.245,0.632,0.254,0.989c0,0.102-0.024,0.203-0.072,0.304
          c-0.048,0.101-0.101,0.168-0.159,0.202l-1.442,0.833c-0.103,0.059-0.185,0.084-0.247,0.075c-0.062-0.009-0.126-0.039-0.192-0.092
          c-0.022-0.021-0.057-0.057-0.105-0.109c-0.048-0.052-0.116-0.095-0.204-0.129c-0.088-0.033-0.198-0.044-0.33-0.029
          c-0.132,0.014-0.293,0.076-0.484,0.186c-0.139,0.081-0.273,0.172-0.401,0.274c-0.129,0.103-0.242,0.214-0.341,0.332
          c-0.099,0.12-0.18,0.254-0.242,0.403c-0.062,0.149-0.094,0.308-0.094,0.478c0,0.169,0.035,0.291,0.105,0.363
          c0.069,0.073,0.187,0.11,0.352,0.11c0.165,0.001,0.383-0.032,0.655-0.098c0.272-0.066,0.609-0.154,1.012-0.263
          c0.404-0.109,0.756-0.154,1.056-0.135c0.301,0.018,0.553,0.113,0.754,0.285c0.202,0.171,0.352,0.423,0.451,0.756
          c0.099,0.333,0.149,0.764,0.149,1.295c0,0.576-0.084,1.139-0.253,1.688c-0.169,0.55-0.406,1.073-0.71,1.57
          c-0.304,0.498-0.664,0.951-1.078,1.36c-0.415,0.41-0.867,0.755-1.36,1.039c-0.499,0.288-0.953,0.449-1.365,0.483
          c-0.411,0.034-0.764-0.03-1.062-0.192c-0.297-0.161-0.53-0.402-0.699-0.723c-0.169-0.32-0.257-0.693-0.264-1.118
          c0-0.102,0.024-0.203,0.072-0.305c0.047-0.101,0.101-0.168,0.16-0.202l1.441-0.832c0.103-0.059,0.183-0.086,0.242-0.081
          c0.058,0.006,0.117,0.031,0.176,0.076c0.029,0.028,0.074,0.076,0.132,0.144c0.059,0.068,0.138,0.127,0.237,0.177
          c0.099,0.05,0.223,0.072,0.373,0.064c0.15-0.007,0.336-0.075,0.556-0.202c0.389-0.225,0.714-0.477,0.974-0.757
          c0.26-0.28,0.39-0.59,0.39-0.929c0-0.169-0.048-0.283-0.143-0.341c-0.096-0.058-0.239-0.08-0.429-0.066
          c-0.191,0.014-0.435,0.062-0.732,0.143c-0.297,0.082-0.647,0.171-1.051,0.268c-0.756,0.188-1.308,0.091-1.656-0.289
          c-0.349-0.381-0.523-1.057-0.523-2.028c0-0.486,0.072-0.991,0.215-1.514c0.144-0.523,0.35-1.033,0.622-1.528
          c0.271-0.495,0.6-0.953,0.985-1.373C70.196,187.486,70.627,187.139,71.104,186.863z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M79.071,182.263c0.47-0.271,0.901-0.416,1.294-0.433c0.392-0.017,0.732,0.055,1.018,0.217
          c0.286,0.163,0.51,0.395,0.671,0.697c0.161,0.302,0.245,0.632,0.253,0.989c0,0.102-0.024,0.203-0.071,0.304
          c-0.048,0.101-0.101,0.168-0.16,0.202l-1.442,0.833c-0.103,0.059-0.185,0.084-0.247,0.075c-0.063-0.009-0.127-0.039-0.193-0.092
          c-0.022-0.021-0.057-0.058-0.105-0.109c-0.048-0.052-0.115-0.095-0.203-0.129c-0.089-0.033-0.198-0.044-0.331-0.029
          c-0.132,0.014-0.293,0.076-0.484,0.186c-0.139,0.081-0.273,0.172-0.401,0.274c-0.128,0.103-0.242,0.214-0.341,0.333
          c-0.099,0.12-0.18,0.254-0.242,0.403c-0.062,0.149-0.093,0.308-0.093,0.478c0,0.169,0.035,0.291,0.105,0.363
          c0.069,0.073,0.186,0.11,0.352,0.11c0.165,0.001,0.383-0.032,0.655-0.098c0.272-0.066,0.609-0.154,1.012-0.263
          c0.403-0.109,0.756-0.154,1.057-0.135c0.3,0.018,0.552,0.113,0.754,0.285c0.202,0.171,0.352,0.423,0.451,0.756
          c0.099,0.333,0.149,0.764,0.149,1.295c0,0.576-0.084,1.139-0.253,1.688c-0.169,0.55-0.405,1.073-0.71,1.57
          c-0.305,0.498-0.664,0.951-1.078,1.36c-0.415,0.409-0.868,0.755-1.359,1.039c-0.5,0.288-0.954,0.449-1.365,0.483
          c-0.411,0.034-0.765-0.03-1.062-0.192c-0.298-0.161-0.53-0.402-0.699-0.723c-0.169-0.32-0.257-0.693-0.265-1.118
          c0-0.102,0.024-0.203,0.072-0.304c0.047-0.101,0.101-0.168,0.159-0.202l1.441-0.832c0.103-0.059,0.184-0.086,0.242-0.08
          c0.058,0.006,0.117,0.031,0.175,0.076c0.029,0.028,0.074,0.076,0.132,0.144c0.059,0.068,0.138,0.127,0.237,0.177
          c0.099,0.05,0.223,0.072,0.373,0.064c0.151-0.008,0.336-0.075,0.556-0.202c0.389-0.224,0.713-0.477,0.974-0.757
          c0.26-0.28,0.391-0.589,0.391-0.929c0-0.169-0.047-0.283-0.144-0.341c-0.095-0.058-0.239-0.08-0.429-0.066
          c-0.191,0.014-0.435,0.062-0.731,0.143c-0.297,0.082-0.648,0.171-1.051,0.268c-0.756,0.188-1.308,0.091-1.656-0.289
          c-0.349-0.381-0.523-1.057-0.523-2.028c0-0.486,0.072-0.991,0.215-1.514c0.143-0.523,0.35-1.033,0.622-1.528
          c0.27-0.495,0.599-0.953,0.985-1.373C78.164,182.886,78.595,182.539,79.071,182.263z"
                        />
                      </g>
                    </g>
                    <g id="Text_Box_00000125586484010715836810000002914570132852631680_">
                      <path
                        id="Shadow_44_"
                        fill="#E0E0E0"
                        d="M79.433,207.206l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238
        c0,0.545,0.383,0.766,0.855,0.494l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
        C80.288,207.154,79.905,206.933,79.433,207.206z"
                      />
                      <g id="Box_2_">
                        <g id="Speech_Bubble_18_">
                          <g id="Speach_Bubble_4_">
                            <g id="XMLID_435_">
                              <path
                                id="XMLID_440_"
                                fill="#1173b9ee"
                                d="M83.42,209.237L48.956,229.09c-0.472,0.273-0.856,0.936-0.856,1.481v19.239
                c0,0.545,0.385,1.204,0.86,1.472l3.402,1.934c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854
                c0.472-0.273,0.855-0.936,0.855-1.481v-19.238c0-0.545-0.385-1.204-0.86-1.473l-3.402-1.934
                C84.66,208.96,83.892,208.964,83.42,209.237z"
                              />
                              <path
                                id="XMLID_437_"
                                fill="opacity:0.4"
                                d="M83.42,209.237L48.956,229.09c-0.472,0.273-0.856,0.936-0.856,1.481v19.239
                c0,0.545,0.385,1.204,0.86,1.472l3.402,1.934c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854
                c0.472-0.273,0.855-0.936,0.855-1.481v-19.238c0-0.545-0.385-1.204-0.86-1.473l-3.402-1.934
                C84.66,208.96,83.892,208.964,83.42,209.237z"
                              />
                              <path
                                id="XMLID_436_"
                                fill="#1173b9ee"
                                d="M89.385,212.48c-0.067-0.431-0.419-0.585-0.845-0.34l-34.461,19.855
                c-0.237,0.138-0.45,0.371-0.604,0.64l-5.106-2.937c0.154-0.257,0.36-0.478,0.589-0.608l34.465-19.855
                c0.47-0.272,1.236-0.277,1.714-0.008l3.4,1.934C88.967,211.406,89.326,211.971,89.385,212.48z"
                              />
                              <g>
                                <path
                                  fill="#1173b9ee"
                                  d="M88.541,212.141l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238
                  c0,0.545,0.383,0.766,0.855,0.494l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                  C89.396,212.09,89.014,211.869,88.541,212.141z"
                                />
                              </g>
                              <g fill="opacity:0.2">
                                <path
                                  d="M88.541,212.141l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238c0,0.545,0.383,0.766,0.855,0.494
                  l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238C89.396,212.09,89.014,211.869,88.541,212.141z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <path
                          fill="#F0F0F0"
                          d="M61.904,232.324c0.081-0.047,0.15-0.041,0.209,0.015c0.059,0.057,0.088,0.147,0.088,0.271v10.945
          c0,0.124-0.029,0.248-0.088,0.372c-0.058,0.124-0.128,0.21-0.209,0.256l-1.442,0.833c-0.081,0.047-0.151,0.042-0.209-0.015
          c-0.059-0.057-0.089-0.146-0.089-0.271v-4.151l-2.443,1.411v4.151c0,0.124-0.029,0.248-0.089,0.373
          c-0.058,0.124-0.128,0.21-0.209,0.256l-1.442,0.832c-0.081,0.047-0.15,0.045-0.209-0.006c-0.059-0.051-0.088-0.144-0.088-0.28
          v-10.945c0-0.124,0.029-0.248,0.088-0.373c0.059-0.124,0.128-0.21,0.209-0.256l1.442-0.832c0.081-0.047,0.15-0.041,0.209,0.015
          c0.059,0.056,0.089,0.147,0.089,0.271v4.083l2.443-1.41v-4.083c0-0.124,0.029-0.249,0.089-0.373
          c0.058-0.124,0.128-0.209,0.209-0.256L61.904,232.324z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M69.948,227.68c0.08-0.046,0.15-0.041,0.209,0.015c0.059,0.057,0.088,0.148,0.088,0.272v1.796
          c0,0.124-0.029,0.249-0.088,0.373c-0.059,0.125-0.129,0.21-0.209,0.257l-1.937,1.118v8.692c0,0.124-0.029,0.248-0.088,0.373
          c-0.059,0.124-0.128,0.209-0.209,0.256l-1.441,0.832c-0.081,0.047-0.151,0.042-0.21-0.015c-0.059-0.057-0.088-0.146-0.088-0.271
          v-8.692l-1.937,1.118c-0.081,0.046-0.151,0.042-0.209-0.015c-0.059-0.057-0.088-0.147-0.088-0.271v-1.795
          c0-0.124,0.029-0.249,0.088-0.373c0.058-0.124,0.128-0.21,0.209-0.256L69.948,227.68z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M75.005,233.631c-0.062-0.06-0.112-0.125-0.148-0.194l-1.034-2.198v5.608
          c0,0.124-0.029,0.248-0.088,0.373c-0.059,0.124-0.129,0.209-0.209,0.256l-1.441,0.832c-0.081,0.047-0.15,0.042-0.209-0.014
          c-0.059-0.057-0.088-0.147-0.088-0.271v-10.945c0-0.124,0.029-0.249,0.088-0.373c0.059-0.124,0.128-0.21,0.209-0.257l1.276-0.737
          c0.147-0.085,0.257-0.086,0.33-0.004c0.074,0.082,0.121,0.144,0.144,0.188l1.783,3.664l1.783-5.722
          c0.021-0.069,0.07-0.187,0.143-0.353c0.074-0.167,0.184-0.293,0.331-0.378l1.276-0.737c0.081-0.047,0.15-0.041,0.209,0.015
          c0.059,0.057,0.088,0.147,0.088,0.271V233.6c0,0.124-0.029,0.248-0.088,0.372c-0.059,0.124-0.129,0.209-0.209,0.256l-1.442,0.833
          c-0.08,0.047-0.15,0.042-0.209-0.015c-0.059-0.056-0.088-0.147-0.088-0.271v-5.609l-1.034,3.393
          c-0.037,0.112-0.086,0.234-0.149,0.366c-0.062,0.132-0.149,0.23-0.259,0.293l-0.704,0.407
          C75.153,233.689,75.067,233.691,75.005,233.631z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M86.929,227.025c0.081-0.047,0.15-0.041,0.209,0.015c0.059,0.056,0.089,0.147,0.089,0.271v1.796
          c0,0.124-0.029,0.248-0.089,0.373c-0.058,0.124-0.128,0.209-0.209,0.256l-5.095,2.942c-0.081,0.047-0.151,0.042-0.209-0.015
          c-0.059-0.057-0.088-0.146-0.088-0.271v-10.945c0-0.124,0.029-0.248,0.088-0.373c0.059-0.124,0.128-0.21,0.209-0.256l1.441-0.832
          c0.08-0.047,0.15-0.041,0.209,0.015c0.059,0.057,0.089,0.147,0.089,0.271v8.691L86.929,227.025z"
                        />
                      </g>
                    </g>
                    <g id="Text_Box_00000181801689448822394000000014225961526961745282_">
                      <path
                        id="Shadow_00000085970537545926178550000014150856420952581815_"
                        fill="#E0E0E0"
                        d="M79.433,247.186L44.969,267.04
        c-0.472,0.273-0.855,0.936-0.855,1.481v19.238c0,0.545,0.383,0.766,0.855,0.494l34.464-19.854
        c0.472-0.273,0.855-0.936,0.855-1.481V247.68C80.288,247.134,79.905,246.913,79.433,247.186z"
                      />
                      <g id="Box_00000133495239253237415060000004222088152053586073_">
                        <g id="Speech_Bubble_00000008146104278413886410000016749611631874942347_">
                          <g id="Speach_Bubble_00000172404214440186790920000006411894832082485143_">
                            <g id="XMLID_00000173864272465048310750000000790339025176287669_">
                              <path
                                id="XMLID_00000172414861028416262630000009538465556553460159_"
                                fill="#1173b9ee"
                                d="M83.42,249.217
                l-34.464,19.854c-0.472,0.273-0.856,0.936-0.856,1.481v19.239c0,0.546,0.385,1.204,0.86,1.472l3.402,1.934
                c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                c0-0.545-0.385-1.205-0.86-1.473l-3.402-1.934C84.66,248.941,83.892,248.944,83.42,249.217z"
                              />
                              <path
                                id="XMLID_00000015315834455233075950000002920786236056859562_"
                                fill="opacity:0.4"
                                d="M83.42,249.217l-34.464,19.854
                c-0.472,0.273-0.856,0.936-0.856,1.481v19.239c0,0.546,0.385,1.204,0.86,1.472l3.402,1.934
                c0.475,0.268,1.243,0.264,1.715-0.008l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                c0-0.545-0.385-1.205-0.86-1.473l-3.402-1.934C84.66,248.941,83.892,248.944,83.42,249.217z"
                              />
                              <path
                                id="XMLID_00000072247652717780107330000007877961906559432332_"
                                fill="#1173b9ee"
                                d="M89.385,252.46
                c-0.067-0.43-0.419-0.585-0.845-0.34l-34.461,19.855c-0.237,0.138-0.45,0.371-0.604,0.64l-5.106-2.937
                c0.154-0.257,0.36-0.478,0.589-0.608l34.465-19.855c0.47-0.273,1.236-0.277,1.714-0.008l3.4,1.934
                C88.967,251.386,89.326,251.951,89.385,252.46z"
                              />
                              <g>
                                <path
                                  fill="#1173b9ee"
                                  d="M88.541,252.122l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238
                  c0,0.546,0.383,0.766,0.855,0.494l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238
                  C89.396,252.07,89.014,251.849,88.541,252.122z"
                                />
                              </g>
                              <g fill="opacity:0.2">
                                <path
                                  d="M88.541,252.122l-34.464,19.854c-0.472,0.273-0.855,0.936-0.855,1.481v19.238c0,0.546,0.383,0.766,0.855,0.494
                  l34.464-19.854c0.472-0.273,0.855-0.936,0.855-1.481v-19.238C89.396,252.07,89.014,251.849,88.541,252.122z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <path
                          fill="#F0F0F0"
                          d="M62.41,276.519c-0.007,0.152-0.012,0.358-0.016,0.62c-0.004,0.262-0.006,0.531-0.006,0.808
          c0,0.277,0.001,0.547,0.006,0.81c0.004,0.263,0.009,0.466,0.016,0.609c0.015,0.251,0.048,0.481,0.099,0.689
          c0.051,0.207,0.132,0.37,0.242,0.486c0.11,0.118,0.249,0.181,0.418,0.191c0.169,0.01,0.378-0.057,0.628-0.201
          c0.249-0.144,0.454-0.307,0.616-0.491c0.161-0.184,0.294-0.37,0.396-0.559c0.103-0.189,0.182-0.379,0.237-0.569
          c0.055-0.19,0.097-0.361,0.126-0.514c0.037-0.202,0.077-0.352,0.121-0.451c0.044-0.099,0.128-0.184,0.253-0.256l1.441-0.832
          c0.066-0.038,0.123-0.034,0.171,0.012c0.048,0.046,0.072,0.12,0.072,0.221c-0.007,0.58-0.099,1.175-0.275,1.785
          c-0.177,0.61-0.418,1.19-0.727,1.741c-0.308,0.551-0.669,1.056-1.084,1.515c-0.415,0.46-0.864,0.829-1.348,1.109
          c-0.528,0.305-1,0.456-1.415,0.452c-0.414-0.004-0.768-0.13-1.062-0.378c-0.294-0.248-0.519-0.606-0.677-1.075
          c-0.157-0.468-0.247-1.007-0.269-1.615c-0.015-0.454-0.022-0.947-0.022-1.478c0-0.531,0.007-1.044,0.022-1.537
          c0.014-0.63,0.103-1.271,0.264-1.923c0.161-0.652,0.387-1.272,0.678-1.857c0.289-0.585,0.643-1.12,1.062-1.604
          c0.418-0.484,0.891-0.879,1.42-1.184c0.484-0.28,0.933-0.429,1.348-0.448c0.414-0.019,0.776,0.069,1.084,0.264
          c0.309,0.195,0.55,0.496,0.727,0.902c0.176,0.407,0.267,0.896,0.275,1.467c0,0.102-0.024,0.204-0.072,0.305
          c-0.048,0.101-0.104,0.17-0.171,0.208l-1.441,0.832c-0.125,0.072-0.209,0.085-0.253,0.036c-0.044-0.047-0.084-0.152-0.121-0.311
          c-0.029-0.118-0.071-0.241-0.126-0.368c-0.056-0.126-0.134-0.224-0.237-0.295c-0.102-0.07-0.235-0.104-0.396-0.102
          c-0.162,0.003-0.367,0.076-0.616,0.22c-0.25,0.144-0.459,0.318-0.628,0.523c-0.169,0.205-0.308,0.43-0.418,0.674
          c-0.11,0.244-0.191,0.5-0.242,0.767C62.458,275.983,62.425,276.251,62.41,276.519z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M72.512,274.262v2.796c0,0.124-0.03,0.248-0.087,0.372c-0.059,0.125-0.129,0.21-0.209,0.256
          l-1.387,0.801c-0.08,0.047-0.151,0.042-0.209-0.015c-0.059-0.057-0.088-0.147-0.088-0.271v-2.796l-1.706,0.985
          c-0.08,0.047-0.15,0.042-0.209-0.015c-0.059-0.056-0.088-0.146-0.088-0.271v-1.711c0-0.124,0.029-0.249,0.088-0.373
          c0.059-0.124,0.128-0.21,0.209-0.257l1.706-0.985v-2.796c0-0.124,0.029-0.248,0.088-0.373c0.058-0.124,0.128-0.21,0.209-0.256
          l1.387-0.801c0.081-0.046,0.15-0.042,0.209,0.015c0.058,0.057,0.087,0.147,0.087,0.271v2.795l1.695-0.979
          c0.081-0.046,0.151-0.041,0.209,0.016c0.059,0.056,0.088,0.147,0.088,0.271v1.711c0,0.124-0.03,0.249-0.088,0.372
          c-0.059,0.124-0.129,0.21-0.209,0.256L72.512,274.262z"
                        />
                        <path
                          fill="#F0F0F0"
                          d="M79.809,270.049v2.796c0,0.124-0.029,0.248-0.088,0.372c-0.059,0.125-0.129,0.21-0.21,0.257
          l-1.387,0.801c-0.08,0.047-0.15,0.042-0.208-0.015c-0.059-0.057-0.089-0.147-0.089-0.271v-2.796l-1.706,0.985
          c-0.081,0.047-0.15,0.042-0.209-0.015c-0.059-0.056-0.088-0.147-0.088-0.271v-1.711c0-0.124,0.029-0.248,0.088-0.372
          c0.058-0.124,0.128-0.21,0.209-0.257l1.706-0.985v-2.796c0-0.124,0.029-0.248,0.089-0.372c0.058-0.124,0.128-0.21,0.208-0.256
          l1.387-0.801c0.081-0.047,0.151-0.042,0.21,0.015c0.058,0.057,0.088,0.147,0.088,0.271v2.796l1.695-0.979
          c0.081-0.047,0.151-0.041,0.209,0.016c0.059,0.056,0.088,0.146,0.088,0.271v1.711c0,0.124-0.029,0.248-0.088,0.372
          c-0.058,0.124-0.128,0.21-0.209,0.256L79.809,270.049z"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Character">
                    <g id="Character_00000122712672867095139040000000176033164348376508_">
                      <g>
                        <path
                          fill="#B78876"
                          d="M324.434,285.54c0,0-13.425-8.132-20.665-12.228c-5.759-3.259-10.914-7.258-16.493-7.258
          c-6.176,0-10.331-1.808-14.573-4.231c-3.474-1.984-5.727-3.17-8.797-4.972c-3.07-1.802-6.135-3.497-8.421-5.396
          c-1.641-1.364-6.258-4.717-6.978-6.814c-0.719-2.096,2.195-3.822,5.587-2.966c3.391,0.856,7.952,4.192,11.898,4.939
          s5.18,0.808,5.447-1.788c0.267-2.597-2.398-6.988-4.097-8.722c-1.699-1.733-5.57-3.988-8.53-5.234
          c-2.96-1.247-7.921-3.693-7.921-3.693s-4.207-1.035-6.495-1.973c-2.288-0.939-4.125-2.679-3.994-5.282
          c-2.357-2.316-1.007-4.584,0.5-4.508c1.507,0.075,7.907,1.219,12.394,2.13c4.488,0.911,10.723,2.596,12.888,3.254
          s9.126,4.303,13.148,6.29c4.022,1.987,4.451,2.653,5.613,3.913c0.989,1.072,4.937,5.396,9.191,9.65
          c4.614,4.614,6.912,6.159,10.476,7.307c5.435,1.751,26.434,9.581,32.436,10.43C340.994,264.629,333.248,281.022,324.434,285.54z"
                        />
                        <path
                          fill="#B78876"
                          d="M251.344,227.399c-2.151,1.151-3.802,2.257-4.744,3.023c-1.733,1.409,0.883,4.63,6.565,3.654
          c5.683-0.976,8.371-1.907,8.371-1.907L251.344,227.399z"
                        />
                        <path
                          fill="#B78876"
                          d="M240.401,219.922c0.07-1.401,1.496-1.978,3.851-1.5c2.355,0.478,11.331,2.657,14.467,3.391
          c3.136,0.734,5.329,1.564,9.185,3.776c3.855,2.212,11.09,7.476,11.09,7.476s-2.6-2.798-7.408-6.138
          c-4.808-3.341-6.647-4.586-11.618-5.844c-4.971-1.258-14.378-3.458-16.309-3.771C241.728,216.998,239.98,217.704,240.401,219.922
          z"
                        />
                      </g>
                      <g id="Top_00000075850100241887895580000001995538674712646789_">
                        <g id="Character_1_">
                          <g>
                            <path
                              id="XMLID_5202_"
                              fill="#37474F"
                              d="M410.564,235.423c16.717-2.471,32.174,2.102,36.551,20.075
              c3.22,13.223-15.661,53.791-25.452,77.897c0,0-37.878-1.533-41.117-29.531L410.564,235.423z"
                            />
                          </g>
                          <g id="XMLID_00000057834587354317322630000006221787034068678548_">
                            <g id="XMLID_4194_">
                              <path
                                id="XMLID_4198_"
                                fill="#B78876"
                                d="M340.432,174.658c0,0-12.693,15.316-11.783,16.703
                c0.91,1.387,7.96,4.628,7.96,4.628L340.432,174.658z"
                              />
                              <path
                                id="XMLID_4195_"
                                fill="#B78876"
                                d="M348.55,147.282c-6.724,2.301-9.036,7.957-10.277,18.992
                c-0.52,4.625,1.52,11.756-0.058,16.579c-4.404,13.466-1.581,36.344,2.047,40.64c2.451,2.898,18.156,7.64,25.91,6.389
                c9.703-1.566,31.177-8.503,42.575-22.117c13.407-16.018,18.699-38.982,6.977-49.754
                C399.23,142.85,355.728,144.825,348.55,147.282z"
                              />
                              <path
                                fill="#B78876"
                                d="M403.194,230.242l-0.714-12.405l-38.446,6.781l0.84,8.617
                c0.469,4.831,0.849,9.821-2.342,11.688c-5.728,3.352-15.191,8.535-21.567,12.417c0,0,27.822,3.394,48.777-0.064
                c20.955-3.458,17.963-21.55,17.963-21.55C406.658,235.756,403.475,236.161,403.194,230.242z"
                              />
                              <path
                                fill="#B78876"
                                d="M340.965,224.103c3.127,2.224,12.314,6.151,23.618,6.138l-0.548-5.624
                c0,0-5.784,1.426-13.585,1.229C344.823,225.705,341.023,224.118,340.965,224.103z"
                              />
                            </g>
                            <g id="XMLID_00000101080153743657809970000010017528762608613001_">
                              <g id="XMLID_00000106841148646293702420000011212696582951463817_">
                                <path
                                  id="XMLID_4193_"
                                  fill="#263238"
                                  d="M335.75,149.775c-1.077,1.451-1.775,3.173-1.914,4.971
                  c-0.237,3.06,1.253,6.252,3.882,7.835c2.629,1.583,6.299,1.338,8.547-0.751c-0.675,3.045,0,6.493,2.221,8.683
                  c2.221,2.19,6.072,2.729,8.526,0.804c-0.763,1.605-1.406,3.813-0.011,4.915c0.347,0.274,0.776,0.424,1.206,0.526
                  c1.251,0.295,2.589,0.209,3.792-0.244c-1.271,1.511-2.097,3.406-1.604,5.308c0.161,0.622,3.228,4.475,3.393,4.015
                  c0,0,3.922-10.789,13.113-8.496c9.252,2.31,9.361,14.398,2.743,21.094c-6.572,6.646-11.786,3.426-11.864,3.377
                  c0.042,1.932-0.222,12.382,8.369,18.402c5.267,3.691,19.119,4.496,26.428,0.111c2.695-4.811,7.216-10.973,10.701-16.372
                  c11.677-18.09,15.513-29.235,13.486-39.429c-1.383-6.953-4.488-10.917-9.739-12.234c-0.282-6.605-1.24-11.688-8.332-17.786
                  c-11.141-9.579-24.025-10.406-34.003-9.956c-3.441,0.155-6.898,0.765-10.308,0.282c-2.948-0.417-5.728-1.636-8.659-2.157
                  c-2.931-0.521-6.294-0.188-8.328,1.985c-2.142,2.289-2.136,5.867-1.357,8.903c-2.401,0.162-4.829,0.695-6.868,1.974
                  c-2.039,1.279-3.646,3.385-3.915,5.777c-0.269,2.391,1.016,4.989,3.251,5.878
                  C337.445,147.875,336.505,148.759,335.75,149.775z"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="XMLID_4187_">
                            <g>
                              <path
                                fill="#F0F0F0"
                                d="M323.305,430.022c0.024-8.964,0.067-15.944,0.105-21.887
                c0.122-19.643,0.173-27.773-0.772-58.037c-1.668-53.486,4.479-84.785,18.793-95.682c2.836-1.259,5.134-2.289,7.063-3.154
                c6.87-3.079,9.006-4.037,14.012-5.781c1.758,0.811,7.396,2.982,17.229,2.982c1.97,0,4.021-0.088,6.098-0.263
                c14.877-1.268,21.702-9.04,22.348-12.003c0.503-0.055,1.404-0.153,2.358-0.248c2.439,0.495,6.905,2.352,11.16,4.644
                c0.245,0.132,0.515,0.272,0.803,0.422c3.975,2.067,12.244,6.368,15.548,22.508c6.387,31.084-0.183,59.615-4.979,80.448
                c-1.052,4.566-2.045,8.879-2.817,12.82l-0.842,4.271c-3.843,19.448-6.389,32.33-5.549,52.658l-63.995,37.895L323.305,430.022z
                "
                              />
                              <path
                                fill="#E0E0E0"
                                d="M410.51,236.476c2.408,0.508,6.77,2.33,10.94,4.576c0.248,0.134,0.52,0.275,0.811,0.427
                c4.202,2.186,12.022,6.255,15.277,22.15c6.363,30.973-0.192,59.441-4.978,80.227c-1.052,4.57-2.046,8.887-2.82,12.835
                c-0.287,1.46-0.567,2.88-0.841,4.267c-3.831,19.387-6.375,32.261-5.571,52.472l-63.462,37.579l-36.038-21.286
                c0.024-8.818,0.066-15.597,0.103-21.594c0.122-19.647,0.173-27.779-0.771-58.048c-1.661-53.246,4.403-84.394,18.54-95.215
                c2.805-1.246,5.083-2.267,6.999-3.126c6.77-3.034,8.936-4.005,13.783-5.7c1.987,0.883,7.656,2.943,17.255,2.943
                c1.984,0,4.05-0.089,6.142-0.265c8.615-0.734,14.191-3.608,17.352-5.89c3.025-2.184,4.826-4.532,5.356-6.153
                C409.085,236.623,409.779,236.549,410.51,236.476 M410.564,235.423c-1.48,0.146-2.856,0.302-2.856,0.302
                c0.115,2.074-6.379,10.632-21.919,11.955c-2.161,0.182-4.177,0.261-6.053,0.261c-9,0-14.725-1.833-17.2-3.023
                c-6.629,2.303-8.371,3.272-21.37,9.046c-13.394,10.142-20.854,38.238-19.047,96.15c1.236,39.605,0.765,41.63,0.666,80.204
                l37.083,21.903l64.529-38.211c-0.938-21.899,2.043-35.094,6.368-57.118c4.357-22.232,15.582-55.575,7.796-93.473
                c-3.585-17.511-12.831-21.242-16.614-23.285C417.474,237.727,412.972,235.892,410.564,235.423L410.564,235.423z"
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <g id="Hand">
                            <path
                              fill="#B78876"
                              d="M261.715,314.973c-14.65-9.416-25.304-17.986-27.426-21.542
              c-2.385-3.995-5.096-12.61-6.508-19.054c-0.797-3.637-1.422-6.207-3.743-9.953c-2.321-3.746-4.223-5.958-4.977-6.661
              c-0.754-0.702-3.336,1.03-3.233,3.944c0.103,2.914,1.921,5.31,2.265,7.304c0.344,1.993-1.124,7.333-1.124,7.333
              s-4.101-4.139-7.96-7.557c-3.859-3.418-5.638-4.712-9.954-6.782c-3.97-1.905-6.793-3.074-7.716-3.406
              c-0.923-0.332-6.213-1.965-8.8-2.456c-2.566-0.486-2.584,1.975-1.241,3.842c1.342,1.867,9.141,5.541,9.141,5.541
              s-4.23-1.035-5.983-1.611c-1.753-0.576-2.487-0.732-4.949-0.736c-2.462-0.004-5.29-0.082-7.199,0.073
              c-2.902,0.236-2.322,3.911,0.737,5.352c3.06,1.441,7.914,2.089,9.667,2.665c1.753,0.576,6.763,3.042,7.793,3.826
              c1.031,0.784,5.92,4.986,6.122,5.526c0.202,0.54-2.403-0.918-6.389-2.782c-3.986-1.864-9.738-4.668-11.399-5.247
              c-1.661-0.579-8.379-2.346-10.486-2.636c-2.107-0.29-2.459,2.64-0.817,5.225c1.642,2.586,7.721,4.194,9.739,5.265
              c2.004,1.064,7.652,4.419,10.728,6.315c3.076,1.896,5.134,3.373,4.808,4.479s-2.8,0.737-6.377,0.135
              c-3.577-0.602-7.992-1.722-10.844-2.441c-2.852-0.719-6.727-2.04-7.862-0.633c-1.135,1.408-0.502,3.847,1.999,4.943
              c2.5,1.096,7.199,2.479,10.333,3.462s8.743,2.333,10.772,2.991s5.202,2.733,7.195,4.941c1.993,2.208,6.128,8.261,11.339,11.266
              c5.212,3.006,9.426,4.169,13.239,8.282c3.673,3.961,15.579,17.986,15.579,17.986s8.283-3.081,14.633-9.213
              C261.392,324.68,261.715,314.973,261.715,314.973z"
                            />
                            <path
                              fill="#B78876"
                              d="M219.677,275.822c-1.055-2.299-1.554-5.485-1.554-5.485l-0.001-0.001
              c-0.16,2.392-1.152,6.008-1.152,6.008c2.12,2.128,4.186,5.462,5.116,6.987C221.957,280.737,220.732,278.121,219.677,275.822z"
                            />
                            <path
                              fill="#B78876"
                              d="M190.438,265.526c2.726,1.274,3.817,1.824,5.629,3.182c1.812,1.358,8.459,6.508,8.459,6.508
              s-1.869-2.179-3.953-3.956c-2.305-1.967-3.843-3.214-5.753-4.114C192.911,266.246,190.438,265.526,190.438,265.526z"
                            />
                          </g>
                          <path
                            fill="#B78876"
                            d="M275.998,325.023c0,0,14.33-20.085,27.189-38.792c11.57-16.832,26.716-25.875,37.578-30.663
            c19.952,17.516-0.346,65.078-0.346,65.078c-12.952,14.676-32.992,38.619-39.151,45.482
            c-11.485,12.796-19.593,18.173-34.043,5.815c-7.771-6.646-13.648-12.099-22.826-22.59
            c-9.513-10.874-19.393-22.768-19.393-22.768l20.384-22.96L275.998,325.023z"
                          />
                          <path
                            fill="#B78876"
                            d="M275.998,325.023c-5.148,5.964-7.875,12.643-6.242,23.461c-4.341-6.73-4.626-17.493,2.776-25.855
            L275.998,325.023z"
                          />
                          <path
                            fill="#37474F"
                            d="M341.164,253.959c-14.481,6.375-23.683,8.933-38.94,31.683
            c-10.684,15.932-24.292,35.254-24.292,35.254s-0.132,8.592,12.695,20.633c12.828,12.04,22.804,12.547,22.804,12.547
            l27.535-32.552C340.965,321.523,365.595,274.529,341.164,253.959z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="#1173b9ee"
                            d="M464.092,245.62c-1.004-0.664-5.031-3.419-6.082-4.116c-3.544-2.349-8.645-2.124-14.472,1.233
            l-52.216,30.092c-11.712,6.746-21.925,23.588-22.812,37.618l-8.95,141.596l6.123,3.535l94.682-55.353l8.862-140.181
            C469.673,252.99,467.676,247.99,464.092,245.62z"
                          />
                          <path
                            fill="opacity:0.2"
                            d="M464.092,245.62c-1.004-0.664-5.031-3.419-6.082-4.116c-3.544-2.349-8.645-2.124-14.472,1.233
            l-52.216,30.092c-11.712,6.746-21.925,23.588-22.812,37.618l-8.95,141.596l6.123,3.535l94.682-55.353l8.862-140.181
            C469.673,252.99,467.676,247.99,464.092,245.62z"
                          />
                          <path
                            fill="#1173b9ee"
                            d="M463.636,348.484l5.591-88.44c0.446-7.054-1.551-12.054-5.135-14.424
            c-1.004-0.664-5.031-3.419-6.082-4.116c-3.544-2.349-8.645-2.124-14.472,1.233l-52.216,30.092
            c-5.976,3.442-11.553,9.519-15.709,16.503L463.636,348.484z"
                          />
                          <path
                            fill="opacity:0.2#FFFFFF"
                            d="M463.636,348.484l5.591-88.44c0.446-7.054-1.551-12.054-5.135-14.424
            c-1.004-0.664-5.031-3.419-6.082-4.116c-3.544-2.349-8.645-2.124-14.472,1.233l-52.216,30.092
            c-5.976,3.442-11.553,9.519-15.709,16.503L463.636,348.484z"
                          />
                          <g>
                            <path
                              fill="#455A64"
                              d="M464.084,245.633c-3.541-2.35-8.633-2.131-14.457,1.224l-52.216,30.092
              c-11.712,6.746-21.925,23.588-22.812,37.618l-8.916,141.011l8.403,4.851l94.635-54.618l8.862-140.181
              c0.437-6.916-1.478-11.847-4.933-14.265C471.202,250.351,465.51,246.58,464.084,245.633z"
                            />
                            <g>
                              <path
                                fill="opacity:0.3#37474F"
                                d="M381.714,293.431c-3.995,6.709-6.68,14.257-7.115,21.135l-8.916,141.011
                l8.403,4.851l94.635-54.618l3.269-51.713L381.714,293.431z"
                              />
                            </g>
                            <path
                              id="XMLID_3984_"
                              fill="#263238"
                              d="M374.086,460.429l8.868-140.276c0.887-14.03,11.1-30.871,22.812-37.618
              l52.216-30.092c11.712-6.746,20.487-0.842,19.6,13.187l-8.862,140.181L374.086,460.429z"
                            />
                          </g>
                        </g>
                      </g>
                      <g>
                        <path
                          id="XMLID_3980_"
                          fill="#1173b9ee"
                          d="M300.8,391.854l74.89,43.248l-28.584,16.503l-85.751-49.509l17.726-10.24
          C285.8,387.974,294.08,387.974,300.8,391.854z"
                        />
                        <path
                          id="XMLID_3979_"
                          fill="opacity:0.2#FFFFFF"
                          d="M300.8,391.854l74.89,43.248l-28.584,16.503l-85.751-49.509
          l17.726-10.24C285.8,387.974,294.08,387.974,300.8,391.854z"
                        />
                        <polygon
                          id="XMLID_3978_"
                          fill="#1173b9ee"
                          points="261.355,409.768 261.355,402.096 347.106,451.604 347.106,459.277 			
          "
                        />
                        <polygon
                          id="XMLID_3972_"
                          fill="opacity:0.3"
                          points="261.355,409.768 261.355,402.096 347.106,451.604 347.106,459.277 			"
                        />
                        <polygon
                          id="XMLID_3971_"
                          fill="#1173b9ee"
                          points="375.69,435.101 375.182,443.066 347.106,459.277 347.106,451.604 			"
                        />
                        <polygon
                          id="XMLID_3970_"
                          fill="#E0E0E05"
                          points="375.69,435.101 375.182,443.066 347.106,459.277 347.106,451.604 			"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="Speech_Bubble"
                    className="animate-appear  ease-linear transform origin-50-100  relative "
                  >
                    <g id="Speech_Bubble_00000096030644272593262010000004003085063330937011_">
                      <g id="Speech_Bubble_00000148632236302422510540000005146957878555128967_">
                        <path
                          fill="#FFFFFF"
                          d="M417.796,70.61c0.018,8.227-3.179,15.716-8.384,21.318l-2.58,2.461
          c-5.433,4.639-12.469,7.463-20.155,7.48c-17.199,0.036-31.223-13.92-31.259-31.119c-0.018-7.685,2.775-14.74,7.386-20.188
          l2.459-2.588c5.571-5.24,13.048-8.466,21.274-8.484C403.736,39.455,417.76,53.411,417.796,70.61z"
                        />
                        <path
                          fill="#455A64"
                          d="M386.529,36.847c-18.656,0.04-33.806,15.257-33.755,33.91
          c0.036,16.738,12.289,30.636,28.276,33.287l3.82,9.793c0.652,1.672,3.02,1.667,3.665-0.008l3.777-9.811
          c15.976-2.726,28.163-16.68,28.124-33.409C420.395,51.953,405.186,36.807,386.529,36.847z M417.796,70.61
          c0.018,8.227-3.179,15.716-8.384,21.318l-2.58,2.46c-5.433,4.639-12.469,7.463-20.155,7.48
          c-17.199,0.036-31.223-13.92-31.259-31.119c-0.018-7.685,2.775-14.74,7.386-20.188l2.459-2.588
          c5.571-5.24,13.048-8.466,21.274-8.484C403.736,39.455,417.76,53.411,417.796,70.61z"
                        />
                        <path
                          fill="opacity:0.7#FFFFFF"
                          d="M417.796,70.61c0.018,8.227-3.179,15.716-8.384,21.318l-2.58,2.46
          c-5.433,4.639-12.469,7.463-20.155,7.48c-17.199,0.036-31.223-13.92-31.259-31.119c-0.018-7.685,2.775-14.74,7.386-20.188
          l2.459-2.588c5.571-5.24,13.048-8.466,21.274-8.484C403.736,39.455,417.76,53.411,417.796,70.61z"
                        />
                      </g>
                      <g id="Check_1_">
                        <path
                          fill="#1173b9ee"
                          d="M381.821,90.165c-1.363,0-2.671-0.563-3.608-1.564L367.01,76.639
          c-1.866-1.992-1.763-5.12,0.229-6.986c1.993-1.867,5.121-1.762,6.986,0.229l7.276,7.769l17.215-21.805
          c1.689-2.143,4.796-2.51,6.942-0.817c2.143,1.692,2.509,4.8,0.817,6.942L385.7,88.285c-0.892,1.131-2.232,1.815-3.671,1.875
          C381.96,90.163,381.89,90.165,381.821,90.165z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
