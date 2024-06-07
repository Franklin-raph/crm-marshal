import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
        class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div>
                    {/* <i class="ri-arrow-left-line text-2xl border border-gray-300 text-gray-300 rounded-full p-1 hover:bg-gray-300 transition-all cursor-pointer hover:text-white"></i> */}
                    <img src="./images/logo.jpeg" className='w-[120px] mx-auto' alt="" />
                </div>
                    <form class="mt-12 flex flex-col items-center">
                        <h1 class="text-xl xl:text-2xl font-bold">
                            Sign in to your account
                        </h1>
                        <div class="w-full flex-1 mt-8">
                            <div class="mx-auto max-w-xs">
                                <input
                                    class="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    class="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                />
                                <p className='mt-1 text-end cursor-pointer text-gray-400 hover:text-[#2B91F3]' >Forgot Password?</p>
                                <button
                                type='submit'
                                class="mt-5 tracking-wide font-semibold bg-[#2B91F3] text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                    class="w-6 h-6 -ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3">
                                    Sign In
                                    </span>
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
            <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login