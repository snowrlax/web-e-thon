
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<HomePage />} />
        <Route path='/signup' element={<HomePage />} />
        <Route path='/mentors' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
      </>
  )
}

export default App
