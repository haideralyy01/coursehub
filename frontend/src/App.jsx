import './App.css'
import Homepage from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
