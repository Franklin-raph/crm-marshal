import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { MdDriveEta } from "react-icons/md";
import { AiFillHome } from 'react-icons/ai';
import { FiFlag, FiHome, FiMail , FiPhone} from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import Flatpickr from "react-flatpickr";
import { BsCalendarDate } from "react-icons/bs";


import "flatpickr/dist/themes/material_green.css";
import Alert from '../alert/Alert';

const StepOne = ({nextStep, country, userData, setAddress, setCity, setCountry, setLastName, setFirstName, setEmail, setPhone, setDob, setDrivingLicense, setState, setZip}) => {

    const navigate = useNavigate()
    const [countryDropDown, setCountryDropDown] = useState(false)
    const [allCountries, setAllCountries] = useState([])
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()


    async function getAllCountruies(){
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        console.log(data)
        setAllCountries(data)
        return data
    }

    useEffect(() => {
        getAllCountruies()
    },[])

    function validateFormAndMoveToNextStep(){
        console.log(userData);
        if(!userData.email || !userData.firstName || !userData.lastName || !userData.city || !userData.address
            ||!userData.country ||!userData.state ||!userData.zip ||!userData.phone || !userData.drivingLicense
            ){
                setMsg("Please Fill in all fields");
                setAlertType('error');
                return;
            }else{
            nextStep()
        }
    }

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
                    <div class="mt-6 flex flex-col items-center">
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
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            value={userData.firstName}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e) => setLastName(e.target.value)}
                                            value={userData.lastName}
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
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={userData.email}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiPhone className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={userData.phone}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <BsCalendarDate className='text-[24px] text-gray-500'/>
                                        <Flatpickr placeholder='Date of birth' options={{ minDate: "1900-01-01" }} 
                                                    className='outline-none w-full placeholder-gray-500 font-medium' 
                                                    onChange={setDob} value={userData.dob}/>
                                        {/* <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                        /> */}
                                    </div>
                                </div>
                                <p className='mb-6 underline mt-[4.5rem] text-gray-500 font-[600] text-lg'>Residential Information</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative'>
                                        <div className='flex items-center gap-3'>
                                            <FiFlag className='text-[24px] text-gray-500'/>
                                            <input
                                                class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                                type="text"
                                                placeholder="Country"
                                                value={userData.country}
                                            />
                                        </div>
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setCountryDropDown(!countryDropDown)}/>
                                        {
                                            countryDropDown &&
                                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] h-[350px] overflow-x-hidden overflow-y-scroll left-0 border'>
                                                {
                                                    allCountries.map(country => (
                                                        <p className='text-[14px] text-gray-500 hover:bg-gray-300 cursor-pointer p-[5px]' onClick={() => {
                                                            setCountryDropDown(!countryDropDown)
                                                            setCountry(country.name.common)
                                                        }}>{country.name.common}</p>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiFlag className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="State"
                                            onChange={(e) => setState(e.target.value)}
                                            value={userData.state}
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
                                            onChange={(e) => setCity(e.target.value)}
                                            value={userData.city}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FaRegAddressBook className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Address"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={userData.address}
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
                                            onChange={(e) => setDrivingLicense(e.target.value)}
                                            value={userData.drivingLicense}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1'>
                                        <FiHome className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Zip"
                                            onChange={(e) => setZip(e.target.value)}
                                            value={userData.zip}
                                        />
                                    </div>
                                </div>
                                
                                <button
                                    onClick={validateFormAndMoveToNextStep}
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
                    </div>
            </div>
            <div class="lg:w-1/2 xl:w-5/12 bg-indigo-100 text-start hidden lg:flex relative">
                <img src="./images/brand-header.png" className='w-[60%] object-contain mx-auto' alt="" />
                <div className='absolute  bg-[#2b92f3c7] h-full w-full flex items-center justify-start'>
                    <div className='text-white'>
                        <div className='pl-[60px] md:pl-[75px]'>
                            <p className='tracking-[5px]'>WELCOME TO</p>
                            <p className='font-[600] tracking-[8px] text-[40px] drop-shadow-xl'>CRMMARSHAL</p>
                            <div className='h-[1px] mt-[13px] mb-4 w-[60%] bg-white'></div>
                            <p>Sign Up For an Account Today</p>
                        </div>
                        <div className='pl-[60px] md:pl-[75px] mt-10 flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-gray-400 inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Personal and Contact Information</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-gray-400 ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-white inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Education/Work Experience</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-white ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-white inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Emergency Contact Information</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-white ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-white inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Volunteer Position Information</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-white ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-white inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Profile Preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
          msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default StepOne