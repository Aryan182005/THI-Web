import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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
      {
        name: "Front End",
        items: [
          { name: "React" },
          { name: "Angular" },
          { name: "Next JS" },
          { name: "Vue" },
        ],
      },
      {
        name: "Back End",
        items: [
          { name: "Php" },
          { name: "Node" },
          { name: "Python"},
          { name: "Java"},
        ],
      },
      {
        name: "Frameworks",
        items: [
          { name: "Codeigniter" },
          { name: "Laravel"},
          { name: "Cake Php" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        name: "Mobile",
        items: [
          { name: "React Native"},
          { name: "Flutter (Dart)"},
          { name: "Android"},
          { name: "iOS"},
        ],
      },
    ],
  },
  {
    name: "TECHNOLOGIES",
    path: "/technologies",
  },
  {
    name: "Company",
    path: "/company",
  },
];

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);


  const handleMouseEnter = (index) => {
    setDropdownOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpenIndex(null);
  };

  return (
    <header className={`p-4 bg-white duration-700 shadow-xl  ${mobileMenuOpen ? "shadow-none" : "shadow-xl"} sticky top-0 z-50 animate-slideDown `}>
      <div className="container xl:mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.name}
                    </NavLink>
                    {link.submenu && (
                      <ul
                        className={`flex absolute left-0 right-0 top-full bg-white shadow-process w-max z-10 overflow-hidden transition-all duration-300 ease-in-out rounded-lg  ${dropdownOpenIndex === index ? "max-h-[500px]" : "max-h-0"
                          }`}
                        style={{
                          transition: "max-height 0.4s ease-in-out",
                        }}
                      >
                        {link.submenu.map((submenuCategory, id) => (
                          <li key={id} className="px-8 py-6 border-r-[1px]">
                            <h3 className="text-[18px] font-semibold text-gray-800 font-Secondary uppercase pb-[10px] tracking-wider">{submenuCategory.name}</h3>
                            <ul>
                              {submenuCategory.items.map((submenuItem, subId) => (
                                <li key={subId}>
                                  <NavLink
                                    className={({ isActive }) =>
                                      `block text-[14px] py-[10px]  font-Secondary tracking-wider font-semibold  text-gray-700
                                      }`
                                    }
                                    onClick={() => window.scrollTo(0, 0)}
                                  >
                                    {submenuItem.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <button class="relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px]">
              Contact Us
              <span class="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
            </button>
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
        className={`duration-500 ${mobileMenuOpen ? "top-[70px]" : "-top-[410px]"} ${mobileMenuOpen ? "top-[70px]" : "-top-[410px]"}
        ${mobileMenuOpen ? "shadow-lg" : "shadow-none"} absolute left-0 w-full bg-white transition-all duration-500 ease-in-out block lg:hidden z-[-1] pt[20px] pb-[30px] px-[10px]`}
      >
        <ul className="">
          {navLinks.map((link, index) => (
            <li key={index} className="text-center px-[10px] py-[20px] uppercase font-semibold text-gray-700 hover:text-Primary duration-200 border-b-[1px] border-dotted border-[#0000003d]">
              <NavLink to={link.path || "#"} className={({ isActive }) => ` ${isActive ? "text-Primary" : ""} `} onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex justify-center pt-[30px]">
          <button class="relative flex items-center justify-center xl:justify-start   group  overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white  hover:border-[3px]">
            Contact Us
            <span class="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};


export default Header;


