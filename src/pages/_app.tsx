import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import GlobalProvider from "@/context/GlobalContext";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="top-center" richColors/>
    </GlobalProvider>
  );
}
