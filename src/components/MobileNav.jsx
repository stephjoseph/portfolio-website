import logo from "../logo.svg";
import iconHamburger from "../images/icons/hamburger.svg";
import iconClose from "../images/icons/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isActive, setisActive] = useState(false);

  function handleClick() {
    setisActive((prevState) => !prevState);
  }
  return (
    <nav>
      <div className="relative flex w-full items-center justify-between pb-10 pt-8 md:hidden">
        <Link className="w-[3.755rem]" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className={`${
            isActive ? "inactive-button" : ""
          }  transition-[transform,_opacity] duration-300 ease-in`}
          id="openNav"
          type="button"
          onClick={handleClick}
        >
          <img src={iconHamburger} alt="" />
        </button>
        <button
          className={`${
            !isActive ? "inactive-button" : ""
          } absolute right-[0.188rem] transition-[transform,_opacity] duration-300 ease-in`}
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
            <Link
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              to="/"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              to="/portfolio"
              onClick={handleClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white"
              to="/contact"
              onClick={handleClick}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
