import Head from "next/head";
import { Inter } from "@next/font/google";
import { Navabar } from "@/components/navbar";
import { BannerSection } from "@/components/banner-section";
import { FeatureSection } from "@/components/feature-section";
import { AboutSection } from "@/components/about-section";
import { WaitListSection } from "@/components/waitlist-section";
import { ContactSection } from "@/components/contact-section";
import { InfoSection } from "@/components/info-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <BannerSection />
      <InfoSection />
      <FeatureSection />
      <AboutSection />
      <WaitListSection />
      <ContactSection />
    </>
  );
}
