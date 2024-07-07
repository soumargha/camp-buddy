import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
