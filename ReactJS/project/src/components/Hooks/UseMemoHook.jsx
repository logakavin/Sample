import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [num,setNum] = useState();

    const loop = useMemo(()=>{
        let a = 0;
        for(let i=0;i<num;i++)
        {
            a+= num*num
        }
        return a
    },[num]);


  return (
    <div>
        <h1>UseMemo Hook</h1>
        <input type="number" name="" value={num} onChange={(e)=>{setNum(e.target.value)}} id="" />

        <h1>
            result : {num} <br/>
            loop: {loop}
        </h1>
    </div>
  )
}
