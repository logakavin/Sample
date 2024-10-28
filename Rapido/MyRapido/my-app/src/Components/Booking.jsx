import { useState } from "react";

    const BusBookingForm = ()  => {
    
      const [departure, setDeparture] = useState('');
      const [destination, setDestination] = useState('');
    
      
      const validLocations = ['Coimbatore', 'Chennai', 'Bangalore', 'Trichy', 'Selam'];
    
      
      const handleSubmit = (e) => {
        e.preventDefault(); 
    
        
        if (!departure.trim() || !destination.trim()) {
          alert('Both departure and destination locations are required.');
          return;
        }
        
       
        const dep = departure.trim().toLowerCase();
        const dest = destination.trim().toLowerCase();
 

 if (!isValidLocation(dep)) {
  alert('Invalid Departure Location. Please choose from available locations.');
  return;
}
if (!isValidLocation(dest)) {
  alert('Invalid Destination Location. Please choose from available locations.');
  return;
}

if (dep === dest) {
  alert('Departure and Destination cannot be the same.');
  return;
}

alert('Form submitted successfully!');
};


const isValidLocation = (location) => {
  return validLocations.map((loc) => loc.toLowerCase()).includes(location);
};

return (

  <div className="bh">
    <h1 className='b'>India's No 1 Booking Service Site </h1>
    <div className="boo">
  <form onSubmit={handleSubmit}>
    <label className="bl" htmlFor="departure">Departure Location:</label>
    <input
    className="inpb"
      type="text"
      id="departure"
      value={departure}
      onChange={(e) => setDeparture(e.target.value)} 
      placeholder="Enter departure location"
    />
 <label className="bl" htmlFor="destination">Destination Location:</label>
      <input
      className="inpb"
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)} 
              placeholder="Enter destination location"
      />

      <button className="btnb" type="submit">Book Bus</button>
    </form>
    

    </div>
    <div className='bb2'>
 <h1>NOW, GET MORE THAN JUST  TICKETS WITH US!</h1>



 </div>
    </div>
  );
};
     
    
export default BusBookingForm;

