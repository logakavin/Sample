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
import Form from "./components/Form";

// import Carosel from "./components/Carosel";


function App() {

  // const [students, setStudents] = useState([
  //   { id: 1, name: "Loga", attendance: null },
  //   { id: 2, name: "Kavin", attendance: null },
  //   { id: 3, name: "Akil", attendance: null },
  //   { id: 4, name: "Gowtham", attendance:null},
  //   { id: 5, name: "Ajith", attendance:null},
  //   { id: 6, name: "Vijay", attendance:null},
  //   { id: 7, name: "Ram", attendance:null},

  // ]);

  // const markAttendance = (id, status) => {
  //   setStudents(students.map(student =>
  //     student.id === id ? { ...student, attendance: status } : student
  //   ));
  // };


  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Link to={'Gmaila'} >Gmail</Link> */}
          {/* <Link to={'Password'} >Password</Link> */}
{/* <h1 className="head">Student Attendance </h1>
      <StudentList students={students} />
<AttendanceForm students={students} markAttendance={markAttendance} />
<AttendanceReport students={students} />
           */}
        </div>
      </header>

      {/* <Routes>
        <Route path='' element={<Navigate to={'Gmaila'}/>}/>
        <Route path='Gmaila' Component={Gmaila}>
       
          <Route path='Password' Component={Password}/>
          <Route path='Sidebar' Component={Sidebar}/> 
         <Route path='Inbox' Component={Inbox}/>
        </Route>
        
        <Route path='gmaila' Component={Gmaila}/>
        <Route path='Password' Component={Password}/>
      </Routes> */}

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
       {/* <Register/>  */}
      {/* <MainAttendance/> */}
      {/* <Port1 /> */}
{/* <Form/> */}
<FileUploadForm/>
{/* <Carosel/> */}

    </div>
);
}  
export default App;
