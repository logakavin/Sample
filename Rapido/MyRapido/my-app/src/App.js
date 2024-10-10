import React from "react";
import HomePage from "./Components/HomePage";
import {  Route, Routes,Link } from "react-router-dom";
// import Navbar from "./Components/Navbar"
// import Home from "./pages/Home";
import About from "./Components/About"
 import Contact from "./Components/Contact";
 import Services from "./Components/Services";
 import Booking from "./Components/Booking"

function App() {
  

  return (
    <div>
    
      {/* <div class='navbar'>
        
        <ol className='list'>
 <li><img height="30px" width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2okcUTeU2jOfRHPN4iHLdBUlh5YHGD76lkg&s" alt=""/></li>
        <li><Link to="./Homepage">Home</Link></li>
          
          <li><Link to="./About">About</Link></li>
          <li><Link to='./Services'>Services</Link></li>
          <li><Link to='./Booking'>Booking</Link></li>
          <li><Link to='./Contact'>Contact</Link></li>
        </ol> 
        
  </div>
   
      <Routes>
        
        <Route path="/About"element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
     
      </Routes> */}
      


<HomePage/> 


    </div>

  );
}

export default App;