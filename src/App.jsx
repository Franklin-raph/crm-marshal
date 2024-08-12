import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import RegisterAlumni from './pages/register-alumni/RegisterAlumni'
import ItTraining from './pages/it-training/ItTraining'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-[#F3F4F6] h-[100dvh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-alumni' element={<RegisterAlumni />} />
        <Route path='/it-training' element={<ItTraining />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
