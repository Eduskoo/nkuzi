import { FormSection } from "@/components/form-section";
import { Navabar } from "@/components/navbar";
import { NextPage } from "next";

const WaitListPage: NextPage = () => {
  return (
    <>
      <Navabar />
      <div className="min-h-screen bg-[#E7CFFF] py-20">
        <FormSection />
      </div>
    </>
  );
};

export default WaitListPage;
