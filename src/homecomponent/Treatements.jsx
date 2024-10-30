import IVFet from "/public/Treatment/IVFet.jpg";
import iui from "/public/Treatment/iui.png";
import icsi from "/public/Treatment/icsi.png";
import ivm from "/public/Treatment/ivm.png";
import IMSI from "/public/Treatment/IMSI.png";
import embryo from "/public/Treatment/embryo.png";
import lasehatching from '/public/Treatment/lasehatching.png';
// import laproo from "../assets/icons/Treatment/laproo.png";
import Sonography from "/public/Treatment/Sonography.png";
// import IVFvideo from '/public/videos/IVFvideo.mp4';
// import Aos from "aos";
// import 'aos/dist/aos.css'

import Link from "next/link";
import Image from "next/image";

const Treatements = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // })

  const TreatmentData = [
    {
      img: iui,
      link: 'treatments/iui',
      heading: "IUI Treatment",
      more: 'view more'

    },
    {
      img: IVFet,
      link: 'ivfet',
      heading: "IVF-ET",
      more: 'view more'

    },
    {
      img: icsi,
      link: 'icsi',
      heading: "ICSI Treatment",
      more: 'view more'

    },
    {
      img: ivm,
      link: 'ivmtreatment',
      heading: "IVM Treatment",
      more: 'view more'

    },
    {
      img: IMSI,
      link: 'imsitreatment',
      heading: "IMSI Treatment",
      more: 'view more'

    },
    {
      img: embryo,
      link: 'laserassisted',
      heading: "Embryo Monitoring",
      more: 'view more'

    },
    {
      img: lasehatching,
      link: 'embryomonitoring',
      heading: "Laser Assisted Hatching",
      more: 'view more'

    },
    {
      img: Sonography,
      link: 'laparoscopy',
      heading: "Sonography",
      more: 'view more'
    }
  ]

  return (<>
    <section className="text-gray-600 container px-1 md:px-5 py-16 mx-auto body-font">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Treatments Provided by Dr. Vandana Bansal</h1>
          <p className="lg:w-2/3 mx-auto text-sm leading-relaxed">Dr. Vandana Bansal is a highly regarded medical professional known for expertise and compassionate care. With extensive experience, Dr. Bansal specializes in advanced treatments, combining cutting-edge technology with personalized care. Her commitment to excellence and patient well-being has earned him a reputation as a trusted figure in the medical community.</p>
        </div>
        <div className="flex flex-wrap text-center mx-auto m-0 md:m-4 lg:w-4/5 ">
          {TreatmentData && TreatmentData.map((treat, abc) => (
            <Link  href={treat.link} key={abc} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" shadow-md order-gray-200 px-3 py-5 rounded-lg">
                {/* <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={treat.img}
                /> */}
                <Image
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={treat.img}
                />
                <h2 className="title-font font-medium text-md text-gray-900">{treat.heading}</h2>
                <p className="leading-relaxed text-sm text-rose-600">{treat.more}</p>
              </div>
            </Link>
          ))
          }
        </div>
    </section>
    {/* <div className="w-full md:px-52 py-10 bg-red-50 my-5">
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

export default Treatements;
