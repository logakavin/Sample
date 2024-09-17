import React, { useRef } from "react";

export default function UseRefHook() {
    const inp = useRef(null);
    const display = useRef();
  function handleClick() {
    console.log(inp.current);
    display.current.innerHTML = inp.current.value;

    display.current.style.background = "#"+Math.random().toString(16).slice(-6);
    display.current.style.color = "#"+Math.random().toString(16).slice(-6);

  }
  
  return (
    <div>
      <label htmlFor="">Text : </label>
      <input type="text" name="" id="" ref={inp} placeholder={"Enter some text"} />
      <button onClick={handleClick}>Click</button>
      <h1 ref={display}></h1>

    </div>
  );
}
