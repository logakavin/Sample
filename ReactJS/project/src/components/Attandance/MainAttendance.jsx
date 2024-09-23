import React,{ useState} from 'react'
import { StudentList } from './StudentList';
import { AttendanceForm } from './AttendanceForm';
import { AttendanceReport } from './AttendanceReport';
import "./Attendance.css";
import axios from 'axios';


export default function MainAttendance() {
  const API = "https://66c57672134eb8f434946316.mockapi.io/api"
    const [students, setStudents] = useState([
        { id: 1, name: "Loga", attendance: null },
        { id: 2, name: "Kavin", attendance: null },
        { id: 3, name: "Akil", attendance: null },
        { id: 4, name: "Gowtham", attendance:null},
        { id: 5, name: "Ajith", attendance:null},
        { id: 6, name: "Vijay", attendance:null},
        { id: 7, name: "Ram", attendance:null},
      ]);
      
     
      const saveAttendanceToAPI = async (id, status) => {
        try {
          const response = await fetch('https://66c57672134eb8f434946316.mockapi.io/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentId: id, attendance: status }),
          });
          const data = await response.json();
          console.log('Attendance saved successfully:', data);
        } catch (error) {
          console.error('Error saving attendance:',error);
      }
      };
  

      const [filter, setFilter] = useState("All");

    
      const markAttendance = (id, status) => {
        setStudents(students.map(student =>
          student.id === id ? { ...student, attendance: status } : student
        ));
      };
       const filterStudents = () => {
    if (filter === "Present") {
      return students.filter(student => student.attendance === "Present");
    } else if (filter === "Absent") {
      return students.filter(student => student.attendance === "Absent");
    }
    return students;
  };

    
  return (
    <div className='main'>
        <h1 className="head">Online Student Attendance </h1>
        
        <form>
          <label htmlFor="text">Date</label>
          <input type="date" name="" id=""></input>
        </form>
        
      <StudentList students={students} />
<AttendanceForm students={students} markAttendance={markAttendance} />
<AttendanceReport students={students} />  
  <StudentList students={filterStudents()} />

<div>
  <button onClick={() => setFilter("All")}>Show All</button>
        <button onClick={() => setFilter("Present")}>Show Present</button>
        <button onClick={() => setFilter("Absent")}>Show Absent</button>
     

     

  
     </div>
     
     
      </div>





      

)
}
