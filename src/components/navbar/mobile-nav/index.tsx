import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";

type MobileNavProps = {
  menuActive: boolean;
  setNavIconClicked: Dispatch<SetStateAction<boolean>>;
};

const MobileNav: React.FC<MobileNavProps> = ({
  menuActive,
  setNavIconClicked,
}) => {
  const handleClick = () => {
    setNavIconClicked(!menuActive);
  };
  return (
    <>
      <div
        className={`fixed top-0 ${
          menuActive ? "right-0" : "-right-80"
        } m-auto flex h-screen w-72 flex-col border bg-white p-2 ${
          menuActive ? "opacity-100" : "opacity-0"
        } shadow-sm transition delay-150 ease-in-out lg:hidden`}
      >
        <div
          className="mx-auto cursor-pointer p-5 text-center text-2xl"
          onClick={handleClick}
        >
          <MdClose />
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link
            className="font-[500] hover:opacity-20"
            href="/#about"
            scroll={false}
            onClick={() => setNavIconClicked(false)}
          >
            About Us
          </Link>
          <Link
            className="font-[500] hover:opacity-20"
            href="/#contact"
            scroll={false}
            onClick={() => setNavIconClicked(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export { MobileNav };
