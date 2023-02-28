import Image, { StaticImageData } from "next/image";

type TFeatureItemProps = {
  icon: StaticImageData;
  title: string;
};

// hover:bg-[#1A0048] hover:font-bold hover:text-white

const FeatureItem = ({ icon, title }: TFeatureItemProps) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-gray-100 bg-white py-7 px-2 text-[#1A0048] shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
      <div>
        {/* <span className="text-lg">{icon}</span> */}
        <Image src={icon} alt={"icon"} />
      </div>
      <div>
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  );
};

export { FeatureItem };
