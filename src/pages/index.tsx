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
          content="One stop platform providing soft landing for international students"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
