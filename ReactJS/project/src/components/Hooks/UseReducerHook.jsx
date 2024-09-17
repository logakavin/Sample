import React, { useReducer } from "react";

export default function UseReducerHook() {
  const data = {
    Name: "",
    Email: "",
    Phone: "",
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
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="Name"
        value={state.Name}
        onChange={handleChange}
        id=""
      />

      <label htmlFor="">Email</label>
      <input
        type="email"
        name="Email"
        value={state.Email}
        onChange={handleChange}
        id=""
      />

      <label htmlFor="">phone</label>
      <input
        type="number"
        name="Phone"
        value={state.Phone}
        onChange={handleChange}
        id=""
      />

      <h1>
        Name : {state.Name} <br />
        Email : {state.Email} <br />
        Phone :{state.Phone}
      </h1>
    </div>
  );
}
