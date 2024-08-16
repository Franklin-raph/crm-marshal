import React, { useState } from 'react'
import { BiChevronDown, BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { PiYoutubeLogoLight } from "react-icons/pi";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';



const ItTraining = () => {

  const [dropDown, setDropDown] = useState(false)
  const [toggleNav, setToogleNav] = useState(false)

  return (
    <div>
        <nav className='flex items-center justify-between px-[1.5rem] md:px-[5rem] py-4 shadow-sm'>
            <Link to='/' className='flex items-center gap-3'>
                <img src="./images/brand-header.png" className='md:w-[35px] w-[25px]' alt="" />
                <p className='font-[600] text-gray-500 md:text-[16px] text-[12px]'>INFOTECH IMPACT</p>
            </Link>
            <div className='lg:flex hidden items-center lg:gap-[42px] relative'>
                <Link to='/support' className='text-gray-500'>Home</Link>
                <Link to='/support' className='text-gray-500'>About Us</Link>
                <Link to='/support' className='text-gray-500'>Courses</Link>
                <Link to='/support' className='text-gray-500'>Contact Us</Link>
                <div className='flex items-center gap-2' onClick={() => setDropDown(dropDown === "training" ? false : 'training')}>
                    <Link to='/it-training' className='text-gray-500'>IT-Training</Link>
                    <BiChevronDown className='text-[26px] text-gray-500 cursor-pointer' onClick={() => setDropDown('training')}/>
                </div>
                {
                    dropDown === 'training' &&
                    <div className='absolute z-[100] flex items-start flex-col bg-white right-0 top-[50px] text-left p-1'>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Alumni</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Volunteer</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Youth Empowerment</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>New To Information Technology</Link>
                    </div>
                }
            </div>
            <div className={ toggleNav === true ? `flex flex-col items-center px-2 fixed bg-white top-[20%] sm:w-[400px] w-[85%] py-[20px] left-[50%] translate-x-[-50%] translate-y-[-10%] z-[111] transition-[10s]` : `flex flex-col lg:hidden items-center px-2 fixed bg-white top-[-40%] sm:w-[400px] w-[85%] py-[20px] left-[50%] translate-x-[-50%] translate-y-[-10%] z-[111] transition-[10s]`}>
                <Link to='/support' className='text-gray-500 w-full px-3 py-[10px] hover:bg-gray-100'>Home</Link>
                <Link to='/support' className='text-gray-500 w-full px-3 py-[10px] hover:bg-gray-100'>Courses</Link>
                <Link to='/support' className='text-gray-500 w-full px-3 py-[10px] hover:bg-gray-100'>About Us</Link>
                <Link to='/support' className='text-gray-500 w-full px-3 py-[10px] hover:bg-gray-100'>Contact Us</Link>
                <div className='flex items-center gap-2 w-full justify-between cursor-pointer px-3 py-[10px] hover:bg-gray-100' onClick={() => setDropDown(dropDown === "training" ? false : 'training')}>
                    <Link to='/it-training' className='text-gray-500'>IT-Training</Link>
                    <BiChevronDown className='text-[26px] text-gray-500 cursor-pointer' onClick={() => setDropDown('training')}/>
                </div>
                {
                    dropDown === 'training' &&
                    <div className='flex items-start flex-col bg-white w-full p-1'>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Alumni</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Volunteer</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>Youth Empowerment</Link>
                        <Link to='#' className='text-gray-500 hover:bg-gray-100 py-2 px-4 w-full'>New To Information Technology</Link>
                    </div>
                }
            </div>
            <div className='flex items-center gap-4 flex-row-reverse'>
                <BiMenu className='text-[25px] cursor-pointer block lg:hidden' onClick={() => setToogleNav(toggleNav === true ? false : true )}/>
                <button className='bg-[#2B91F3] py-2 px-5 rounded-[6px] text-white'>Donate</button>
            </div>
        </nav>
        <main>
            <div className="relative bg-black text-white h-screen">
                <Swiper
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                        delay: 30000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center h-full"
                        style={{ backgroundImage: `url('./images/bg1.avif')` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <h2 className="text-lg md:text-xl tracking-[10px]">WELCOME TO INFOTECH IMPACT</h2>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 w-[60%]">Empowerment Through Technology</h1>
                        <Link to="https://youtu.be/Qtq-27bNTrs" target='_blank' className='bg-gray-100 p-[10px] rounded-full mt-3 cursor-pointer'>
                            <PiYoutubeLogoLight className='text-red-600 fill-current transition-transform duration-300 group-hover:scale-110 animate-pulse text-[36px]'/>
                        </Link>
                        <div className="flex items-center mt-6">
                            <input
                            type="text"
                            placeholder="Search.."
                            className="py-3 px-4 rounded-l-full text-black w-full md:w-96 focus:outline-none"
                            />
                            <button className="bg-[#2B91F3] text-white py-[14px] px-6 rounded-r-full focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center h-full"
                        style={{ backgroundImage: `url('./images/bg2.jpg')` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                            <h2 className="text-lg md:text-xl tracking-[10px]">WELCOME TO INFOTECH IMPACT</h2>
                            <h1 className="text-4xl md:text-6xl font-bold mt-4 w-[60%]">Empowerment Through Technology</h1>
                            <Link to="https://youtu.be/Qtq-27bNTrs" target='_blank' className='bg-gray-100 p-[10px] rounded-full mt-3 cursor-pointer'>
                                <PiYoutubeLogoLight className='text-red-600 fill-current transition-transform duration-300 group-hover:scale-110 animate-pulse text-[36px]'/>
                            </Link>
                            <div className="flex items-center mt-6 px-[9rem]">
                                <input
                                    type="text"
                                    placeholder="Search.."
                                    className="py-3 px-4 rounded-l-full text-black max-w-[20rem] sm:w-96 focus:outline-none"
                                />
                                <button className="bg-[#2B91F3] text-white py-[14px] px-6 rounded-r-full focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center h-full"
                        style={{ backgroundImage: `url('./images/bg3.jpg')` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <h2 className="text-lg md:text-xl tracking-[10px]">WELCOME TO INFOTECH IMPACT</h2>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 w-[60%]">Empowerment Through Technology</h1>
                        <Link to="https://youtu.be/Qtq-27bNTrs" target='_blank' className='bg-gray-100 p-[10px] rounded-full mt-3 cursor-pointer'>
                            <PiYoutubeLogoLight className='text-red-600 fill-current transition-transform duration-300 group-hover:scale-110 animate-pulse text-[36px]'/>
                        </Link>
                        <div className="flex items-center mt-6">
                            <input
                            type="text"
                            placeholder="Search.."
                            className="py-3 px-4 rounded-l-full text-black w-full md:w-96 focus:outline-none"
                            />
                            <button className="bg-[#2B91F3] text-white py-[14px] px-6 rounded-r-full focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
        <section className='mt-[7rem]'>
            <p className='text-[30px] font-[600] text-center mt-10 mb-3 text-gray-700'>Our Popular Courses</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5'>
                    <Link to='#' className="relative group text-center p-4 rounded-[14px] shadow-lg flex flex-col items-center overflow-hidden border">
                        {/* <CiGlobe className='text-[40px] text-center'/> */}
                        <img src="./images/coding-language.png" alt="" className='w-[100px] h-[100px]' />
                        <h3 className='text-[22px] font-[500] my-7 text-gray-500'>Programming</h3>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#2B91F3] bg-opacity-90 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-[22px] font-[500]">Programming</h3>
                            <p className="mt-2 text-[16px]">
                                Learn to code in various languages and build software, websites, and more.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-white text-[#2B91F3] font-semibold rounded-full">
                            Learn More
                            </button>
                        </div>
                    </Link>
                    <Link to='#' className="relative group text-center p-4 rounded-[14px] shadow-lg flex flex-col items-center overflow-hidden border">
                        {/* <CiGlobe className='text-[40px] text-center'/> */}
                        <img src="./images/server.png" alt="" className='w-[100px] h-[100px]' />
                        <h3 className='text-[22px] font-[500] my-7 text-gray-500'>Cloud Technology</h3>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#2B91F3] bg-opacity-90 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-[22px] font-[500]">Cloud Technology</h3>
                            <p className="mt-2 text-[16px]">
                                Explore cloud platforms for scalable computing and efficient business solutions.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-white text-[#2B91F3] font-semibold rounded-full">
                                Learn More
                            </button>
                        </div>
                    </Link>
                    <Link to='#' className="relative group text-center p-4 rounded-[14px] shadow-lg flex flex-col items-center overflow-hidden border">
                        {/* <CiGlobe className='text-[40px] text-center'/> */}
                        <img src="./images/ui-design.png" alt="" className='w-[100px] h-[100px]' />
                        <h3 className='text-[22px] font-[500] my-7 text-gray-500'>UI/UX Design</h3>

                        <div className="absolute inset-0 bg-[#2B91F3] bg-opacity-90 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-[22px] font-[500]">UI/UX Design</h3>
                            <p className="mt-2 text-[16px]">
                                Design intuitive interfaces and engaging user experiences with best practices.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-white text-[#2B91F3] font-semibold rounded-full">
                                Learn More
                            </button>
                        </div>
                    </Link>
                    <Link
                        to="#"
                        className="relative group text-center p-4 rounded-[14px] shadow-lg flex flex-col items-center overflow-hidden border"
                    >
                        <img src="./images/meeting.png" alt="" className="w-[100px] h-[100px]" />
                        <h3 className="text-[22px] font-[500] my-7 text-gray-500">Business Analytics</h3>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#2B91F3] bg-opacity-90 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-[22px] font-[500]">Business Analytics</h3>
                            <p className="mt-2 text-[16px]">
                            Learn how to analyze data and make business decisions based on analytics.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-white text-[#2B91F3] font-semibold rounded-full">
                            Learn More
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        <footer className="bg-[#091D31] text-white py-8 px-4 mt-[6rem]">
            <div className="container mx-auto flex md:flex-row flex-col justify-between gap-10">
                {/* Left Section */}
                <div className="text-center md:text-left w-full">
                    <p className="mb-4">
                        InfoTech Impact is a Section 501(c)(3) organization with a public charity status of 509(a)(2),
                        dedicated to making Information Technology education accessible to underserved individuals in our community.
                        Our programs aim to empower individuals with the skills and knowledge they need to thrive in the fast-growing field of IT.
                        Our organization is committed to being socially and financially sustainable and contributing to the growth and development of our community.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <a href="#" className="p-2 bg-white rounded-full text-blue-900">
                        <FaFacebookF />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-blue-900">
                        <FaTwitter />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-blue-900">
                        <FaInstagram />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-blue-900">
                        <FaLinkedinIn />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-blue-900">
                        <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Center Section */}
                <div className='w-full'>
                    <h3 className="text-xl font-semibold mb-4">Popular Courses</h3>
                    <ul>
                        <li>Project Costing</li>
                        <li>Business Analysis Intensive</li>
                        <li>Business Analytics - Tableau</li>
                        <li>Product Management</li>
                        <li>Introduction to Information Technology</li>
                        <li>Introduction to Quality Assurance/Business Analysis/Database</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='w-full'>
                    <h3 className="text-xl font-semibold mb-4">Course Categories</h3>
                    <ul>
                        <li>Cybersecurity</li>
                        <li>Business Analysis</li>
                        <li>Programming</li>
                        <li>Agile</li>
                        <li>Project Management</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white mt-8 pt-4 text-center">
                <p>© 2024 InfoTech Impact – <a href="#" className="underline">Privacy Policy</a> – <a href="#" className="underline">Terms & Conditions</a></p>
            </div>
        </footer>
    </div>
  )
}

export default ItTraining