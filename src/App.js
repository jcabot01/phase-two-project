import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Nav from "./Components/Nav";
import TeacherContainer from "./Components/TeacherContainer";
import TeacherProfile from "./Components/TeacherProfile";
import Form from "./Components/Form";
import ClickMe from "./Components/ClickMe";


function App() {
  const [search, setSearch] = useState("")
  const [teachers, setTeachers] = useState([]) //JSON data, set to an array

  useEffect(() => {
    fetch("http://localhost:3000/teachers") 
    .then((res) => res.json())
    .then((teacherObjs) => setTeachers(teacherObjs))  
  }, [])


  function onDeleteClick(id) {
    const remainingTeachersFilter = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(remainingTeachersFilter)
  }

  function onTeacherFormSubmit(newTeacher) {
    setTeachers([...teachers, newTeacher])
  }

  const searchTeachers = teachers.filter((teacher) => teacher.instrument.toLowerCase().includes(search.toLowerCase())) //return teachers that match the state of search.  Convert all to lowercase to see if they match.
  
  
  return (
    <Router>
      <Nav setSearch={setSearch} search={search}/>
      <Routes>
        <Route path="/form" element={<Form onTeacherFormSubmit={onTeacherFormSubmit}/>} />
        <Route path="/teacher/:name" element={<TeacherProfile teachers={teachers}/>} />
        <Route path="/" element={<TeacherContainer teachers={searchTeachers} onDeleteClick={onDeleteClick} />} />
        <Route path ="*" element="404 PAGE NOT FOUND"/>
        <Route path ="/clickme" element={<ClickMe />} />
      </Routes>
    </Router>
  );
}

export default App;
