import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
    <Head>
        <title>Serena Blake</title>
      </Head>
      <Component {...pageProps} />
      <Toaster richColors position="top-center" /> 
    </>
  );

}
