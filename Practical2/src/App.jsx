import React from "react";
import Student from "./Components/Student";
function App() {
 return (
 <div>
 <h1>Student Details</h1>
 <Student
 name="Kuldeep Naagar"
 rollNo="67"
 course="BCA"
 marks="85%"
 />
 <Student
 name="Dhruvin Mutha"
 rollNo="66"
 course="BCA"
 marks="65%"
 />
 <Student
 name="Siddharth"
 rollNo="65"
 course="BCA"
 marks="78%"
 />
 </div>
 );
}
export default App; 
