import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import Logo from "../assets/Logo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Service",
    path: "/service",
    submenu: [
      { name: "Web Development", path: "/service/web-development" },
      { name: "App Development", path: "/service/app-development" },
      { name: "SEO", path: "/service/seo" },
      { name: "Custom Software Development", path: "/service/seo" },
      { name: "DevOps Consulting", path: "/service/seo" },
      { name: "Product UI/UX Design ", path: "/service/seo" },
      { name: "Database and Cloud Transformation", path: "/service/seo" },
    ],
  },
  {
    name: "TECHNOLOGIES",
    path: "/technologies",
    Techsubmenu: [
      { name: "React", path: "/technologies/react" },
      { name: "Angular", path: "/technologies/nodejs" },
      { name: "Next JS", path: "/technologies/python" },
      { name: "Vue", path: "/technologies/aws" },
    ],
  },
  {
    name: "Company",
    path: "/company",
  },
];

const Header = () => {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleMouseEnter = (index) => {
    setDropdownOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpenIndex(null);
  };

  return (
    <header className={`p-4 bg-white duration-700 lg:shadow-xl  ${mobileMenuOpen ? "shadow-none" : "shadow-xl"} sticky top-0 z-50 animate-slideDown `}>
      <div className="container xl:mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 sm:h-[50px] md:h-[65px]" />
          </Link>
          <div className="flex lg:w-[78%] xl:w-[75%] 2xl:w-[72%] 3xl:w-[68%] justify-between hidden lg:flex items-center">
            <nav
              className={`${mobileMenuOpen ? "block" : "hidden"}
    lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ease-in-out`}
            >
              <ul className="flex flex-col lg:flex-row">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative px-2 xl:px-4 py-2 lg:py-0"
                    onMouseEnter={() => link.submenu && handleMouseEnter(index)}
                    onMouseLeave={() => link.submenu && handleMouseLeave()}
                  >
                    <NavLink
                      to={link.path || "#"}
                      className={({ isActive }) =>
                        `uppercase font-semibold text-[16px] 2xl:text-[18px] font-Secondary tracking-widest duration-200 ${isActive || (link.path === "/" && window.location.pathname === "/")
                          ? "text-Primary"
                          : "text-gray-700"
                        } hover:text-Primary`
                      }
                    >
                      {link.name}
                    </NavLink>
                    {link.submenu && (
                      <ul
                        className={`absolute left-0 right-0 top-full bg-white shadow-process w-max z-10 overflow-hidden transition-all duration-300 ease-in-out  ${dropdownOpenIndex === index ? "max-h-[500px]" : "max-h-0"
                          }`}
                        style={{
                          transition: "max-height 0.4s ease-in-out",
                        }}
                      >
                        {link.submenu.map((submenuItem, id) => (
                          <li key={id}>
                            <NavLink
                              to={submenuItem.path || "#"}
                              className={({ isActive }) =>
                                `block px-6 py-4 text-[14px] hover:bg-Primary hover:text-white font-Secondary tracking-wider uppercase font-semibold border-b-[1px] border-[#00000018] ${isActive ? "text-Primary" : "text-gray-700"
                                }`
                              }
                            >
                              {submenuItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    {link.Techsubmenu && (
                      <ul
                        className={`absolute left-0 right-0 top-full bg-white shadow-process w-max z-10 overflow-hidden transition-all duration-300 ease-in-out  ${dropdownOpenIndex === index ? "max-h-[500px]" : "max-h-0"
                          }`}
                        style={{
                          transition: "max-height 0.4s ease-in-out",
                        }}
                      >
                        {link.Techsubmenu.map((TechsubmenuItem, id) => (
                          <li key={id}>
                            <NavLink
                              to={TechsubmenuItem.path || "#"}
                              className={({ isActive }) =>
                                `block px-6 py-4 text-[14px] hover:bg-Primary hover:text-white font-Secondary tracking-wider uppercase font-semibold border-b-[1px] border-[#00000018] ${isActive ? "text-Primary" : "text-gray-700"
                                }`
                              }
                            >
                              {TechsubmenuItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="py-3 px-6 bg-Primary text-white rounded-lg hover:bg-primary-dark uppercase font-semibold font-Secondary border-[3px] border-Primary tracking-wider transition-all duration-[0.3s] hover:bg-white hover:text-Primary hover:border-[3px] hover:border-Primary"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hamburger-menu block lg:hidden">
            <Link
              to="#"
              className="text-[20px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CgClose /> : <GiHamburgerMenu />}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`duration-500 ${mobileMenuOpen ? "top-[100px]" : "-top-[400px]"}
        ${mobileMenuOpen ? "shadow-lg" : "shadow-none"} absolute left-0 w-full bg-white transition-all duration-500 ease-in-out block lg:hidden z-[-1] pt[20px] pb-[30px] px-[10px]`}
      >
        <ul className="">
          {navLinks.map((link, index) => (
            <li key={index} className="text-center p-[10px] uppercase font-semibold text-gray-700 hover:text-Primary duration-200 ">
              <Link to={link.path || "#"} className={({ isActive }) => ` ${isActive ? "text-Primary" : ""} `}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center pt-[30px]">
          <Link
            to="/contact"
            className="py-3 px-6 bg-Primary text-white rounded-lg hover:bg-primary-dark uppercase font-semibold font-Secondary tracking-wider border-[3px] border-Primary transition-all duration-[0.3s] hover:bg-white hover:text-Primary hover:border-[3px] hover:border-Primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


