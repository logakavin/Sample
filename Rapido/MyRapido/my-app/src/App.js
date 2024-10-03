import React from "react";
import HomePage from "./Components/HomePage";
import {  Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar"
// import Home from "./pages/Home";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Booking from "./Components/Booking"

function App() {
  

  return (
    <div>
    

   
      {/* <Navbar /> */}
      <HomePage/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Booking" element={<Booking/>}/>
      </Routes>
    
    </div>
  );
}

export default App;