import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid h-[40vh] w-full place-items-center gap-10 md:h-[72vh] xl:h-[46.75vh]">
      <h1 className="text-center font-['Ibarra_Real_Nova'] text-[3.125rem] leading-[3.125rem] tracking-[-0.45px]">
        404 - Not Found!
      </h1>
      <Link
        className="flex h-12 w-[10.125rem] items-center justify-center border border-solid border-[#33323D] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] hover:bg-[#33323D] hover:text-white active:bg-[#33323D] active:text-white"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
