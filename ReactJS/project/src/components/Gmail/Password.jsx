import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Password() {
  return (
    <div>
       <input placeholder='Password' type='text' id='' class="pass" ></input>
      
       <Link to={"Sidebar"}>Next  </Link>

       <div className="output">
       <Outlet />
       </div>
      

    </div>
     
  )
}
