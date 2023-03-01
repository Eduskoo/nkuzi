import Link from "next/link";

const WaitListSection = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-[#E8E6ED] py-8">
      <div className="flex flex-col items-center justify-center gap-9 md:flex-row">
        <h2 className="text-center text-2xl text-black md:text-5xl">
          Join our waiting list
        </h2>
        <div>
          <Link
            href={"/waitlist"}
            className="cursor-pointer rounded-lg bg-[#1A0048] px-8 py-3 text-xl font-normal text-white shadow-sm transition-all hover:bg-white hover:text-[#1A0048] md:text-4xl"
          >
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export { WaitListSection };
