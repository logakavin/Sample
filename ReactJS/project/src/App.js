import "./App.css";
import FileUploadForm from "./components/FileUploadForm";
// import MainAttendance from "./components/Attandance/MainAttendance";
// import Port1 from "./components/Portfolio/Port1";
// import React,{ useState} from "react";
// import StudentList from "./components/Attandance/StudentList"
// import AttendanceForm from "./components/Attandance/AttendanceForm";
// import AttendanceReport from "./components/Attandance/AttendanceReport";


// import CounterApp from "./components/Redux/CounterApp";
// import CustomHook from "./components/Hooks/CustomHook";
// import UseCallBackHook from "./components/Hooks/UseCallBackHook";
// import Card from "./components/Task/Card";
// import UseMemoHook from "./components/Hooks/UseMemoHook";
// import { Navigate, Link, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// import Gmaila from './components/Gmail/Gmaila';
// import Password from './components/Gmail/Password';
// import Sidebar from './components/Gmail/Sidebar';
// import Inbox from './components/Gmail/Inbox';
// import UseStateHook from './components/Hooks/UseStateHook';
// import Certificate1 from "./components/Certificate/Certificate1";
// import Register from "./components/axios/Register";
// import UseEffectHook from "./components/Hooks/UseEffectHook";
// import UseReducerHook from "./components/Hooks/UseReducerHook";
// import UseReducerHook1 from "./components/Hooks/UseReducerHook1";
// import UseRefHook from './components/Hooks/UseRefHook';
// import Usecontexthook from './components/Hooks/Usecontexthook';
// import UseStateHook from './components/Hooks/UseStateHook';
// import Form from "./components/Form";

import Carosel from "./components/Carosel";


function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <div>
         
           
        </div>
      </header>



      {/* Hooks */}
      {/* <UseStateHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseStateHook /> */}
      {/* <Usecontexthook></Usecontexthook> */}
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseReducerHook1/> */}
      {/* <UseCallBackHook /> */}
       {/* <Card />  */}
       {/* <MainAttendance /> */}
      {/* <CounterApp /> */}
      {/* <UseMemoHook /> */}
      {/* <Certificate1/> */}
        {/* <CustomHook /> */}
       {/*<Register/>*/}
      {/* <MainAttendance/> */}
      {/* <Port1 /> */}
{/* <Form/> */}
{/* <FileUploadForm/> */}
{/* <Carosel/> */}
        <Routes>
          <Route path="/" element={<FileUploadForm/>}/>
          <Route path="/home" element={<Carosel/>}/>
        </Routes>
    </div>
);
}  
export default App;
