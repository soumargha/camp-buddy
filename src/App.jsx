import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Youritems from './pages/Youritems';
import Cart from './pages/Cart';
import Profile from './pages/Profile';


function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/youritems' element={<Youritems/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
