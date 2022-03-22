import logo from "./logo.svg";
import iconHamburger from "./images/icons/hamburger.svg";
import iconClose from "./images/icons/close.svg";
import React, { useState } from "react";

const MobileNav = () => {
  const [isActive, setisActive] = useState(false);

  function handleClick() {
    setisActive((prevState) => !prevState);
  }
  return (
    <nav>
      <div className="relative mt-8 mb-10 flex w-full items-center justify-between md:hidden">
        <a className="w-[3.755rem]" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          className={`${
            isActive ? "inactive-button" : ""
          } absolute top-[0.625rem] right-0 transition-[transform,_opacity] duration-300 ease-in`}
          id="openNav"
          type="button"
          onClick={handleClick}
        >
          <img src={iconHamburger} alt="" />
        </button>
        <button
          className={`${
            !isActive ? "inactive-button" : ""
          } absolute top-[0.438rem] right-[0.188rem] transition-[transform,_opacity] duration-300 ease-in`}
          id="closeNav"
          type="button"
          onClick={handleClick}
        >
          <img src={iconClose} alt="" />
        </button>
      </div>

      <div
        className={`${
          !isActive ? "inactive-nav" : ""
        } absolute top-[5.5rem] right-8 z-10 flex h-[11.625rem] w-[13.938rem] items-center justify-center bg-[#33323D] transition-opacity duration-300 ease-in md:hidden`}
        id="mobile-nav"
      >
        <ul className="flex h-[6.625rem] w-28 flex-col items-center justify-between gap-0 text-center">
          <li>
            <a
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              href="/portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              href="/contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
