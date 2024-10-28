import React from 'react'
import './Home.css'
import {Link,Route,Routes} from 'react-router-dom'
 import About from './About'
 import Contact from './Contact'
 import Help from './Help'
 import BusBookingForm from './BusBookingForm'


export default function HomePage() {
  return (
    <div>

       <div class='navbar'>
        
        <ol className='list'>
       <li> <img className='na' height="80px" width="200px" src="https://static.vecteezy.com/system/resources/previews/012/713/152/non_2x/lk-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg"t=""/></li>
        
         <li><Link  className='hlink' to="./BusBookingForm">Booking</Link></li>
          <li><Link className='hlink' to='./Contact'>Contact</Link></li>
          <li><Link className='hlink' to='./About'>About</Link></li>
          <li><Link className='hlink' to='./Help'>Help?</Link></li>
        </ol> 
        
  </div> 
      
            
  
   <Routes>
        
        <Route path="/About"element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Help" element={<Help/>}/>
        <Route path="/BusBookingForm" element={<BusBookingForm/>}/>
 
       </Routes> 
       
                                                                                                                                                                                                                                                                                              
</div>
)
}
