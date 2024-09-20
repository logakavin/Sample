import React from "react";

export function AttendanceReport({ students }) {
    return (
      <div>
        <h2 className="s">Attendance Report</h2>
        <ul>
          {students.map(student => (
            <li className="List" key={student.id}>
              {student.name}: {student.attendance || "Not Marked"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
