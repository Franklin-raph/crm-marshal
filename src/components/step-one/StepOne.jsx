import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { MdDriveEta } from "react-icons/md";
import { AiFillHome } from 'react-icons/ai';
import { FiChevronDown, FiFlag, FiHome, FiMail , FiPhone} from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import Flatpickr from "react-flatpickr";
import { BsCalendarDate } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";



import "flatpickr/dist/themes/material_green.css";
import Alert from '../alert/Alert';

const StepOne = ({nextStep, userData, setAddress, setCity, setCountry, setLastName, setFirstName, setEmail, setPhone, setDob, setDrivingLicense, setState, setZip}) => {

    const navigate = useNavigate()
    const [allCountries, setAllCountries] = useState([])
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()
    const [searchText, setSeacrhText] = useState('')
    const [loader, setLoader] = useState(false)
    const [allStates, setAllStates] = useState([])
    const [allCities, setAllCities] = useState([])
    // const [countryDropDown, setCountryDropDown] = useState(false)
    // const [stateDropDown, setStateDropDown] = useState(false)
    // const [cityDropDown, setCityDropDown] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    const [countryIso, setCountryIso] = useState('')


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

    async function getStates(iso2){
        setLoader(true)
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${iso2}/states`,{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data.sort((a, b) => a.name.localeCompare(b.name)));
        setAllStates(data.sort((a, b) => a.name.localeCompare(b.name)))
        return data
    }

    async function getCities(iso2){
        setLoader(true)
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${iso2}/cities`,{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data.sort((a, b) => a.name.localeCompare(b.name)));
        setAllCities(data.sort((a, b) => a.name.localeCompare(b.name)))
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

    const registerType = ["Register as a volunteer", "Register as an alumni"]
    const [selectedRegisterType, setSelectedRegisterType] = useState(registerType[0])

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
                    <div class="mt-6 flex flex-col items-center">
                        <h1 class="text-xl xl:text-2xl font-[700] text-gray-700">
                            Sign up for an account
                        </h1>

                        <div className='border p-2 rounded-[10px] mt-5 flex items-center justify-between relative cursor-pointer w-[220px]' onClick={() => setDropDown( dropDown === 'regType' ? false : 'regType')}>
                            <p className='capitalize text-[15px]'>{selectedRegisterType}</p>
                            <FiChevronDown className='cursor-pointer' />
                            {
                                dropDown ==='regType' &&
                                <div className='top-11 left-0 border absolute z-50 bg-white rounded-[10px] w-full'>
                                    {registerType.map((item, index) => (
                                        <div key={index} onClick={() => {
                                            setSelectedRegisterType(item)
                                            if(item.includes('alumni')) {
                                                navigate('/register-alumni')
                                            }else{
                                                navigate('/register')
                                            }
                                        }} className='capitalize hover:bg-gray-100 text-[13px] p-2 cursor-pointer'>{item}</div>
                                    ))}
                                </div>
                            }
                        </div>
                        
                        {/* <div className='flex items-center gap-5 text-gray-500 font-[500] mt-6'>
                            <button className='text-[#2B91F3] underline text-[12px] sm:text-[16px]'>Register as a Volunteer</button>
                            <button onClick={() => navigate('/register-alumni')} className='text-[12px] sm:text-[16px]'>Register as an Alumni</button>
                        </div> */}
                        <div className='lg:hidden flex items-center justify-center w-full mt-[2rem]'>
                            <div className='px-2 border bg-[#2B91F3] rounded-full flex items-center text-white'>
                                <p>1</p>
                            </div>
                            <div className='h-[2px] w-[10%] bg-[#2B91F3]'></div>
                            
                            <div className='text-gray-500 px-2 border border-gray-300 rounded-full flex items-center'>
                                <p>2</p>
                            </div>
                            <div className='h-[2px] w-[10%] bg-gray-300'></div>
                            <div className='text-gray-500 px-2 border border-gray-300 rounded-full flex items-center'>
                                <p>3</p>
                            </div>
                            <div className='h-[2px] w-[10%] bg-gray-300'></div>
                            <div className='text-gray-500 px-2 border border-gray-300 rounded-full flex items-center'>
                                <p>4</p>
                            </div>
                            <div className='h-[2px] w-[10%] bg-gray-300'></div>
                            <div className='text-gray-500 px-2 border border-gray-300 rounded-full flex items-center'>
                                <p>5</p>
                            </div>
                        </div>
                        <div class="w-full flex-1 mt-8">
                            <div class="mx-auto">
                                <p className='mb-6 underline mt-3 text-gray-500 font-[600] text-lg'>Personal and Contact Information</p>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1  w-full'>
                                        <LuUser2 className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            value={userData.firstName}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
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
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiMail className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={userData.email}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
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
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <BsCalendarDate className='text-[24px] text-gray-500'/>
                                        <Flatpickr placeholder='Date of birth' options={{ minDate: "1900-01-01" }} 
                                                    className='outline-none w-full placeholder-gray-500 font-medium bg-transparent' 
                                                    onChange={setDob} value={userData.dob}/>
                                        {/* <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Phone"
                                        /> */}
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
                                                value={userData.country}
                                            />
                                        </div>
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setDropDown(dropDown === 'country' ? false : "country" )}/>
                                        {
                                            dropDown === "country" &&
                                            <div className='bg-white w-full absolute z-[11] top-[45px] rounded-[4px] border border-gray-300 h-[350px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
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
                                                            allCountries?.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
                                                            .map((country) => (
                                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                                    setDropDown(false)
                                                                    setCountry(country.name)
                                                                    getStates(country.iso2)
                                                                    setCountryIso(country.iso2)
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
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
                                        <div className='flex items-center gap-3 w-full'>
                                            <FiFlag className='text-[24px] text-gray-500'/>
                                            <input
                                                class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                                type="text"
                                                placeholder="State"
                                                value={userData.state}
                                            />
                                        </div>
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setDropDown(dropDown === "state" ? false : "state")}/>
                                        {
                                            dropDown === "state" &&
                                            <div className='bg-white w-full absolute z-[12] top-[45px] rounded-[4px] border border-gray-300 h-[350px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search State' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                                <div>
                                                {
                                                        loader ?
                                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                                            <FiLoader className='text-[28px] animate-spin'/>
                                                            <p className='text-gray-500 text-[14px]'>Fetching States Please Wait...</p>
                                                        </div>
                                                        :
                                                        <>
                                                        {
                                                            allStates?.filter(state => state.name.toLowerCase().includes(searchText.toLowerCase()))
                                                            .map((state) => (
                                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                                    setDropDown(false)
                                                                    setState(state.name)
                                                                    getCities(state.iso2)
                                                                }}>
                                                                    <p>{state.name}</p>
                                                                </div>
                                                            ))
                                                        }
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {/* <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <FiFlag className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="State"
                                            onChange={(e) => setState(e.target.value)}
                                            value={userData.state}
                                        />
                                    </div> */}
                                </div>
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
                                        <div className='flex items-center gap-3 w-full'>
                                            <PiCity className='text-[24px] text-gray-500'/>
                                            <input
                                                class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                                type="text"
                                                placeholder="City"
                                                value={userData.city}
                                            />
                                        </div>
                                        <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setDropDown(dropDown === "city" ? false : "city")}/>
                                        {
                                            dropDown === "city" &&
                                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] border border-gray-300 h-[350px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search City' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                                <div>
                                                {
                                                        loader ?
                                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                                            <FiLoader className='text-[28px] animate-spin'/>
                                                            <p className='text-gray-500 text-[14px]'>Fetching Cities Please Wait...</p>
                                                        </div>
                                                        :
                                                        <>
                                                        {
                                                            allCities?.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()))
                                                            .map((city) => (
                                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                                    setDropDown(false)
                                                                    setCity(city.name)
                                                                }}>
                                                                    <p>{city.name}</p>
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
                                <div className='flex items-center sm:gap-5 flex-col sm:flex-row gap-10 mt-[2.5rem]'>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                        <MdDriveEta className='text-[24px] text-gray-500'/>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type="text"
                                            placeholder="Driving License"
                                            onChange={(e) => setDrivingLicense(e.target.value)}
                                            value={userData.drivingLicense}
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
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