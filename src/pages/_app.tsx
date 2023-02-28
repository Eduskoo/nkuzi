import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Raleway } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
