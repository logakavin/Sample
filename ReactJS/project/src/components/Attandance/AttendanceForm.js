import React from "react";

 export function AttendanceForm({ students, markAttendance }) {
    const handleAttendance = (id, status) => {
      markAttendance(id, status);
    };
  
    return (
      <div>
        <h2 className="s">Mark Attendance</h2>
        {students.map(student => (
          <div key={student.id}>
            <span className="stn">{student.name}</span>
            <button className="btnp" onClick={() => handleAttendance(student.id, "Present")}>Present</button>
            <button className="btna" onClick={() => handleAttendance(student.id, "Absent")}>Absent</button>
          </div>
        ))}
      </div>
    );
  }
  
  