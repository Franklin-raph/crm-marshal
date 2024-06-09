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

const Register = () => {

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
                <StepOne nextStep={nextStep} prevStep={prevStep} />
            )
        case 2:
            return (
                <StepTwo nextStep={nextStep} prevStep={prevStep}/>
            )
        case 3:
            return (
                <StepThree nextStep={nextStep} prevStep={prevStep}/>
            )
        case 4:
            return (
                <StepFour nextStep={nextStep} prevStep={prevStep}/>
            )
    }
}

export default Register