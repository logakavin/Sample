import React, { useContext } from 'react'
import Child from './Child'
import { user } from './Usecontexthook'

export default function Parent() {
 const money = useContext(user)
  return (
    <div>
        <h1>Parent</h1>
        <h1>{money}</h1>
        {/* <Child></Child> */}
    </div>
    
  )
}
