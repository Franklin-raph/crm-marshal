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

const Register = () => {

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
                    <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                        <div class="flex-1 p-6 sm:p-12">
                            <p className='text-[22px] text-gray-500 font-medium text-center'>Please confirm the following details before submitting</p>
                            <div className='w-[55%] mx-auto'>
                                <div className='flex items-center gap-5 mt-[2.5rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>First Name</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.firstName}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Last Name</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.lastName}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Email</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.email}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Phone</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.phone}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Date Of Birth</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData?.dob[0]?.toLocaleDateString()}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Country</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.country}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>City</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.city}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>State</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.state}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-[2rem] w-full justify-between'>
                                    <div className='flex gap-2 flex-col w-full'>
                                        <p className='font-[500] text-gray-500'>Address</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.address}</p>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-[500] text-gray-500'>Zip</p>
                                        <p className='border border-gray-300 w-full px-2 py-[6px] rounded-[4px]'>{userData.zip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Register