import React from "react";
function StudentList({ students }) {
    return (
      <div>
        <h2>Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StudentList;