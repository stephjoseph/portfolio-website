import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className="mb-[2.938rem] mt-16 hidden items-center justify-between md:flex xl:mb-[3.375rem]">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <ul className="flex items-center gap-[2.688rem]">
        <li>
          <a
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#5FB4A2]"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:text-[#5FB4A2] active:text-[#5FB4A2]"
            href="/portfolio"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:text-[#5FB4A2] active:text-[#5FB4A2]"
            href="/contact"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
