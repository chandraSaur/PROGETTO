import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import Dashboard from './pages/esempiologin';

import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';


function App() {
  return (
      <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      /*{ <Welcome/>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </BrowserRouter> } */    
  )
}

export default App;
