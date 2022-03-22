import mobileMakerImg from "../../images/portfolio/mobile/image-portfolio-maker.jpg";
import tabletMakerImg from "../../images/portfolio/tablet/image-portfolio-maker.jpg";
import desktopMakerImg from "../../images/portfolio/desktop/image-portfolio-maker.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Maker = () => {
  const makerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = makerRef.current;

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
      id="maker"
      ref={makerRef}
      className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:gap-[4.313rem] xl:w-[91.44%] xl:gap-[7.813rem] xl:self-end"
    >
      <div className="md:w-[49.20%] xl:w-[53.20%]">
        <img className="md:hidden" src={mobileMakerImg} alt="" />
        <img
          className="hidden md:block xl:hidden"
          src={tabletMakerImg}
          alt=""
        />
        <img className="hidden xl:block" src={desktopMakerImg} alt="" />
      </div>
      <div className="flex flex-col gap-6 border-y border-solid border-[#33323D]/[0.15] py-6 md:w-[40.78%] md:gap-0 md:pt-[2.063rem] md:pb-[3.125rem] xl:w-[34.48%] xl:py-[6.438rem]">
        <h2 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:mb-[1.813rem]">
          Maker
        </h2>
        <p className="text-[0.938rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:mb-[2.188rem]">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Flexbox for layout
          purposes. The only JavaScript this project required was for the custom
          form validation. I also used Tailwind as CSS Framework.
        </p>
        <Link
          className="flex h-12 w-[10.938rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          to="/portfolio/maker"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Maker;
