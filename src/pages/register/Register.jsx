import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoShieldCheck } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AiFillHome } from 'react-icons/ai';
import StepOne from '../../components/step-one/StepOne'
import StepTwo from '../../components/step-two/StepTwo'
import StepThree from '../../components/step-three/StepThree'
import StepFour from '../../components/step-four/StepFour';
import { useForm, FormProvider } from 'react-hook-form';
import Alert from '../../components/alert/Alert';

const Register = () => {

    const navigate = useNavigate()

    // STEP 1 DETAILS
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [drivingLicense, setDrivingLicense] = useState('')

    // STEP 2 DETAILS
    const [educationLevel, setEducationLevel] = useState('')
    const [currentEmployer, setCurrentEmployer] = useState('')
    const [personalReferenceEmail, setPersonalReferenceEmail] = useState('')
    const [personalReferenceName, setPersonalReferenceName] = useState('')
    const [personalReferencePhone, setPersonalReferencePhone] = useState('')

    // STEP 3 DETAILS
    const [emergencyContact, setEmergencyContact] = useState('')
    const [relationToContact, setRelationToContact] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [convicted, setConvicted] = useState('No')
    const [reasonForConviction, setReasonForConviction] = useState('')

    // STEP 4
    const [position, setPosition] = useState([])
    const [skill, setSkill] = useState('')
    const [experience, setExperience] = useState('')
    const [availability, setAvailability] = useState([])
    const [interest, setInterest] = useState('')
    const [hearAboutUs, setHearAboutUs] = useState('')

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()

    const userData = {
        email, firstName, lastName, phone, dob, city, country, state, address, zip, drivingLicense,
        educationLevel, currentEmployer, personalReferenceEmail, personalReferenceName, personalReferencePhone,
        emergencyContact, relationToContact, contactPhone, convicted, reasonForConviction,
        position, skill, experience, availability, interest, hearAboutUs
    }

    const [formStep, setFormStep] = useState(1)

      // Proceed to the next step
      function nextStep() {
        setFormStep(formStep + 1)
        console.log(formStep);
    }

    // Return to previous step
    function prevStep() {
        setFormStep(formStep - 1)
    }

    async function submitForm(){
        setMsg("Form Submitted Successfully");
        setAlertType('success');
    }

    switch (formStep) {
        case 1:
            return (
                <StepOne userData={userData} nextStep={nextStep} prevStep={prevStep} setAddress={setAddress} 
                        setCity={setCity} setCountry={setCountry} setLastName={setLastName}
                        setFirstName={setFirstName} setEmail={setEmail} setPhone={setPhone}
                        setDob={setDob} setDrivingLicense={setDrivingLicense} setState={setState} setZip={setZip}
                />
            )
        case 2:
            return (
                <StepTwo userData={userData} nextStep={nextStep} prevStep={prevStep} educationLevel={educationLevel}  setEducationLevel={setEducationLevel} 
                        setCurrentEmployer={setCurrentEmployer} setPersonalReferenceEmail={setPersonalReferenceEmail}
                        setPersonalReferenceName={setPersonalReferenceName} setPersonalReferencePhone={setPersonalReferencePhone}
                />
            )
        case 3:
            return (
                <StepThree userData={userData} nextStep={nextStep} prevStep={prevStep} setEmergencyContact={setEmergencyContact}
                            setRelationToContact={setRelationToContact} setContactPhone={setContactPhone} setConvicted={setConvicted}
                            setReasonForConviction={setReasonForConviction}
                />
            )
        case 4:
            return (
                <StepFour userData={userData} nextStep={nextStep} prevStep={prevStep} setPosition={setPosition} 
                            setSkill={setSkill} setExperience={setExperience} setAvailability={setAvailability} setInterest={setInterest} 
                            setHearAboutUs={setHearAboutUs}
                />
            )
        case 5:
            return(

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
                    <div className='flex items-center gap-5 text-gray-500 font-[500] mt-6'>
                        <button className='text-[#2B91F3] underline text-[12px] sm:text-[16px]'>Register as a Volunteer</button>
                        <button onClick={() => navigate('/register-alumni')} className='text-[12px] sm:text-[16px]'>Register as an Alumni</button>
                    </div>
                    <div class="w-full flex-1 mt-8">
                        <div>
                            <div className='w-[100%] mx-auto'>
                                <p className='underline mb-6 mt-[3rem] text-gray-500 font-[600] text-lg'>Personal and Contact Information</p>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[1.5rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>First Name</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.firstName}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Last Name</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.lastName}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Email</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.email}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Phone</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.phone}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Date Of Birth</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData?.dob[0]?.toLocaleDateString()}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Country</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.country}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>City</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.city}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>State</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.state}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Zip</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.zip}</p>
                                    </div>
                                    
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Address</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.address}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Driving License</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.drivingLicense}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='w-[100%] mx-auto'>
                                <p className='underline mb-6 mt-[3rem] text-gray-500 font-[600] text-lg'>Education/Work Experience</p>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[1.5rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Education Level</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.educationLevel}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Current Employer</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.currentEmployer}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Personal Reference Name</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.personalReferenceName}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Personal Reference Phone</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.personalReferencePhone}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Personal Reference Email</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.personalReferenceEmail}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] mx-auto'>
                                <p className='underline mb-6 mt-[3rem] text-gray-500 font-[600] text-lg'>Emergency Contact Information</p>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[1.5rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Emergency Contact</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.emergencyContact}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Relation To Contact</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.relationToContact}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Contact Phone</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.contactPhone}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Convicted</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.convicted}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Reason For Conviction</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.reasonForConviction ? userData.reasonForConviction : 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] mx-auto'>
                                <p className='underline mb-6 mt-[3rem] text-gray-500 font-[600] text-lg'>Volunteer Position Information</p>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[1.5rem] w-full justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Skill</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.skill}</p>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Experience</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.experience}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col md:flex-row gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Interest</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.interest}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Hear About Us</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.hearAboutUs}</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 flex-col w-full mt-[2rem]'>
                                    <p className='font-[500] text-gray-500'>Availability</p>
                                    <div className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px] flex flex-col md:flex-row md:items-center gap-2'>
                                        {availability.map(a => (
                                            <p>{a},</p>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex gap-2 flex-col w-full mt-[2rem]'>
                                    <p className='font-[500] text-gray-500'>Position(s)</p>
                                    <div className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px] flex flex-col md:flex-row md:items-center gap-2'>
                                        {position.map(p => (
                                            <p>{p},</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-[3rem]'>
                                <button
                                    onClick={() => prevStep()}
                                    class="mt-10 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Previous</span>
                                </button>
                                <button
                                    onClick={() => submitForm()}
                                    class="mt-10 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Submit</span>
                                </button>
                            </div>
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
                                <div className='p-3 rounded-full bg-gray-400 inline-flex'></div>
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
}

export default Register