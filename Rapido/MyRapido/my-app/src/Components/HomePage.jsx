import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export default function HomePage() {
  return (
    <div>
      <div class='navbar'>
        {/* <h1 classname ='nh' >Royal Ride</h1> */}
      <ol className='list'>
        <li className='head'>Royal Ride</li>
        
        <li><Link to="./About">About</Link></li>
        <li><Link to='./Services'>Services</Link></li>
        <li><Link to='./Booking'>Booking</Link></li>
        <li><Link to='./Contact'>Contact</Link></li>
      </ol> 
     
      
</div>

 



<div className='content'>
<h1 className='r'>Royal  Ride</h1>
<p className='para'>We Are Always Here At Your Service</p>
</div>
<div className='phone'>
<img className='img1' height="70px" width="80px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37nwt5mzHKpGTZ18NCNXWRDly1AfYhvfSrw&s' alt=''></img>
 <h1 className='call'>Call Us 24 Hours</h1>
<h1 className='ph'>9344752686</h1>
</div>

                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
</div>
)
}
