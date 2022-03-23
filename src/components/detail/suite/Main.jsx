import CTA from "../../CTA";
import Background from "./Background";
import Previews from "./Previews";
import PrevNext from "./PrevNext";
import Description from "./Description";

const Main = () => {
  return (
    <main className=" flex w-full max-w-[40rem] flex-col md:max-w-[64rem] xl:max-w-[96rem]">
      <div className="mb-16 flex flex-col gap-12 md:mb-20 md:gap-10 xl:flex-row xl:gap-[7.813rem]">
        <Description />
        <div className="flex flex-col gap-10 xl:w-[57.20%]">
          <Background />
          <Previews />
        </div>
      </div>
      <PrevNext />
      <CTA />
    </main>
  );
};

export default Main;
