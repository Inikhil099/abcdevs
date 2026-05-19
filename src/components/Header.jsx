import React, { useEffect, useState } from "react";
import ABCLogo from "../assets/ABCLogo.webp";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header({ setDarkModeState, isDarkmode, formRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSideBar, setisSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`sticky  ${scrolled ? "top-4 rounded-full border-white border" : "top-2 rounded-md border-none"} transition-all duration-300  mx-auto w-[90%]  z-50 max-w-7xl flex items-center justify-around  backdrop-blur-2xl py-1 gap-5`}
      >
        <div className="shrink-0">
          <img
            src={ABCLogo}
            className="aspect-video w-[100px] object-contain"
            alt="ABCLogo"
          />
        </div>

        <div className="max-w-lg hidden md:flex ">
          <ul className="flex justify-between items-center gap-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] border-b-2 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/services"}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/portfolio"}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/career"}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#c3581b] hidden md:block border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
                }
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-x-2.5 items-center">
          <button
            onClick={() =>
              formRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#ff695f] p-2.5 text-sm md:text-[15px]  rounded-full  rounded-br-xl cursor-pointer hover:opacity-80 text-white"
          >
            Contact Us Now
          </button>
          {/* <button
            onClick={setDarkModeState}
            className="cursor-pointer text-3xl"
          >
            {isDarkmode ? <MdLightMode /> : <MdDarkMode />}
          </button> */}
          <button
            onClick={() => setisSideBar(!isSideBar)}
            className="lg:hidden cursor-pointer text-3xl"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* // sidebar  */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button
            onClick={() => setisSideBar(false)}
            className="cursor-pointer"
          >
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <div className="shrink-0">
            <img
              src={ABCLogo}
              className="aspect-video w-[100px] object-contain"
              alt="ABCLogo"
            />
          </div>

          <nav className="space-y-4">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/"}
              className="block text-gray-600 hover:text-black"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/services"}
              className="block text-gray-600 hover:text-black"
            >
              Services
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/about"}
              className="block text-gray-600 hover:text-black"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/portfolio"}
              className="block text-gray-600 hover:text-black"
            >
              Portfolio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/carrer"}
              className="block text-gray-600 hover:text-black"
            >
              Career
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#c3581b] border-b-2 p-1 border-[#c3581b]" : "linkHover"}
   `
              }
              to={"/contact"}
              className="block text-gray-600 hover:text-black"
            >
              Contact Us
            </NavLink>
            <button
              onClick={() =>
                formRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#ff695f] rounded-tr-2xl hover:-translate-y-2 transition-all duration-500 rounded-bl-2xl p-2.5 cursor-pointer hover:opacity-80 text-white"
            >
              Contact Us Now
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
