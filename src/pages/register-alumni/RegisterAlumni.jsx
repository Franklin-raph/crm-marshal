import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoShieldCheck } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AiFillHome } from 'react-icons/ai';
import { FiFlag, FiHome, FiLoader, FiMail , FiPhone} from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";


const RegisterAlumni = () => {

    const navigate = useNavigate()
    const [searchText, setSeacrhText] = useState('')
    const [hearUsDropDown, setHearUsDropDown] = useState(false)
    const aboutUs = ['Email', 'Linkedin', 'Advert', 'Other']
    const [countryDropDown, setCountryDropDown] = useState(false)
    const [allCountries, setAllCountries] = useState([])
    const [loader, setLoader] = useState(false)
    const [country, setCountry] = useState('')


    // async function getAllCountruies(){
    //     setLoader(true)
    //     const response = await fetch('https://restcountries.com/v3.1/all')
    //     const data = await response.json()
    //     if(response) setLoader(false)
    //     console.log(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
    //     setAllCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
    //     return data
    // }

    async function getAllCountruies(){
        setLoader(true)
        const response = await fetch('https://api.countrystatecity.in/v1/countries',{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data);
        setAllCountries(data)
        return data
    }

    useEffect(() => {
        // getAllCountruies()
        getAllCountruies()
    },[])

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
        class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            <div class="flex-1 p-6 sm:p-12">
                <div>
                    <AiFillHome onClick={()=> navigate("/")} class="text-3xl border border-gray-300 text-gray-300 rounded-full p-1 hover:bg-gray-300 transition-all cursor-pointer hover:text-white"/>
                    <img src="./images/brand-header.png" className='sm:w-[120px] w-[60px] mx-auto' alt="" />
                </div>
                    <form class="mt-6 flex flex-col items-center">
                        <h1 class="text-xl xl:text-2xl font-[700] text-gray-700">
                            Sign up for an account
                        </h1>
                        <div className='flex items-center gap-5 text-gray-500 font-[500] mt-6'>
                          <button onClick={() => navigate('/register')} className='text-[12px] sm:text-[16px]'>Register as a Volunteer</button>
                          <button className='text-[#2B91F3] underline text-[12px] sm:text-[16px]'>Register as an Alumni</button>
                        </div>
                        <div class="w-full flex-1 mt-8">
                            <div class="mx-auto ">
                                <p className='mb-6 underline mt-3 text-gray-500 font-[600] text-lg'>Personal and Contact Information</p>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiMail className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiPhone className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                                <p className='mb-6 underline mt-[4.5rem] text-gray-500 font-[600] text-lg'>Residential Information</p>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
                                        <div className='flex items-center gap-3 w-full'>
                                            <FiFlag className='text-[24px] text-gray-500'/>
                                            <input
                                                class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                                type="text"
                                                placeholder="Country"
                                            />
                                        </div>
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setCountryDropDown(!countryDropDown)}/>
                                        {
                                            countryDropDown &&
                                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] border border-gray-300 h-[350px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search Country' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                                <div>
                                                    {
                                                        loader ?
                                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                                            <FiLoader className='text-[28px] animate-spin'/>
                                                            <p className='text-gray-500 text-[14px]'>Fetching Countries Please Wait...</p>
                                                        </div>
                                                        :
                                                        <>
                                                        {
                                                            allCountries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
                                                            .map((country) => (
                                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                                    setCountryDropDown(!countryDropDown)
                                                                    setCountry(country.name)
                                                                }}>
                                                                    <p>{country.emoji}</p>
                                                                    <p>{country.name}</p>
                                                                </div>
                                                            ))
                                                        }
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiFlag className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="State"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <PiCity className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FaRegAddressBook className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiHome className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Branch"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiHome className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Zip"
                                        />
                                    </div>
                                </div>

                                <p className='mb-6 underline mt-[4.5rem] text-gray-500 font-[600] text-lg'>Other Information</p>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <BsCalendarCheck className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="number"
                                            placeholder="Year Training Completed"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
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
                                    type='submit'
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

export default RegisterAlumni