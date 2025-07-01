import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Navbar component definition
const Navbar = () => {
  // State for toggling the mobile menu
  const [toggle, setToggle] = useState(false);
  // State for tracking if the navbar is scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render the navbar
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent" // Make navbar transparent when not scrolled
      }`}
    >
      {/* Navbar container */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and site title, clicking resets active and scrolls to top */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Omar &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </p>
        </Link>

        {/* Desktop navigation links */}
        <ul className='list-none hidden sm:flex flex-row gap-10 flex-1 justify-end items-center'>
          <a href="https://drive.google.com/file/d/1AiRpSDFofWueg0du5gVDTx3Kflv-Ma_K/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          
            <div className="rounded-full px-4 py-2 bg-secondary hover:bg-purple-100 transition-colors duration-300">
              <li
                className='text-black text-[18px] font-medium cursor-pointer'
                onClick={() => {
                  // go to CV
                }}
              >
                Get CV
              </li>
            </div>
          </a>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={
                "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              }
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon and dropdown */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Hamburger or close icon */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile dropdown menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={
                    "font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                  }
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
