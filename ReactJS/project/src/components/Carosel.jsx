import React from 'react'

export default function Carosel() {
  return (
    <div>

<div id="slider1" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#slider1" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slider1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slider1" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-item active" data-bs-interval="3000">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                class=" d-block w-100 h-20" height="600px"  alt=""/>   
            
        </div>
        
        <div class="carousel-item" data-bs-interval="3000">
        <img src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/new/rentals-tours.jpg"
                class=" d-block w-100 h-20" height="600px"  alt=""/>   
       
           </div> 
           <div class="carousel-item" data-bs-interval="3000">

           </div>
           </div>   

</div>

    </div>
  )
}
