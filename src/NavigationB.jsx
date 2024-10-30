import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
// import ATTBClogo1 from './public/ATTBClogo1.png'

const NavigationB = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
    setIsServicesDropdownOpen(false); // Close Services dropdown if About is opened
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
    setIsAboutDropdownOpen(false); // Close About dropdown if Services is opened
  };

  const toggleNestedDropdown = (menu) => {
    setIsNestedDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const navClose = () => {
  //   setIsOpen(false);
  // };
  return (
    <>

      <div className=" hidden md:flex flex-wrap z-50 justify-between py-1 px-3 bg-pink-800">
        <div>
          <span className="pr-8 text-sm text-white">
            <MdOutlineMail className="inline" />
            <Link href='Home'>Phone: +91 6390103002</Link>
          </span>
          <span className="pr-8 text-sm text-white">
            <IoCallOutline className="inline" />
            Email: arpitivf@gmail.com
          </span>

        </div>
        <div>
          <span className="pr-8 text-sm text-white">
            <IoLocationOutline className="inline " />
            162 Bai Ka Bagh, Lowther Road, 211003, Prayagraj UP
          </span>
        </div>
      </div>
      <nav className="bg-white py-4 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          {/* <div className="text-white text-lg font-bold">ARPIT TEST TUBE BABY CENTRE</div> */}
          <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              {/* <img src={ATTBClogo1} className="d-block w-12" alt="..." /> */}
              <span className="text-pink-600 font-bold ml-2">
                Dr Vandana Bansal
              </span>
            </span>
          </div>
          <div className="hidden md:flex space-x-4 relative">
            <Link href='/' className="text-black text-sm font-semibold">Home</Link>
            <Link href='/'
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-black focus:outline-none font-semibold text-sm"
            >
              About Us
              {/* <ChevronDownIcon className="h-5 w-5 inline" /> */}
            </Link>
            {isAboutDropdownOpen && (
              <div
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="absolute mt-4 pt-3 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <Link href='ourfounder' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link href='ourprofile' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Profile
                </Link>
                <Link href='ourvisionmission' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Vision & Mission
                </Link>
                <Link href='spiritualjourney' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Spiritual Journey
                </Link>
              </div>
            )}

            {/* <div
            className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-1 ${isOpen ? "py-3" : ""
              }`} >
            <Link href='/' className="dropbtn font-semibold text-sm mr-0">
              Services
            </Link>
            <div className="dropdown-content font-thin">
              <a className="dropdownn">
                <button className="dropbtnn">Treatments</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="iuitreatment" onClick={navClose}>
                    IUI
                  </Link>
                  <Link href="ivfet" onClick={navClose}>
                    IVF ET
                  </Link>
                  <Link href="icsi" onClick={navClose}>
                    ICSI
                  </Link>
                  <Link href="ivmtreatment" onClick={navClose}>
                    IVM
                  </Link>
                  <Link href="imsitreatment" onClick={navClose}>
                    IMSI
                  </Link>
                  <Link href="embryomonitoring" onClick={navClose}>
                    Embryo Monitoring
                  </Link>
                  <Link href="laserassisted" onClick={navClose}>
                    Laser Assisted Hatching
                  </Link>
                </div>
              </a>
              <a className="dropdownn">
                <button className="dropbtnn">Test & Evaluation</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="endocrine" onClick={navClose}>
                    Endocrine Profile
                  </Link>
                  <Link href="sonography" onClick={navClose}>
                    Sonography
                  </Link>
                  <Link href="hsgsono" onClick={navClose}>
                    HSG / SONO
                  </Link>
                  <Link href="semenbank" onClick={navClose}>
                    Semen Bank
                  </Link>
                </div>
              </a>
              <a className="dropdownn">
                <button className="dropbtnn">Other Services</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="embryobank" onClick={navClose}>
                    Embryo Bank
                  </Link>
                  <Link href="blastocyst" onClick={navClose}>
                    Blastocyst Culture
                  </Link>
                  <Link href="eggdonation" onClick={navClose}>
                    Egg Donation
                  </Link>
                  <Link href="cryopreservation" onClick={navClose}>
                    Cryopreservation
                  </Link>
                </div>
              </a>
            </div>
          </div> */}


            {/* <div
  className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-1 ${isOpen ? "py-3" : ""
    }`} >
  <Link href='/' className="dropbtn font-semibold text-sm mr-0">
    Services
  </Link>
  <div className="dropdown-content font-thin">
    <div className="dropdownn">
      <button className="dropbtnn">Treatments</button>
      <div className="dropdown-contentt font-thin">
        <Link href="/iuitreatment" onClick={navClose}>IUI</Link>
        <Link href="/ivfet" onClick={navClose}>IVF ET</Link>
        <Link href="/icsi" onClick={navClose}>ICSI</Link>
        <Link href="/ivmtreatment" onClick={navClose}>IVM</Link>
        <Link href="/imsitreatment" onClick={navClose}>IMSI</Link>
        <Link href="/embryomonitoring" onClick={navClose}>Embryo Monitoring</Link>
        <Link href="/laserassisted" onClick={navClose}>Laser Assisted Hatching</Link>
      </div>
    </div>
    <div className="dropdownn">
      <button className="dropbtnn">Test & Evaluation</button>
      <div className="dropdown-contentt font-thin">
        <Link href="/endocrine" onClick={navClose}>Endocrine Profile</Link>
        <Link href="/sonography" onClick={navClose}>Sonography</Link>
        <Link href="/hsgsono" onClick={navClose}>HSG / SONO</Link>
        <Link href="/semenbank" onClick={navClose}>Semen Bank</Link>
      </div>
    </div>
    <div className="dropdownn">
      <button className="dropbtnn">Other Services</button>
      <div className="dropdown-contentt font-thin">
        <Link href="/embryobank" onClick={navClose}>Embryo Bank</Link>
        <Link href="/blastocyst" onClick={navClose}>Blastocyst Culture</Link>
        <Link href="/eggdonation" onClick={navClose}>Egg Donation</Link>
        <Link href="/cryopreservation" onClick={navClose}>Cryopreservation</Link>
      </div>
    </div>
  </div>
</div> */}



            <Link href='facilities' className="text-black text-sm font-semibold">
              Facilities
            </Link>
            <Link href='patientsguide' className="text-black text-sm font-semibold">
              Patients Guide
            </Link>
            <Link href='achievements' className="text-black text-sm font-semibold">
              Success Rate
            </Link>
            <Link href='ivfteam' className="text-black text-sm font-semibold">
              Our IVF Team
            </Link>
            <Link href='gallery' className="text-black text-sm font-semibold">
              Gallery
            </Link>
          </div>
          <Link href='bookappointment' className="hidden md:block text-white bg-pink-700 px-3 py-1 text-sm rounded-xl">
            Contact Us
          </Link>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <RxCross1 className="h-6 w-6" />

            ) : (
              <CiMenuBurger className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <div className="flex flex-col space-y-2">
              <Link href='/' className="text-black py-3 border-b-2 font-semibold">
                Home
              </Link>
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                onClick={toggleAboutDropdown}
                className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none"
              >
                About Us
                <RiArrowDropDownLine className="h-5 w-5 inline" />
              </button>
              {isAboutDropdownOpen && (
                <div
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  className="ml-4"
                >
                  <Link href='ourfounders' className="block px-4 py-2 text-gray-700">
                    Our Founders
                  </Link>
                  <Link href='ourprofile' className="block px-4 py-2 text-gray-700">
                    Our Profile
                  </Link>
                  <Link href='ourvisionmission' className="block px-4 py-2 text-gray-700">
                    Our Vision & Mission
                  </Link>
                  <Link href='spiritualjourney' className="block px-4 py-2 text-gray-700">
                    Spiritual Journey
                  </Link>
                </div>
              )}
              <button
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                onClick={toggleServicesDropdown}
                className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none"
              >
                Services
                <RiArrowDropDownLine className="h-5 w-5 inline" />
              </button>
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left">
                    Treatment
                    <GoPlus className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link href='iui' className="block px-4 py-2 text-gray-500">
                        IUI
                      </Link>
                      <Link href='ivfet' className="block px-4 py-2 text-gray-500">
                        IVF ET
                      </Link>
                      <Link href='icsi' className="block px-4 py-2 text-gray-500">
                        ICSI
                      </Link>
                      <Link href='ivm' className="block px-4 py-2 text-gray-500">
                        IVM
                      </Link>
                      <Link href='imsi' className="block px-4 py-2 text-gray-500">
                        IMSI
                      </Link>
                      <Link href='embryomonitorign' className="block px-4 py-2 text-gray-500">
                        Embryo Monitoring
                      </Link>
                      <Link href='laserassistedhatcing' className="block px-4 py-2 text-gray-500">
                        Laser Assisted Hatching
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
                  >
                    Test & Evaluation
                    <GoPlus className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link href='endocrineprofile' className="block px-4 py-2 text-gray-500">
                        Endocrine Profile
                      </Link>
                      <Link href='sonography' className="block px-4 py-2 text-gray-500">
                        Sonography
                      </Link>
                      <Link href='hsgsno' className="block px-4 py-2 text-gray-500">
                        HSG/SNO
                      </Link>
                      <Link href='semenbank' className="block px-4 py-2 text-gray-500">
                        Semen Bank
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
                  >
                    Other Services
                    <GoPlus className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link href='/' className="block px-4 py-2 text-gray-500">
                        Ebmryo Bank
                      </Link>
                      <Link href='/' className="block px-4 py-2 text-gray-500">
                        Blastocyst culture
                      </Link>
                      <Link href='/' className="block px-4 py-2 text-gray-500">
                        Egg Donation
                      </Link>
                      <Link href='/' className="block px-4 py-2 text-gray-500">
                        Cyopreservation
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <Link href='facilities' className="text-black py-3 border-b-2 font-semibold">
                Facilities
              </Link>
              <Link href='patientsguide' className="text-black py-3 border-b-2 font-semibold">
                Patients Guide
              </Link>
              <Link href='achievments' className="text-black py-3 border-b-2 font-semibold">
                Success Rate
              </Link>
              <Link href='ivfteam' className="text-black py-3 border-b-2 font-semibold">
                Our IVF Team
              </Link>
              <Link href='gallery' className="text-black py-3 border-b-2 font-semibold">
                Gallery
              </Link>
              <Link href='contact' className="text-white text-center border-b-2 bg-red-700 px-2 py-2 my-5 rounded">
                Contact Us
              </Link>
            </div>
          </div>
        )}


      </nav >

    </>
  )
}

export default NavigationB