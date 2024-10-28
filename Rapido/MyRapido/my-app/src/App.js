import React from "react";
import HomePage from "./Components/HomePage";
 import {  Routes } from "react-router-dom";
//  import Navbar from "./Components/Navbar"
//  import Home from "./pages/Home";
//  import About from "./Components/About"
//   import Contact from "./Components/Contact";
//   import Help from "./Components/Help";
//   import Booking from "./Components/Booking"

function App() {
  

  return (
    <div>
    
       <div class='navbars'>
        
        {/* <ol className='list'>
        <li><img className='na' height="80px" width="200px" src="https://static.vecteezy.com/system/resources/previews/012/713/152/non_2x/lk-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg"t=""/></li>
         <li><Link  className='hlink' to="./Booking">Booking</Link></li>
          <li><Link className='hlink' to='./Contact'>Contact</Link></li>
          <li><Link className='hlink' to='./About'>About</Link></li>
          <li><Link className='hlink' to='./Help'>Help?</Link></li>


        </ol> 
         */}
  </div>
   
      <Routes>
        {/* <Route path="/HomePage" element={<HomePage/>}/> */}
       {/* <Route path="/About"element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        */}
        
      </Routes> 
      


<HomePage/> 


    </div>

  );
}

export default App;