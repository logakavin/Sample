import React, { useContext } from 'react'
import { user } from './Usecontexthook'

export default function Child() {
    const money = useContext(user)
  return (
    <div>
        <h1>Child</h1>
        <h1>{money}</h1>
        
    </div>
  )
}
