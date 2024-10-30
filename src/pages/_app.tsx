import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationB from "@/NavigationB";
import Footer from "@/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return<>
  <NavigationB/>
  <Component {...pageProps} />;
  <Footer/>
  </>
}
