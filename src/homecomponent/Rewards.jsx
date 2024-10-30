import React from "react";
import lab0 from "/public/lab0.png";
import patientweb from "/public/patientweb.png";
import speaker1 from "/public/speaker1.jpg";
import Link from "next/link";
import Image from "next/image";
// import IVFvideo from '../assets/videos/IVFvideo.mp4';

const Rewards = () => {

  const rewarData = [
    {
      imgs: lab0,
      headings: 'IVF Lab',
      para: " Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the women's ovaries and then fertilized by the husband's sperms in a petri dish or a test tube in a controlled laboratory environment."
    },
    {
      imgs: patientweb,
      headings: 'Patients Review',
      para: "  At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient."
    },
    {
      imgs: speaker1,
      headings: 'Guest Speaker',
      para: " Dr. Vandana Bansal is a distinguished guest speaker at various global conferences,  where she shares her expertise in [your area of expertise] and ignites engaging conversations."
    },
  ]
  return (
    <>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto mt-10">
        {rewarData.map((R, k) => (
          <Link href="guestspeaker" className="bg-white m-2 h-auto rounded-2xl shadow-xl overflow-hidden max-w-72">
            <Image
            key={k}
              src={R.imgs}
              alt="Mountain"
              className="w-full  object-cover border-8 border-white rounded-2xl"
            />
            <div className="px-4 py-0 pt-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {R.headings}
              </h2>
              <p className="text-gray-700 leading-tight mb-4">
                {R.para}
              </p>
            </div>
          </Link >
        ))
        }
      </div>
      {/* <div className="w-full md:px-52 py-10 bg-red-200 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </>
  );
};
export default Rewards;