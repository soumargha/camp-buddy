import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';
import Register from './pages/Register'
import Homepage from './pages/Homepage'


function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/homepage' element={<Homepage/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
