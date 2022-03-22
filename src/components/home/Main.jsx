import AboutMe from "./AboutMe";
import CTA from "../CTA";

const Main = () => {
  return (
    <main className="mb-20 flex w-full max-w-[40rem] flex-col gap-[7.188rem] px-8 md:mb-24 md:max-w-[64rem] md:gap-24 md:px-[2.438rem] xl:mb-[9.375rem] xl:max-w-[96rem] xl:gap-[9.375rem] xl:px-[10.313rem]">
      <AboutMe />
      <CTA />
    </main>
  );
};

export default Main;
