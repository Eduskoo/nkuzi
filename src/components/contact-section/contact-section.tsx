import { SectionTitle } from "../section-title";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <div id="contact" className="mt-20 bg-[#1A0048] py-[103px] text-white">
        <div className="my-0 mx-auto w-11/12 max-w-[1107px]">
          <div className="flex flex-col items-center justify-center gap-8">
            <div>
              <h1 className="text-2xl font-bold md:text-[52px]">Contact Us</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <BsTwitter fontSize={"2rem"} />
                <p>Twitter</p>
              </div>
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <MdMail fontSize={"2rem"} />
                <p>Email</p>
              </div>
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <BsLinkedin fontSize={"2rem"} />
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ContactSection };
