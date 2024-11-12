import React, { useState } from 'react';

const BusBookingForm = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Valid locations for validation
  const validLocations = ['Coimbatore', 'Chennai', 'Bangalore'];
  const validpassengers=['1','2','3','4'];
  const Price=  passengers * 2000;
  

  const handleSubmit = (e) => {
    e.preventDefault();

  
    
    if (!validpassengers.includes(passengers)){

      alert("Price ="+ Price)
    }


if(!validpassengers.includes(passengers)){
  alert('Only 4 Passengers can Available')
  return;
}

    // Validation for empty fields
    if (!departure || !destination || !date || passengers < 1) {
      alert('All fields are required, and passengers must be at least 1.');
      return;
    }
    

    // Check if departure and destination are in valid locations
    if (!validLocations.includes(departure)) {
      alert('Invalid Departure location. Please choose from available locations.');
      return;
    }

    if (!validLocations.includes(destination)) {
      alert('Invalid Destination location. Please choose from available locations.');
      return;
    }


    // Display booking details if all inputs are valid
    alert (`Booking confirmed from ${departure} to ${destination} on ${date} for ${passengers}   passenger(s)  price ${Price} .`);
  }; 


  return (


<div className="bh">
<h1 className='b'>India's No 1 Booking Service Site </h1>
<div className="boo">
<form onSubmit={handleSubmit}>
<label className="bl" htmlFor="departure">Departure Location:</label>
<input
className="in"
  type="text"
  id="departure"
  value={departure}
  onChange={(e) => setDeparture(e.target.value)} 
  placeholder="Enter departure location"
/>

<label className="bldes" htmlFor="destination">Destination Location:</label>
  <input
  className="inpbd"
    type="text"
    id="destination"
    value={destination}
    onChange={(e) => setDestination(e.target.value)} 
          placeholder="Enter destination location"
  />


<div className='bi'>
<div style={{ marginBottom: '10px' }}>
           <label className='bl'>Date of Travelling :</label>
           <input
           className='inpb'
             type="date"
             value={date}
             onChange={(e) => setDate(e.target.value)}
            //  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
           />
         </div>

<div style={{ marginBottom: '10px' }}>
           <label className='bldpe'>Number of Passengers:</label>
         <input
          placeholder='Number of Passengers'
          className='inpb'
             type="number"
             value={passengers}
             onChange={(e) => setPassengers(e.target.value)}             min="1"
            //  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
           />
         </div>
</div>
  <button className="btnb" type="submit">Book Cab</button>
</form>


</div>
<div className='bb2'>

<h1>NOW, GET MORE THAN JUST TICKETS WITH US!</h1>


</div>
</div>
);
};


export default BusBookingForm;