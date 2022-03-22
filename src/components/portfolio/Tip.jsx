import mobileTipImg from "../../images/portfolio/mobile/image-portfolio-tip.jpg";
import tabletTipImg from "../../images/portfolio/tablet/image-portfolio-tip.jpg";
import desktopTipImg from "../../images/portfolio/desktop/image-portfolio-tip.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Tip = () => {
  const tipRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = tipRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -300,
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
      id="tip"
      ref={tipRef}
      className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:gap-[4.313rem] xl:w-[91.44%] xl:gap-[7.813rem] xl:self-end"
    >
      <div className="md:w-[49.20%] xl:w-[53.20%]">
        <img className="md:hidden" src={mobileTipImg} alt="" />
        <img className="hidden md:block xl:hidden" src={tabletTipImg} alt="" />
        <img className="hidden xl:block" src={desktopTipImg} alt="" />
      </div>
      <div className="flex flex-col gap-6 border-y border-solid border-[#33323D]/[0.15] py-6 md:w-[40.78%] md:gap-0 md:pt-[2.063rem] md:pb-[3.125rem] xl:w-[34.48%] xl:py-[6.438rem]">
        <h2 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:mb-[1.813rem]">
          Tip Calculator
        </h2>
        <p className="text-[0.938rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:mb-[2.188rem]">
          This project was built with HTML, CSS, and JavaScript. I had mobile
          and desktop designs to work with and built it so that it was
          responsive. I took a mobile-first approach and used modern CSS like
          Flexbox and Grid for layout purposes. I also used Tailwind as CSS
          Framework. The JavaScript this project required was for the app to
          calculate the correct tip and total cost of the bill per person.
        </p>
        <Link
          className="flex h-12 w-[10.938rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          to="/portfolio/tip"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Tip;
