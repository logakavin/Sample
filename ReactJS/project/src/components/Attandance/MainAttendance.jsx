import React,{ useState} from 'react'
import { StudentList } from './StudentList';
import { AttendanceForm } from './AttendanceForm';
import { AttendanceReport } from './AttendanceReport';
import "./Attendance.css";


export default function MainAttendance() {
    const [students, setStudents] = useState([
        { id: 1, name: "Loga", attendance: null },
        { id: 2, name: "Kavin", attendance: null },
        { id: 3, name: "Akil", attendance: null },
        { id: 4, name: "Gowtham", attendance:null},
        { id: 5, name: "Ajith", attendance:null},
        { id: 6, name: "Vijay", attendance:null},
        { id: 7, name: "Ram", attendance:null},
    
      ]);
    
      const markAttendance = (id, status) => {
        setStudents(students.map(student =>
          student.id === id ? { ...student, attendance: status } : student
        ));
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

      
</div>
)
}
