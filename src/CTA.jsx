import { useEffect, useRef } from "react";

const CTA = () => {
  const CTARef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollToPlugin);

    const element = CTARef.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        toggleActions: "play none none pause",
      },
      duration: 1,
      y: 0,
      opacity: 1,
    });
  });
  return (
    <section
      ref={CTARef}
      className="flex translate-y-[100px] flex-col items-center opacity-0 md:flex-row md:gap-8"
      id="CTA"
    >
      <h2 className="mb-[1.75rem] text-center font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] md:w-[21.875rem] md:text-left">
        Interested in doing a project together?
      </h2>
      <hr className="hidden h-px flex-grow md:block" />
      <a
        className="flex h-12 w-[10.125rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
        href="/contact"
      >
        Contact Me
      </a>
    </section>
  );
};

export default CTA;
