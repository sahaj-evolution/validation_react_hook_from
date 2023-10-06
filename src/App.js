import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Home from "./Home/Home"
import Dashboard from './Home/Dashboard/Dashboard'
import Present from './Home/Present/Present';
import Absent from './Home/Absent/Absent';
import Search from './Home/Search/Search';

function App() {


  const userToken = localStorage.getItem('userData')

  return (
    <BrowserRouter>
      <Routes>
        {/* {
          userToken &&
          <>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/present" element={<Present />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/absent" element={<Absent />} />
          <Route path="/search" element={<Search />} />
          </>
        }
        {
          (userToken === undefined || userToken === '' || userToken === null) &&
          <Route path="/*" element={<Login />} />
          
        } */}
        <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/present" element={<Present />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/absent" element={<Absent />} />
          <Route path="/search" element={<Search />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
