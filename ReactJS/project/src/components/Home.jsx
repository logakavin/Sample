import React from "react";
import './home.css'
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div class="nav">
           {/* <img src="https://www.starbucks.in/assets/icon/logo.png" alt=""></img> */}
            {/* <h3>home</h3>
            <h3>gift</h3>
            <h3>order</h3>
            <h3>pay</h3> */}
            <div className="sidebar">
                <Link to={"home1"}>Home 1</Link>
                <Link to={"about1"}>About 1</Link>
                <Link to={"contact1"}>Contact 1</Link>
            </div>
            <div className="output">
                <Outlet />
            </div>
        </div>
        

    )
    
}
