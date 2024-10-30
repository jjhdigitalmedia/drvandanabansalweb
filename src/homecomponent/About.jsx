import React from 'react'
// import '../Style/neonStyle.css'
import aboutvandana from '/public/aboutvandana.jpg'
import akBansal from '/public/akBansal.jpg'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const About = () => {
    return (
        <>
            <section id='about' className="text-gray-600 w-11/12 mx-auto mt-14 body-font">
                <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
                    <div className="pt-5 pb-0 md:w-96 w-5/6 ">
                        {/* <img className=" object-cover object-center roundedxl w-96" alt="hero" src={aboutvandana} /> */}
                        <Image
                            className=" object-cover object-center roundedxl w-96" alt="hero" src={aboutvandana}
                        />
                    </div>
                    <div className="lg:flex-grow md:rounded-r-2xl my-2 md:w-1/2 py-3 pr-1 md:bg-rose-50 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
                        <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-black"> Dr. Vandana Bansal
                        </h1>

                        <div className='flex'>
                            <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
                                <FaInstagram className='m-2 md:text-whit text-rose-700 text-xl' />
                            </a>
                            <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                                <FaFacebook className='m-2 md:text-whie text-rose-700 text-xl' />
                            </a>
                            <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                                <FaYoutube className='m-2 md:text-whie text-rose-700 text-xl' />
                            </a>
                            <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                                <FaLinkedinIn className='m-2 md:text-wite text-rose-700 text-xl' />
                            </a>
                        </div>

                        <p className="mb-8 md:text-left text-sm leading-relaxed text-black font-semibold text-justify"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration. <Link href='about' className='text-rose-700'> know more </Link></p>
                        {/* <div className="flex justify-center">
                            <Link to='bookappointment'>
                                <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-sm">Book Appoinment</button>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <hr className='md:invisible' />
                <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:rounded-l-2xl md:w-1/2 py-5 pr-1 md:bg-rose-50 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
                        <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-left text-black"> Late Dr. Ashvini Kumar Bansal
                        </h1>

                        {/* <div className='flex'>
                            <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
                        <FaInstagram className='m-2 md:text-white text-xl' />
                            </a>
                        <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                        <FaFacebook className='m-2 md:text-white text-xl'/>
                        </a>
                        <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                        <FaYoutube className='m-2 text-white text-xl'/>
                        </a>
                        <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                        <FaLinkedinIn className='m-2 text-white text-xl' />
                        </a>
                        </div> */}

                        <p className="mb-8 md:text-left text-sm leading-relaxed text-black font-semibold text-justify"> DR. Late Dr. Ashwini Kumar Bansal was one of the most renowned Senior Laparoscopic and General Surgeons, with a heart of gold. He was a leading specialist in Male Infertility in the state of Uttar Pradesh. He was the Founder and Director of the 210-bed Multi speciality & Super speciality Jeevan Jyoti Group of Hospitals, Allahabad. <Link href='about' className='text-rose-700'> know more </Link></p>
                        {/* <div className="flex justify-center">
                            <Link to='bookappointment'>
                                <button className="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-sm">Book Appoinment</button>
                            </Link>
                        </div> */}
                    </div>
                    <div className="pb-5 md:w-96 w-5/6 ">
                        {/* <img className=" object-cover object-center w-96 roundedxl" alt="hero" src={akBansal} /> */}
                        <Image
                            className=" object-cover object-center w-96 roundedxl" alt="hero" src={akBansal}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







