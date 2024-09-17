import React,{createContext} from 'react'
import Input from './Input'
import'./Certify.css'

export const user = createContext();

export default function Certificate1() {

  const name=
 <div className='bg'>
 <div className='a'>
<h5>Name:B.Logakavin</h5>
 <h5>Course:MERN </h5>
 <h5>Year:2024</h5> 

 </div>

 </div>
  return ( 
    <div>
      <h1>certificate one</h1>
      
        <user.Provider value={name}>
          <Input></Input> 
        </user.Provider>

    </div>
  )
}


  
