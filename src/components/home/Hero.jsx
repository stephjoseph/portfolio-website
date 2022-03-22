import { useRef, useEffect } from "react";
import mobileHeroImg from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import tabletHeroImg from "../..//images/homepage/tablet/image-homepage-hero@2x.jpg";
import desktopHeroImg from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";

const Hero = () => {
  const heroRef = useRef(null);

  function handleClick() {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#about-me", offsetY: 50 },
    });
  }

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const element = heroRef.current;
    gsap.to(element.querySelector("#hero-heading"), {
      duration: 3.5,
      text: {
        value: `Hey, I’m
          <span class="text-[#5FB4A2]">S</span><span class="text-[#5FB4A2]">t</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">p</span><span class="text-[#5FB4A2]">h</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">n</span>
          <span class="text-[#5FB4A2]">J</span><span class="text-[#5FB4A2]">o</span><span class="text-[#5FB4A2]">s</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">p</span><span class="text-[#5FB4A2]">h</span>
          and I love building <span class="text-[#5FB4A2]">b</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">a</span><span class="text-[#5FB4A2]">u</span><span class="text-[#5FB4A2]">t</span><span class="text-[#5FB4A2]">i</span><span class="text-[#5FB4A2]">f</span><span class="text-[#5FB4A2]">u</span><span class="text-[#5FB4A2]">l</span>
          <span class="text-[#5FB4A2]">w</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">b</span><span class="text-[#5FB4A2]">s</span><span class="text-[#5FB4A2]">i</span><span class="text-[#5FB4A2]">t</span><span class="text-[#5FB4A2]">e</span><span class="text-[#5FB4A2]">s</span>`,
      },

      ease: Sine.easeIn,
    });
  });

  return (
    <div ref={heroRef} className="relative">
      <div className="mb-6 md:mb-0">
        <img className="md:hidden" src={mobileHeroImg} alt="" />
        <img className="hidden md:block xl:hidden" src={tabletHeroImg} alt="" />
        <img className="hidden xl:block" src={desktopHeroImg} alt="" />
      </div>
      <div className="relative flex flex-col gap-8 bg-[#FAFAFA] md:absolute md:left-0 md:bottom-0 md:h-[17.375rem] md:w-[32.125rem] md:gap-12 md:pr-14 md:pt-14 xl:h-[22.313rem] xl:w-[27.813rem] xl:gap-[3.313rem]">
        <h1
          id="hero-heading"
          className="h-full w-full font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:h-[16.4vw] xl:h-[13.88vw] xl:text-[3.125rem] xl:leading-[3.125rem]"
        ></h1>
        <button
          id="aboutMeBtn"
          onClick={handleClick}
          className="group flex w-[12.5rem] items-center bg-[#203A4C] hover:bg-[#5FB4A2] active:bg-[#5FB4A2]"
          type="button"
        >
          <div className="flex h-12 w-12 items-center justify-center bg-black bg-opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
              <g
                fill="none"
                className="group-hover:stroke-white group-active:stroke-white"
                fillRule="evenodd"
                stroke="#5FB4A2"
              >
                <path d="M0 9l8 4 8-4" />
                <path opacity=".5" d="M0 5l8 4 8-4" />
                <path opacity=".25" d="M0 1l8 4 8-4" />
              </g>
            </svg>
          </div>
          <p className="w-[152px] text-center text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white">
            About Me
          </p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
