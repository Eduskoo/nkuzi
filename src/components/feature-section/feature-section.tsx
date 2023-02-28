import { FeatureItem } from "./feature-item";
// import { FaHome } from "react-icons/fa";
import { HiOutlineCurrencyPound, HiOutlineHome } from "react-icons/hi";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { SectionTitle } from "../section-title";
import TutorialsImage from "../../../public/tutorials.png";
import FinanceImage from "../../../public/finance.png";
import JobsImage from "../../../public/jobs.png";
import HouseImage from "../../../public/house.png";

const FeatureSection = () => {
  return (
    <>
      <div className="bg-[#E8E6ED] py-11">
        <div className="my-0 mx-auto w-11/12 max-w-[1107px]">
          <div>
            <h1 className="text-center text-5xl font-bold text-[#1A0048] md:text-[52px]">
              Explore
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureItem title="Accommodation" icon={HouseImage} />
            <FeatureItem title="Jobs" icon={JobsImage} />
            <FeatureItem title="Finance" icon={FinanceImage} />
            <FeatureItem title="Tutorials" icon={TutorialsImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export { FeatureSection };
