import Projects from "./Projects";
import CTA from "../CTA";

const Main = () => {
  return (
    <main className="flex w-full max-w-[40rem] flex-col gap-[7.188rem] md:mt-[2.938rem] md:max-w-[64rem] md:gap-24 xl:mt-10 xl:max-w-[96rem] xl:gap-[9.375rem]">
      <Projects />
      <CTA />
    </main>
  );
};

export default Main;
