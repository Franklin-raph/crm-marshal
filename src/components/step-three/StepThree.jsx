import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { AiFillHome } from 'react-icons/ai';
import { FiPhone} from "react-icons/fi";
import Alert from '../alert/Alert';

const StepThree = ({nextStep, prevStep, userData, setEmergencyContact, setRelationToContact, setContactPhone, setConvicted, setReasonForConviction}) => {

    const navigate = useNavigate()

    const convicteArray = ['Yes', 'No']

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()

    function validateFormAndMoveToNextStep(){
        console.log(userData);
        if(!userData.emergencyContact || !userData.relationToContact || !userData.contactPhone || !userData.convicted
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
                          <p className='mb-6 underline mt-3 text-gray-500 font-[600] text-lg'>Emergency Contact Information</p>
                          {/* <div className='flex items-center gap-5'>
                              <div className='flex items-center gap-3 border-b border-gray-200 p-1 relative w-full'>
                                  <input
                                      class="w-full font-medium placeholder-gray-500 text-md outline-none placeholder:text-[16px]"
                                      type="text"
                                      placeholder="Highest Level of Education"
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
                          </div> */}
                          <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                              <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                  <LuUser2 className='text-[24px] text-gray-500'/>
                                  <input
                                      class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                      type="text"
                                      placeholder="Emergency Contact"
                                      onChange={e => setEmergencyContact(e.target.value)}
                                      value={userData.emergencyContact}
                                  />
                              </div>
                          </div>
                          <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                              <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                  <LuUser2 className='text-[24px] text-gray-500'/>
                                  <input
                                      class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                      type="text"
                                      placeholder="Relation to Contact"
                                      onChange={e => setRelationToContact(e.target.value)}
                                      value={userData.relationToContact}
                                  />
                              </div>
                          </div>
                          <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                              <div className='flex items-center gap-3 border-b border-gray-200 p-1 w-full'>
                                  <FiPhone className='text-[24px] text-gray-500'/>
                                  <input
                                      class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                      type="text"
                                      placeholder="Contact Phone"
                                      onChange={e => setContactPhone(e.target.value)}
                                      value={userData.contactPhone}
                                  />
                              </div>
                          </div>
                          <p className='text-red-500 text-[12px] mt-[2.5rem]'>All applicants must answer the following questions. Failure to answer disqualifies you from service as a volunteer with our organization</p>
                          <div className='mt-3'>
                            <p className='text-gray-500 mb-3'>Have you been convicted of a felony or a misdemeanor?</p>
                            <div className='flex items-center justify-between w-[50%]'>
                                {
                                    convicteArray.map(convict => (
                                        <div className='flex items-center gap-1 text-gray-500'>
                                            <label htmlFor="convict">{convict}</label>
                                            <input type="radio" name="convict" value={userData.convicted} onChange={() => setConvicted(convict)} />
                                        </div>
                                    ))
                                }
                            </div>
                          </div>
                          {
                            userData.convicted === 'Yes' &&
                            <div className='flex items-center gap-5 mt-[2.5rem] w-full'>
                                <textarea onChange={e => setReasonForConviction(e.target.value)} value={userData.reasonForConviction} className='w-full border-gray-200 border rounded-[6px] p-4 outline-none resize-none' placeholder='Describe the conviction. Include the type of crime, date, city, country, state where the crime took place' cols="10" rows="5"></textarea>
                            </div>
                          }
                          
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

export default StepThree