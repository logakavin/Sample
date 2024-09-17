import React, { useCallback, useRef, useState } from 'react'

export default function UseCallBackHook() {
    const color = useRef();
    const [getColor,setColor] = useState("");



    const handleClick = useCallback(() =>{
        color.current.style.background = getColor;
    },[getColor])



  return (
    <div style={{position:"absolute",width:"100%",height:"100%"}} ref={color}>
        <h1>useCallback Hook</h1>

        <input type="text" name="" value={getColor} onChange={(e)=>{setColor(e.target.value)}} id="" placeholder="Enter color Pattern" />
        <button onClick={handleClick}>Change Color</button>
    </div>
  )
}
