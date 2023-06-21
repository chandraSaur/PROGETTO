import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';


function Main() {
  return (
    <>
        <div>
          <nav>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
          <Outlet />
        </div>
    </>
  )
}

function App() {
  return (
    <>
      <Welcome/>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome />}>
           <Route path="/login" element={<Login />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
     
  )
}

export default App;
