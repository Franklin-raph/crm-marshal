import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoShieldCheck } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { MdDriveEta } from "react-icons/md";
import { AiFillHome } from 'react-icons/ai';
import { FiFlag, FiHome, FiMail , FiPhone} from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";
import Flatpickr from "react-flatpickr";
import { BsCalendarDate } from "react-icons/bs";


import "flatpickr/dist/themes/material_green.css";

const StepOne = ({nextStep, prevStep}) => {

    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState('password')
    const [hearUsDropDown, setHearUsDropDown] = useState(false)
    const [countryDropDown, setCountryDropDown] = useState(false)

    const aboutUs = ['Email', 'Linkedin', 'Advert', 'Other']

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
        class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            <div class="flex-1 p-6 sm:p-12">
                <div>
                    <AiFillHome onClick={()=> navigate("/")} class="text-3xl border border-gray-300 text-gray-300 rounded-full p-1 hover:bg-gray-300 transition-all cursor-pointer hover:text-white"/>
                    <img src="./images/brand-header.png" className='w-[120px] mx-auto' alt="" />
                </div>
                    <form class="mt-6 flex flex-col items-center">
                        <h1 class="text-xl xl:text-2xl font-[700] text-gray-700">
                            Sign up for an account
                        </h1>
                        <div className='flex items-center gap-5 text-gray-500 font-[500] mt-6'>
                            <button className='text-[#2B91F3] underline'>Register as a Volunteer</button>
                          <button onClick={() => navigate('/register-alumni')}>Register as an Alumni</button>
                        </div>
                        <div class="w-full flex-1 mt-8">
                            <div class="mx-auto ">
                                <p className='mb-6 underline mt-3 text-gray-500 font-[600] text-lg'>Personal and Contact Information</p>
                                <p>Step 1</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiMail className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiPhone className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <BsCalendarDate className='text-[24px] text-gray-500'/>
                                        <Flatpickr options={{ minDate: "1900-01-01" }} className='outline-none'/>
                                        {/* <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                        /> */}
                                    </div>
                                </div>
                                <p className='mb-6 underline mt-[4.5rem] text-gray-500 font-[600] text-lg'>Residential Information</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiFlag className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Country"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiFlag className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="State"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <PiCity className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FaRegAddressBook className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <MdDriveEta className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Driving License"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiHome className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Zip"
                                        />
                                    </div>
                                </div>

                                <p className='mb-6 underline mt-[4.5rem] text-gray-500 font-[600] text-lg'>Other Information</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <BsCalendarCheck className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="number"
                                            placeholder="Year Training Completed"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative'>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none placeholder:text-[11px]"
                                            type="text"
                                            placeholder="How did you hear about this Alumni program?"
                                        />
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setHearUsDropDown(!hearUsDropDown)}/>
                                        {
                                            hearUsDropDown &&
                                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] left-0 border'>
                                                {
                                                    aboutUs.map(about => (
                                                        <p className='text-[14px] text-gray-500 hover:bg-gray-300 cursor-pointer p-[5px]' onClick={() => {
                                                            setHearUsDropDown(!hearUsDropDown)
                                                        }}>{about}</p>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => nextStep()}
                                    class="mt-10 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span class="ml-3">Next</span>
                                </button>
                                <p className='text-center text-[15px] text-gray-600 mt-5'>
                                    Already have an account, <span className='text-[#2B91F3] cursor-pointer' onClick={() => navigate('/login')}>Sign in</span>
                                </p>
                                <p class="mt-6 text-xs text-gray-600 text-center">
                                    I agree to the <span className='cursor-pointer text-[#2B91F3]'>terms and conditions</span>
                                </p>
                            </div>
                        </div>
                    </form>
            </div>
            <div class="lg:w-1/2 xl:w-5/12 bg-indigo-100 text-start hidden lg:flex relative">
                <img src="./images/brand-header.png" className='w-[60%] object-contain mx-auto' alt="" />
                <div className='absolute bg-[#2b92f3c7] h-full flex items-center justify-start text-white w-full'>
                    <div className='pl-[60px] md:pl-[75px]'>
                        <p className='tracking-[5px]'>WELCOME TO</p>
                        <p className='font-[600] tracking-[8px] text-[40px] drop-shadow-xl'>CRMMARSHAL</p>
                        <div className='h-[1px] mt-[13px] mb-4 w-[60%] bg-white'></div>
                        <p>Sign Up For an Account Today</p>
                    </div>
                </div>
                {/* <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default StepOne