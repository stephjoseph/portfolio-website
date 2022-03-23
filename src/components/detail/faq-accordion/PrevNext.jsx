import { Link } from "react-router-dom";
import arrowLeft from "../../../images/icons/arrow-left.svg";
import arrowRight from "../../../images/icons/arrow-right.svg";

const PrevNext = () => {
  return (
    <div className="mb-16 flex md:mb-20 xl:mb-[7.188rem]">
      <div className="flex w-1/2 border-y border-r-[0.5px] border-solid border-[#33323D]/[0.15] py-6 md:py-8">
        <Link
          className="flex w-1/2 flex-col items-start gap-4 md:w-1/2 md:flex-row md:items-center md:gap-8"
          to="/portfolio/pod"
        >
          <div>
            <img src={arrowLeft} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-['Ibarra_Real_Nova'] text-[2rem] font-normal leading-9 tracking-[-0.29px] text-[#33323D]">
              Pod
            </h3>
            <p className="text-base font-normal leading-[1.875rem] tracking-normal text-[#33323D]/50">
              Previous Project
            </p>
          </div>
        </Link>
      </div>
      <div className="flex w-1/2 justify-end border-y border-l-[0.5px] border-solid border-[#33323D]/[0.15] py-6 md:py-8">
        <Link
          className="flex w-1/2 flex-col items-end gap-4 text-right md:w-1/2 md:flex-row-reverse md:items-center md:gap-8"
          to="/portfolio/tip"
        >
          <div>
            <img src={arrowRight} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-['Ibarra_Real_Nova'] text-[2rem] font-normal leading-9 tracking-[-0.29px] text-[#33323D]">
              Tip Calculator
            </h3>
            <p className="text-base font-normal leading-[1.875rem] tracking-normal text-[#33323D]/50">
              Next Project
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PrevNext;
