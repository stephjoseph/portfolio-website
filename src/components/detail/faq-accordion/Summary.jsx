const Summary = () => {
  return (
    <section className="flex flex-col border-y border-solid border-[#33323D]/[0.15] py-6 md:flex-row md:gap-[0.75rem] md:py-8 xl:h-[41.77%] xl:w-[31.53%] xl:py-12">
      <div className="flex flex-col gap-6 md:w-[49.05%] md:gap-4 xl:w-full xl:gap-0">
        <h1 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] xl:mb-[1.813rem]">
          FAQ Accordion
        </h1>
        <p className="text-base font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:hidden xl:mb-[1.438rem] xl:block">
          This project was built with HTML, CSS, and JavaScript. I had mobile
          and desktop designs to work with and built it so that it was
          fully-responsive. I took a mobile-first approach and used modern CSS
          like Flexbox and Grid for layout purposes. The JavaScript this project
          required was for the accordion to be interactive.
        </p>
        <div className="flex flex-col xl:mb-8">
          <p className="text-[0.813rem] font-bold leading-[1.875rem] tracking-normal text-[#5FB4A2]">
            Interactive Design / Front End Development
          </p>
          <p className="text-[0.813rem] font-bold leading-[1.875rem] tracking-normal text-[#5FB4A2]">
            HTML / CSS / JS
          </p>
        </div>
        <a
          className="flex h-12 w-[11.125rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-[#33323D] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
          href="https://faq-accordion-card-by-stephjoseph.netlify.app/"
          target="_blank"
        >
          Visit Website
        </a>
      </div>
      <p className="hidden w-[49.20%] text-[0.938rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D]/80 md:block xl:hidden">
        This project was built with HTML, CSS, and JavaScript. I had mobile and
        desktop designs to work with and built it so that it was
        fully-responsive. I took a mobile-first approach and used modern CSS
        like Flexbox and Grid for layout purposes. The JavaScript this project
        required was for the accordion to be interactive.
      </p>
    </section>
  );
};

export default Summary;
