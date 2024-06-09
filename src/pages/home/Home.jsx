import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    
    const navigate = useNavigate()

  return (
    <div className='max-w-[1400px] mx-auto bg-[#F3F4F6]'>
        <nav className='flex items-center justify-between px-[5rem] py-4 shadow-sm'>
            <Link to='/' className='flex items-center gap-3'>
                <img src="./images/brand-header.png" className='w-[35px]' alt="" />
                <p className='font-[600] text-gray-500'>INFOTECH IMPACT</p>
            </Link>
            <Link to='/support' className='text-gray-500'>Support</Link>
        </nav>
        <div className='mt-[5rem] flex items-center flex-col md:flex-row justify-between'>
            <div className='px-[2rem] lg:px-[5rem] w-full md:text-left text-center md:w-[55%]'>
                <h1 className='text-[28px] md:text-[28px] lg:text-[50px] text-gray-700 font-[600]'>Hello, I am CRM Marshal</h1>
                <p className='mb-6 text-[16px] md:text-[18px] text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam eum blanditiis earum voluptates natus, id reiciendis distinctio quos vel error.</p>
                <div className='flex items-center gap-[1rem] justify-center md:justify-start flex-col sm:flex-row'>
                    <button onClick={() => navigate('/login')} className='bg-[#2B91F3] py-[0.8rem] text-white rounded-full sm:w-[30%] w-[70%] px-[2rem] hover:shadow-lg'>Login</button>
                    <button onClick={() => navigate('/register-alumni')} className='border-2 border-[#2B91F3] py-[0.8rem] text-[#2B91F3] hover:shadow-lg rounded-full sm:w-[30%] w-[70%] px-[2rem]'>Register</button>
                </div>
            </div>
            <img src="./images/crm1.jpg" alt="" className='md:hidden block w-[90%] rounded-[10px] my-[3rem]'/>
            <div className='w-[45%] mr-[5rem] relative mb-[8rem] mt-[7rem] hidden md:block'>
                <div className='w-[300px] mx-auto h-[450px] rounded-[36px] cursor-pointer border-2 border-[#dbdbdb] image-container overflow-hidden'>
                    <img src="./images/crm1.jpg" alt="" className='rounded-[36px] h-full object-cover'/>
                </div>
                <div className='w-[160px] mx-auto h-[150px] rounded-[36px] cursor-pointer absolute top-[-50px] shadow-lg image-container border-2 border-[#dbdbdb] overflow-hidden'>
                    <img src="./images/crm2.png" alt="" className='rounded-[36px] h-full object-cover'/>
                </div>
                <div className='w-[160px] mx-auto h-[150px] rounded-[36px] absolute bottom-[-50px] right-[50px] shadow-lg border-2 image-container border-[#dbdbdb] overflow-hidden'>
                    <img src="./images/crm6.webp" alt="" className='rounded-[36px] h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home