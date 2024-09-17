import React,{useCallback, useState} from 'react'
import './Card.css'

export default function Card() {

    const [state,setState] = useState(0);
    

    function handleChangeState(){
      setState(2)
    }


    
// const car = useCallback ;
    const [car, setCar] = useState([]);

    const addCar = useCallback(() => {
        setCar((t) => [...t,  <p className='p1'>
            <h1>Product 1</h1>
          </p>,

//  <p className='p2'>
//             <h1>Product 2</h1>
//           </p>

         
]);
      }, car);
    
      const Car = ({ Car, addCar }) => {
        console.log("child render");
        return (
          <>
            
            {car.map((Car, index) => {
              return <p key={index}>{Car}</p>;
            })}
            <button onClick={addCar}>call+</button>
          </>
        );
      };
    
return (
<div>   

<Car car={Car} addCar={addCar} />

  <button
    onClick={()=>{
      setState(1)
    }}
  >use-</button>

  <button
    onClick={handleChangeState}
  >use+</button> 

  
 <DisplayUpdatedState state={state}  />
</div>
);
}


function DisplayUpdatedState(prop) {
if (prop.state === 1) {
return (
  <div className='Card 1'>
    <h1>Card 1</h1>
    <p className='p1'>
      <h1>Product 1</h1>
     
    </p>
  </div>
   
);
} else if (prop.state === 2) {
return (
  <div>
    <h1>Card 2</h1>
    <p  className='p2'>
       <h1> Product 2</h1>
     
    </p>
   
    
  </div>
);
}
}