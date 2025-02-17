import website from "../assets/settings.png";
import android from "../assets/android.png";
import uiux from "../assets/ux-design.png";
import webhosting from "../assets/hosting.png";
import website_color from "../assets/settings color.png";
import android_color from "../assets/android color.png";
import uiux_color from "../assets/ux-design color.png";
import hosting_color from "../assets/hosting color.png";
import { Link } from "react-router-dom";

const serviceData = [
  {
    image: website,
    colorImage: website_color,
    title: "Website Development",
    decription:
      "Transform your website into a powerful business tool! Discover what’s holding you back and unlock its potential to drive growth and conversions.",
  },
  {
    image: android,
    colorImage: android_color,
    title: "Android App Development",
    decription:
      "Bring your app ideas to life! From hybrid to native development, we create cutting-edge mobile solutions tailored to your needs.",
  },
  {
    image: uiux,
    colorImage: uiux_color,
    title: "UI UX DESIGN",
    decription:
      "Create experiences that captivate users! From intuitive designs to seamless interfaces, we craft visuals that leave a lasting impression.",
  },
  {
    image: webhosting,
    colorImage: hosting_color,
    title: "Web Hosting",
    decription:
      "Supercharge your website with lightning-fast hosting! Say goodbye to slow loading times and boost your online business growth effortlessly.",
  },
];

const Service = () => {
  return (
    <>
      <section className="py-[60px] 2xl:py-[100px] border-b-[1px] border-dotted border-[#0000005c] dark:border-white bg-[#7c78781a] dark:bg-black ">
        <div className="container">
          <div className="row">
            <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] dark:text-white font-Secondary font-semibold mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
              <h2>Innovative IT Services</h2>
            </div>
            <div className="flex w-full flex-wrap xl:flex-nowrap xl:gap-[10px] 2xl:gap-[20px]">
              {serviceData.map((service, index) => (
                <div className="w-full md:w-6/12 xl:w-4/12 p-[10px] xl:p-0 wow animate__animated animate__zoomIn">
                  <div
                    key={index}
                    className="card group md:aspect-[1.5/1.5] lg:aspect-[1.5/1.1] xl:aspect-[1.5/1.9] 3xl:aspect-auto  py-[40px] xl:py-[50px] px-[20px] dark:shadow-chooseBox2  bg-white dark:bg-black dark:border-[3px] dark:text-Primary text-center rounded-2xl    relative overflow-hidden group"
                  >
                    <div className="w-[128px] h-[128px] bg-Primary z-[1] absolute top-[-75px] right-[390px] rounded-[50%] transition-all duration-[0.5s] ease-in group-hover:scale-[10]"></div>
                    <div className="relative z-[2]">
                      <div className="flex justify-center mb-[20px] wow animate__animated animate__zoomIn">
                        <div className="w-[80px] 2xl:w-[100px] 3xl:w-[120px] h-[80px] 2xl:h-[100px] 3xl:h-[120px] transition-all duration-[0.5s] ease-in bg-Primary group-hover:bg-white p-[30px] rounded-full transition-colors duration-300  relative">
                          <img
                            src={service.image}
                            alt=""
                            className=" absolute w-[40px] 2xl:w-[50px] 3xl:w-[65px] h-[40px] 2xl:h-[50px] 3xl:h-[65px] top-[22px] 2xl:top-[27px] left-[21px] 2xl:left-[26px] 3xl:left-[28px]  duration-300 "
                          />
                          <img
                            src={service.colorImage}
                            alt=""
                            className=" absolute w-[40px] 2xl:w-[50px] 3xl:w-[65px] h-[40px] 2xl:h-[50px] 3xl:h-[65px] top-[22px] 2xl:top-[27px] left-[21px] 2xl:left-[26px] 3xl:left-[28px] transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                          />
                        </div>
                      </div>
                      <h5 className="text-[22px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-Secondary pb-[10px] 2xl:pb-[20px] transition-all duration-[0.7s] group-hover:text-white wow animate__animated animate__zoomIn">
                        {service.title}
                      </h5>
                      <p className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] font-Secondary  transition-all duration-[0.7s] group-hover:text-white wow animate__animated animate__zoomIn">
                        {service.decription}
                      </p>
                    </div>
                  </div>  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
