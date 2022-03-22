import logo from "../logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden items-center justify-between pb-[2.938rem] pt-16 md:flex xl:pb-[3.375rem]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="flex items-center gap-[2.688rem]">
        <li>
          <NavLink
            activeStyle={{ color: "#5FB4A2" }}
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] "
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "#5FB4A2" }}
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:text-[#5FB4A2] active:text-[#5FB4A2]"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "#5FB4A2" }}
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:text-[#5FB4A2] active:text-[#5FB4A2]"
            to="/contact"
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
