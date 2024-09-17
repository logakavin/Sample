import React, {useReducer} from 'react'

export default function UseReducerHook1() {
    const data = {
        Subject: "",
        Mark: "",
        Percentage: "",
      };
      const [state, dispatch] = useReducer(reduce, data);
     
      function reduce(state,action) {
        if(action.type==="text"){
            return{
                ...state,
                [action.field]:action.payload
            }
        }
        else{
            return false
        }
      }

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type:"text",
            field:name,
            payload:value
        })
      }
  return (
    <div>
 <label htmlFor="">Subject</label>
      <input
        type="text"
        name="Subject"
        value={state.Subject}
        onChange={handleChange}
        id=""
      />

      <label htmlFor="">Mark</label>
      <input
        type="number"
        name="Mark"
        value={state.Mark}
        onChange={handleChange}
        id=""
      />

      <label htmlFor="">Percentage</label>
      <input
        type="number"
        name="Percentage"
        value={state.Percentage}
        onChange={handleChange}
        id=""
      />
<h1>
Subject : {state.Subject}<br/>
Mark : {state.Mark}<br/>
Percentage :{state.Percentage}
</h1>
    </div>
  );
}
