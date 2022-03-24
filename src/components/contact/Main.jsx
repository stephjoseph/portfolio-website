import ContactMe from "./ContactMe";
import GetInTouch from "./GetInTouch";

const Main = () => {
  return (
    <div className="flex w-full max-w-[40rem] flex-col gap-8 md:mt-10 md:max-w-[64rem] md:gap-8 xl:max-w-[96rem]">
      <GetInTouch />
      <ContactMe />
    </div>
  );
};

export default Main;
