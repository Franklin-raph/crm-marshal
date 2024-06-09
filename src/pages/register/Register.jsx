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
    }
}

export default Register