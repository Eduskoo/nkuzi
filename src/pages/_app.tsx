import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Raleway } from "@next/font/google";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </QueryClientProvider>
  );
}
