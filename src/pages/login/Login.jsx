import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoShieldCheck } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import Alert from '../../components/alert/Alert';




const Login = () => {

    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState('password')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()

    function handleSignIn(e){
        e.preventDefault()
        if(!userName || !password){
            setMsg("Please Fill in all fields");
            setAlertType('error');
            return
        }else{
            navigate('/dashboard')
        }
    }

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
        class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div>
                    <AiFillHome onClick={()=> navigate("/")} class="text-3xl border border-gray-300 text-gray-300 rounded-full p-1 hover:bg-gray-300 transition-all cursor-pointer hover:text-white"/>
                    <img src="./images/brand-header.png" className='sm:w-[120px] w-[60px] mx-auto' alt="" />
                </div>
                    <form onSubmit={handleSignIn} class="mt-12 flex flex-col items-center">
                        <h1 class="text-xl xl:text-2xl font-[700] text-gray-700">
                            Sign in to your account
                        </h1>
                        <div class="w-full flex-1 mt-8">
                            <div class="mx-auto md:max-w-xs">
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 mt-4'>
                                    <LuUser2 className='text-[24px] text-gray-500'/>
                                    <input
                                        class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                        type="text"
                                        placeholder="Username"
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className='flex items-center gap-3 border-b border-gray-200 p-1 mt-[2rem]'>
                                    <GoShieldCheck className='text-[24px] text-gray-500'/>
                                    <div className='flex items-center justify-between w-full'>
                                        <input
                                            class="w-full font-medium placeholder-gray-500 text-md outline-none"
                                            type={passwordType}
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        {
                                            passwordType === 'password' &&
                                                <FaRegEye onClick={() => setPasswordType('text')} className='cursor-pointer text-gray-500'/>
                                        }
                                        {
                                            passwordType === 'text' &&
                                                <FaRegEyeSlash onClick={() => setPasswordType('password')} className='cursor-pointer text-gray-500'/>
                                        }
                                    </div>
                                </div>
                                <p className='mt-1 text-end cursor-pointer text-gray-400 hover:text-[#2B91F3]' >Forgot Password?</p>
                                <button
                                    type='submit'
                                    class="mt-5 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2b82f3] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Sign In</span>
                                </button>
                                <p className='text-center text-[15px] text-gray-600 mt-5'>
                                    Don't have an account, <span className='text-[#2B91F3] cursor-pointer' onClick={() => navigate('/register')}>Sign up</span>
                                </p>
                                <p class="mt-6 text-xs text-gray-600 text-center">
                                    I agree to the <span className='cursor-pointer text-[#2B91F3]'>terms and conditions</span>
                                </p>
                            </div>
                        </div>
                    </form>
            </div>
            <div class="flex-1 bg-indigo-100 text-start hidden lg:flex relative">
                <img src="./images/brand-header.png" className='w-[60%] object-contain mx-auto' alt="" />
                <div className='absolute bg-[#2b92f3c7] w-full h-full flex items-center justify-start text-white'>
                    <div className='pl-[60px] md:pl-[75px]'>
                        <p className='tracking-[5px]'>WELCOME TO</p>
                        <p className='font-[600] tracking-[8px] text-[40px] drop-shadow-xl'>CRMMARSHAL</p>
                        <div className='h-[1px] mt-[13px] mb-4 w-[60%] bg-white'></div>
                        <p>Login to Access Dashboard</p>
                    </div>
                </div>
                {/* <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" /> */}
            </div>
        </div>
        {
          msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default Login