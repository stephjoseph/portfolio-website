import mobileCrowdfundingImg from "../../images/portfolio/mobile/image-portfolio-crowdfunding.jpg";
import tabletCrowdfundingImg from "../../images/portfolio/tablet/image-portfolio-crowdfunding.jpg";
import desktopCrowdfundingImg from "../../images/portfolio/desktop/image-portfolio-crowdfunding.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Crowdfunding = () => {
  const crowdfundingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: "#root",
    });

    const element = crowdfundingRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -300,
      },
      {
        scrollTrigger: {
          trigger: element,
        },
        duration: 1.5,
        x: 0,
        opacity: 1,
      }
    );
  });
  return (
    <div
      id="crowdfunding"
      ref={crowdfundingRef}
      className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:gap-[4.313rem] xl:w-[91.44%] xl:gap-[7.813rem] xl:self-end"
    >
      <div className="md:w-[49.20%] xl:w-[53.20%]">
        <img className="md:hidden" src={mobileCrowdfundingImg} alt="" />
        <img
          className="hidden md:block xl:hidden"
          src={tabletCrowdfundingImg}
          alt=""
        />
        <img className="hidden xl:block" src={desktopCrowdfundingImg} alt="" />
      </div>
      <div className="flex flex-col gap-6 border-y border-solid border-[#33323D]/[0.15] py-6 md:w-[40.78%] md:gap-0 md:pt-[2.063rem] md:pb-[3.125rem] xl:w-[34.48%] xl:py-[6.438rem]">
        <h2 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:mb-[1.813rem]">
          Crowdfunding
        </h2>
        <p className="text-[0.938rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:mb-[2.188rem]">
          This project required me to build a crowdfunding product page to the
          designs provided. I used HTML5, along with CSS Flexbox for layout
          purposes. I also used Tailwind as CSS Framework. The JavaScript
          required for this project were to make a selection of which pledge to
          make, see an updated progress bar and total money raised, see the
          number of total backers increment, and toggle whether or not the
          product is bookmarked.
        </p>
        <Link
          className="flex h-12 w-[10.938rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          to="/portfolio/crowdfunding"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Crowdfunding;
