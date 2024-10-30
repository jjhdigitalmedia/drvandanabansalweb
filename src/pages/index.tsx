import localFont from "next/font/local";

// import Treatements from "@/HomeComponent/Treatments";
import Rewards from "@/HomeComponent/Rewards";
import Treatements from "@/HomeComponent/Treatements";
// import HeadTop from "@/HomeComponent/HeadTop";
// import Faq from "@/HomeComponent/Faq";
import Contact from "@/HomeComponent/Contact";
// import Head from "next/head";
import About from "@/HomeComponent/About";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
    {/* <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      > */}
       {/* <Head>
        <title>Dr Vandana maam</title>
        <link rel="icon" href="/aboutvandana1.ico" sizes="any" />
        </Head>
        <HeadTop />
        <Faq />
        </div> */}
        <Treatements />
        <Rewards />
      <About />
    <Contact />
    {/* </div> */}
        </>
  );
}
