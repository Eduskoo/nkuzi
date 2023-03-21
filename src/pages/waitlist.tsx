import { FormSection } from "@/components/form-section";
import { Navabar } from "@/components/navbar";
import { NextPage } from "next";
import Head from "next/head";

const WaitListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nkuzi</title>
        <meta
          name="description"
          content="Nkuzi helps international students lead a decent life by connecting them to affordable accommodation, flexible jobs, low interest finance and like-minded communities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>One-stop platform for international students</title>
      </Head>
      <Navabar />
      <div className="min-h-screen bg-[#E7CFFF] py-20">
        <FormSection />
      </div>
    </>
  );
};

export default WaitListPage;
