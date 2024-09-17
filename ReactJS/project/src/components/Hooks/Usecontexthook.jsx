import React, { createContext } from 'react'
import Parent from './Parent';
import Child from './Child';

 export const user = createContext();

export default function Usecontexthook() {
    const amount = 23000;

  return (
    <div>

        <h1>grandparent</h1>
        {/* <Parent></Parent> */}

        <user.Provider value={amount}>
            <Child></Child>
            <Parent></Parent>
        </user.Provider>
        
        
        



    </div>
  )
}
