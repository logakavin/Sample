import React, { useContext } from 'react'

import  { user } from './Certificate1'

export default function Input() {
    const name = useContext(user)
  return (
    <div>
      <h1>certificate2</h1>
      <h1>{name}</h1>
    </div>
  )
}
