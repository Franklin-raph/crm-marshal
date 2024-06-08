import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import RegisterAlumni from './pages/register-alumni/RegisterAlumni'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-[#F3F4F6] h-[100dvh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-alumni' element={<RegisterAlumni />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
