import React, { useEffect, useRef, useState } from 'react'

export default function UseEffectHook() {
    const [date,setDate] = useState("");
    const color = useRef();
    useEffect(()=>{
        setInterval(()=>{
            setDate(`${new Date().toLocaleString({numeric:"true"})}`);
        },1000);

        
        color.current.style.background = "#"+`${Math.random().toString(16).slice(-6)}`;
        color.current.style.color="#"+`${Math.random().toString(16).slice(-6)}`;

    },[date]);


  return (
    <div ref={color} style={{position:"absolute",width:"100%",height:"100%"}}>
        <h1>UseEffect Hook</h1>
        <h1>Date : {date} </h1>
    </div>
  )
}
