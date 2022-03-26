import mobileOfficeliteImg from "../../images/portfolio/mobile/image-portfolio-officelite.jpg";
import tabletOfficeliteImg from "../../images/portfolio/tablet/image-portfolio-officelite.jpg";
import desktopOfficeliteImg from "../../images/portfolio/desktop/image-portfolio-officelite.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Tip = () => {
  const officeliteRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: "#root",
    });

    const element = officeliteRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 300,
      },
      {
        scrollTrigger: {
          trigger: element,
          toggleActions: "restart reverse play pause",
        },
        duration: 1.5,
        x: 0,
        opacity: 1,
      }
    );
  });

  return (
    <div
      id="officelite"
      ref={officeliteRef}
      className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4.313rem] xl:w-[91.44%] xl:gap-[7.813rem]"
    >
      <div className="md:w-[49.20%] xl:w-[53.20%]">
        <img className="md:hidden" src={mobileOfficeliteImg} alt="" />
        <img
          className="hidden md:block xl:hidden"
          src={tabletOfficeliteImg}
          alt=""
        />
        <img className="hidden xl:block" src={desktopOfficeliteImg} alt="" />
      </div>
      <div className="flex flex-col gap-6 border-y border-solid border-[#33323D]/[0.15] py-6 md:w-[40.78%] md:gap-0 md:pt-[2.063rem] md:pb-[3.125rem] xl:w-[34.48%] xl:py-[6.438rem]">
        <h2 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:mb-[1.813rem]">
          Officelite
        </h2>
        <p className="text-[0.938rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:mb-[2.188rem]">
          This project required me to build a fully responsive coming soon site
          to the designs provided. I used HTML5, along with CSS Flexbox and CSS
          Grid for layout purposes. I also used Tailwind as CSS Framework. The
          JavaScript this project required was for the sign-up form validation
          and countdown timer functionality.
        </p>
        <Link
          className="flex h-12 w-[10.938rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          to="/portfolio/officelite"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Tip;
