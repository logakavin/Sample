import React from 'react'
import './Home.css'
import {Link,Route,Routes} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Booking from './Booking'


export default function HomePage() {
  return (
    <div>

       <div class='navbar'>
        
        <ol className='list'>
 <li><img className='na' height="30px" width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2okcUTeU2jOfRHPN4iHLdBUlh5YHGD76lkg&s" alt=""/></li>
        {/* <li><Link to="./Homepage">Home</Link></li> */}
         <li><Link to="./About">About</Link></li>
          <li><Link to='./Services'>Services</Link></li>
          <li><Link to='./Booking'>Booking</Link></li>
          <li><Link to='./Contact'>Contact</Link></li>
        </ol> 
        
  </div> 
        <div>
          <h1  className='main2'>Welcome To Royal Cab Booking Services </h1>
        </div>

  
  <Routes>
        
        <Route path="/About"element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        {/* <Route path="/HomePage" element={<HomePage/>}/> */}
     
      </Routes>
                                                                                                                                                
                                                                                                                                                       
</div>
)
}
