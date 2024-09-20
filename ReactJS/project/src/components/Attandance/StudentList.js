import React from "react";
export function StudentList({ students }) {
    return (
      <div>
        <h2 className="s">Students List</h2>
        <ul>
          {students.map(student => (
            <li className="List" key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div> 
    );
  }
  
  
