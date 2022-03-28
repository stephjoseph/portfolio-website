import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mobileAboutImg from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import tabletAboutImg from "../../images/homepage/tablet/image-homepage-profile@2x.jpg";
import desktopAboutImg from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";

const AboutMe = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollToPlugin);
    ScrollTrigger.defaults({
      scroller: "#root",
    });

    const element = aboutRef.current;

    gsap.fromTo(
      element.querySelector("#about-img"),
      { opacity: 0, x: -300 },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play none none pause",
        },
        duration: 1.5,
        x: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      element.querySelector("#about-content"),
      {
        opacity: 0,
        x: 300,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play none none pause",
        },
        duration: 1.5,
        x: 0,
        opacity: 1,
      }
    );
  });

  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4.313rem] xl:w-[91.44%] xl:gap-[7.813rem]"
      id="about-me"
    >
      <div id="about-img" className="md:w-[40.78%] xl:w-[53.20%]">
        <img className="md:hidden" src={mobileAboutImg} alt="" />
        <img
          className="hidden md:block xl:hidden"
          src={tabletAboutImg}
          alt=""
        />
        <img className="hidden xl:block" src={desktopAboutImg} alt="" />
      </div>
      <div
        id="about-content"
        className="flex flex-col border-y border-solid border-[#33323D]/[0.15] pt-[2.063rem] pb-[3.25rem] opacity-0 md:w-[49.20%] md:pb-[2.938rem] md:pt-[3.188rem] xl:w-[34.48%]"
      >
        <h2 className="mb-[1.75rem] font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D]">
          About Me
        </h2>
        <p className="mb-6 text-base font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80">
          I’m a self-taught front-end developer open for a junior position in an
          exciting company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Cebu, Philippines, but I’m happy working remotely and
          have experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or a motorbike ride. I’d love you to check out my work.
        </p>
        <Link
          className="flex h-12 w-[12.625rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] uppercase leading-[0.875rem] tracking-[2px] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          to="/portfolio"
        >
          Go to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
