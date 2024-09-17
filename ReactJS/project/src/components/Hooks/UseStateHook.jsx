import React, { useState } from "react";

export default function UseStateHook() {
  /* 
        Syntax

        const [VAR1,VAR2] = useState(initial value);
    */

        const [state,setState] = useState(0);


        function handleChangeState(){
          setState(2)
        }
        console.log(state);
        
        const [text,setText] = useState("");
  return (
    <div>
      <button
        onClick={()=>{
          setState(1)
        }}
      >State 1</button>

      <button
        onClick={handleChangeState}
      >State 2</button>
      
      <label htmlFor="">enter some text</label>
        <input type="text" name="" id="" onChange={(e)=>{setText(e.target.value)}} />
        <h1>{text}</h1>
        <DisplayUpdatedState state={state}  text={text} />
    </div>
  );
}


function DisplayUpdatedState(prop) {
  if (prop.state === 1) {
    return (
      <div>
        <h1>State 1</h1>
        <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sed
          dicta officiis modi dolorum fuga iusto, soluta illum praesentium? Fuga
          debitis facilis consequatur excepturi quas labore unde, tempore
          quaerat molestias!
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s"
          alt=""
        />
        <h1>{prop.text}</h1>
      </div>
       
    );
  } else if (prop.state === 2) {
    return (
      <div>
        <h1>State 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sed
          dicta officiis modi dolorum fuga iusto, soluta illum praesentium? Fuga
          debitis facilis consequatur excepturi quas labore unde, tempore
          quaerat molestias!
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s"
          alt=""
        />
        <h1>{prop.text}</h1>
      </div>
    );
  }
}
