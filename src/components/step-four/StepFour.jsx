import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoShieldCheck } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AiFillHome } from 'react-icons/ai';
import { FiFlag, FiHome, FiMail , FiPhone} from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";
import Alert from '../alert/Alert';

const StepFour = ({nextStep, prevStep, userData, setPosition, setSkill, setExperience, setAvailability, setInterest, setHearAboutUs}) => {

    const navigate = useNavigate()
    const [volunteerHourDropDown, setVolunteerHourDropDown] = useState(false)
    const [hearUsDropDown, setHearUsDropDown] = useState(false)
    const [positionDropDown, setPositionDropDown] = useState(false)

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()

    const aboutUs = ['Email', 'Linkedin', 'Advert', 'Other']
    const positions = ['Program Management', 'Cyber Security', 'Human Resources', 'Social Media', 'Trainer', 'Tech Support', 'Information Technology']
    const volunteerHours = ['Monday Hours','Tuesday Hours','Wednesday Hours','Thursday Hours','Friday Hours', 'Saturday Hours']

    const handlePositionSelection = (position) => {
        let updatedPositions = [...userData.position];
        if (updatedPositions.includes(position)) {
            updatedPositions = updatedPositions.filter(p => p!== position);
        } else {
            updatedPositions.push(position);
        }
        setPosition(updatedPositions);
    }

    const handleAvailabilityHoursSelection = (availability) => {
        let updatedAvailability = [...userData.availability];
        if (updatedAvailability.includes(availability)) {
            updatedAvailability = updatedAvailability.filter(a => a!== availability);
        } else {
            updatedAvailability.push(availability);
        }
        setAvailability(updatedAvailability);
    }

    function validateFormAndMoveToNextStep(){
        console.log(userData);
        if(!userData.availability || !userData.position || !userData.experience || !userData.interest || !userData.hearAboutUs || !userData.skill
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
                            <p className='mb-6 underline mt-3 text-gray-500 font-[600] text-lg'>Volunteer Position Information</p>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
                                    <input
                                        class="w-full font-medium placeholder-gray-500 text-md outline-none placeholder:text-[16px]"
                                        type="text"
                                        placeholder="What position(s) are you applying for?"
                                        value={
                                            userData.position? userData.position.join(', ') : 'What position(s) are you applying for?'
                                        }
                                    />
                                    <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setPositionDropDown(!positionDropDown)}/>
                                    {
                                        positionDropDown &&
                                        <div className='bg-white w-full absolute z-[2] top-[45px] rounded-[4px] left-0 border p-3'>
                                            {
                                                positions.map(position => (
                                                    <div className='flex items-center gap-1 hover:bg-gray-300 cursor-pointer px-1'>
                                                        <input
                                                            type="checkbox"
                                                            checked={userData.position.includes(position)}
                                                            onChange={() => handlePositionSelection(position)}
                                                        />
                                                        <p className='text-[14px] text-gray-500 p-[5px]'>{position}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                    <LuUser2 className='text-[24px] text-gray-500'/>
                                    <input
                                        class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                        type="text"
                                        placeholder="What skills can you contribute to the Organization?"
                                        onChange={e => setSkill(e.target.value)}
                                        value={userData.skill}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                    <LuUser2 className='text-[24px] text-gray-500'/>
                                    <input
                                        class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                        type="text"
                                        placeholder="What experience do you have in this area?"
                                        onChange={e => setExperience(e.target.value)}
                                        value={userData.experience}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative mt-[2.5rem]'>
                                <input
                                    class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                    type="text"
                                    placeholder="What is your availability to volunteer?"
                                    value={
                                        userData.availability? userData.availability.join(', ') : 'What position(s) are you applying for?'
                                    }
                                />
                                <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setVolunteerHourDropDown(!volunteerHourDropDown)}/>
                                {
                                    volunteerHourDropDown &&
                                        <div className='bg-white w-full absolute z-[2] top-[45px] rounded-[4px] left-0 border p-3'>
                                            {
                                                volunteerHours.map(volunteerHour => (
                                                    <div className='flex items-center gap-1 hover:bg-gray-300 cursor-pointer px-1'>
                                                        <input type="checkbox"
                                                            checked={userData.availability.includes(volunteerHour)}
                                                            onChange={() => handleAvailabilityHoursSelection(volunteerHour)}
                                                        />
                                                        <p className='text-[14px] text-gray-500 p-[5px]' onClick={() => {
                                                            setVolunteerHourDropDown(!volunteerHourDropDown)
                                                        }}>{volunteerHour}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    // <div className='bg-white w-full absolute z-[1] top-[45px] rounded-[4px] left-0 border'>
                                    //     {
                                    //         volunteerHours.map(volunteerHour => (
                                    //             <p className='text-[14px] text-gray-500 hover:bg-gray-300 cursor-pointer p-[5px]' onClick={() => {
                                    //                 setVolunteerHourDropDown(!volunteerHourDropDown)
                                    //             }}>{volunteerHour}</p>
                                    //         ))
                                    //     }
                                    // </div>
                                }
                            </div>
                            <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                    <FiPhone className='text-[24px] text-gray-500'/>
                                    <input
                                        class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                        type="text"
                                        placeholder="What interests you about our organization?"
                                        onChange={e => setInterest(e.target.value)}
                                        value={userData.interest}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative mt-[2.5rem]'>
                                <input
                                    class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                    type="text"
                                    placeholder="How did you hear about this Alumni program?"
                                    value={userData.hearAboutUs}
                                />
                                <IoChevronDown className='text-[24px] text-gray-500 cursor-pointer' onClick={() => setHearUsDropDown(!hearUsDropDown)}/>
                                {
                                    hearUsDropDown &&
                                    <div className='bg-white w-full absolute top-[45px] z-[1] rounded-[4px] left-0 border'>
                                        {
                                            aboutUs.map(about => (
                                                <p className='text-[14px] text-gray-500 hover:bg-gray-300 cursor-pointer p-[5px]' onClick={() => {
                                                    setHearAboutUs(about)
                                                    setHearUsDropDown(!hearUsDropDown)
                                                }}>{about}</p>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                            
                            
                            <div className='flex items-center gap-[3rem]'>
                                <button
                                    onClick={() => prevStep()}
                                    class="mt-10 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span class="ml-3">Previous</span>
                                </button>
                                <button
                                    onClick={validateFormAndMoveToNextStep}
                                    class="mt-10 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span class="ml-3">Next</span>
                                </button>
                            </div>
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
                                <div className='p-3 rounded-full bg-gray-400 inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Education/Work Experience</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-gray-400 ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-gray-400 inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Emergency Contact Information</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-gray-400 ml-[10px]'></div>
                            <div className='flex items-center gap-2'>
                                <div className='p-3 rounded-full bg-gray-400 inline-flex'></div>
                                <p className='font-[600] drop-shadow-xl'>Volunteer Position Information</p>
                            </div>
                            <div className='h-[100px] w-[4px] bg-gray-400 ml-[10px]'></div>
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

export default StepFour