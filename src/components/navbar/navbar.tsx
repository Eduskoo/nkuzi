import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/nkuzi-logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";

const Navabar = () => {
  const [navIconClicked, setNavIconClicked] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setNavIconClicked(!navIconClicked);
  };
  return (
    <>
      {/* <nav className="fixed top-0 left-0 flex h-14 w-full items-center justify-between bg-white transition duration-300">
       <div className="mx-[10%] flex w-[80%] items-center justify-between">
         <div className="h-6 w-6">
         <Image
           src={NkuziLogoDark}
           alt={""}
           width="100"
           className="transition duration-300"
         />
         </div>
         <h2>Nkuzi.co</h2>

         <div className="flex gap-4">
           <a>Features</a>
           <a>About Us</a>
           <a>Contact Us</a>
         </div>
       </div>
     </nav> */}
      {/* fixed top-0 left-0 */}
      <nav className="z-50 w-full bg-white shadow-xl backdrop-blur-sm">
        {/* <div className="my-0 mx-auto flex h-14 w-11/12  max-w-[1107px] items-center justify-between"> */}
        <div className="my-0 mx-auto flex h-14 w-11/12 max-w-[1107px] items-center justify-between lg:mx-0 lg:w-full lg:max-w-none lg:px-[56px]">
          <div>
            <Link href="/">
              <Image src={Logo} alt={"brand logo"} />
            </Link>
          </div>
          <div className="hidden gap-4 lg:flex">
            <Link
              className="font-[500] hover:opacity-20"
              href="/#about"
              scroll={false}
            >
              About Us
            </Link>
            <Link
              className="font-[500] hover:opacity-20"
              href="/#contact"
              scroll={false}
            >
              Contact Us
            </Link>
          </div>
          <div className="block cursor-pointer lg:hidden" onClick={handleClick}>
            <FaBars />
          </div>
        </div>
      </nav>
      <MobileNav
        menuActive={navIconClicked}
        setNavIconClicked={setNavIconClicked}
      />
    </>
  );
};

export { Navabar };
