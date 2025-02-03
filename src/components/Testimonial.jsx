import React from "react";
import testImage from "../assets/testimoials1.png";
import testImage2 from "../assets/testimoials2.png";
import testImage3 from "../assets/testimoials3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimoialsData = [
  {
    image: testImage,
    Title: "Lorem ipsum dolor sit amet.",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed.",
    descroption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam harum beatae aliquam nemo voluptates totam deserunt perferendis repellat, quidem voluptatem?",
  },
  {
    image: testImage2,
    Title: "Lorem ipsum dolor sit amet.",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed.",
    descroption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam harum beatae aliquam nemo voluptates totam deserunt perferendis repellat, quidem voluptatem?",
  },
  {
    image: testImage3,
    Title: "Lorem ipsum dolor sit amet.",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed.",
    descroption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam harum beatae aliquam nemo voluptates totam deserunt perferendis repellat, quidem voluptatem?",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-[60px] xl:py-[100px] bg-[#1173b942]">
        <div className="container">
          <div className="row">
            <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px]  font-Primary font-bold mb-[50px] uppercase tracking-wider wow animate__animated animate__zoomIn">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {testimoialsData.map((Testimonial, index) => (
            <div className="w-4/12 px-[10px] 2xl:px-[20px] ">
              <div
                key={index}
                className="relative overflow-hidden border-[3px] border-Primary p-[30px] rounded-2xl transition-all duration-[0.5s] hover:text-white before:absolute before:w-0 before:h-full before:top-0 before:bg-custom-gradient3 before:rounded-2xl before:bottom-0 before:left-auto before:right-0  before:duration-[0.5s] hover:before:w-[100%]  before:blur-2xl before:z-[-1]  after:absolute after:w-0 after:h-full after:top-0 after:bg-custom-gradient3 after:rounded-2xl after:bottom-0 after:left-0 after:right-auto  after:duration-[0.5s] hover:after:w-[100%] after:rotate-[180deg]  after:blur-2xl after:z-[-1]"
              >
                <div className="flex w-[12%] mb-[30px] wow animate__animated animate__zoomIn">
                  <img
                    src={Testimonial.image}
                    alt=""
                    className=" rounded-[100px]"
                  />
                </div>
                <div className="">
                  <h3 className="text-[26px] wow animate__animated animate__zoomIn">{Testimonial.Title}</h3>
                  <h5 className="pb-[30px] text-[18px] wow animate__animated animate__zoomIn">
                    {Testimonial.subTitle}
                  </h5>
                  <p className="wow animate__animated animate__zoomIn">{Testimonial.descroption}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Testimonial;
