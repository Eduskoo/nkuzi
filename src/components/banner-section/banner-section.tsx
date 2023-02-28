import Image from "next/image";
import BannerImage from "../../../public/banner-image.png";

const BannerSection = () => {
  return (
    <div className="bg-[#1A0048] pt-20 text-white lg:pl-[56px] lg:pt-[58px]">
      {/* <div className="my-0 mx-auto w-11/12 max-w-[1107px] lg:mx-0 lg:w-full lg:max-w-none"> */}
      <div className="my-0 mx-auto w-11/12 max-w-[1107px] lg:mx-0 lg:w-full lg:max-w-none">
        <div className="grid grid-cols-1 place-items-center gap-[71px] lg:grid-cols-2">
          <div className="flex flex-col items-center lg:mb-[128px] lg:items-start lg:justify-start">
            <h2 className="text-center text-4xl font-bold md:text-[52px] md:leading-[64px] lg:w-[557px] lg:text-left ">
              One-stop platform providing a soft landing for International
              Students
            </h2>
            <div className="mt-[58px] text-xl">
              <a className="cursor-pointer rounded-lg border-4  border-[#B063FF] px-8 py-3 text-xl font-semibold text-white shadow-sm transition-all  md:text-2xl">
                Learn more
              </a>
            </div>
            {/* <p className="mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae natus commodi voluptates obcaecati quo corrupti
              dignissimos incidunt illo autem exercitationem.
            </p> */}
          </div>
          <div>
            <Image src={BannerImage} alt={""} className="shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerSection };
