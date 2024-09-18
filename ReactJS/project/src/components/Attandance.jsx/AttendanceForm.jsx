function AttendanceForm({ students, markAttendance }) {
    const handleAttendance = (id, status) => {
      markAttendance(id, status);
    };
  
    return (
      <div>
        <h2>Mark Attendance</h2>
        {students.map(student => (
          <div key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => handleAttendance(student.id, "Present")}>Present</button>
            <button onClick={() => handleAttendance(student.id, "Absent")}>Absent</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default AttendanceForm;