import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TeacherContainer from "./Components/TeacherContainer"
import Search from "./Components/Search";
import TeacherProfile from "./Components/TeacherProfile";
import Form from "./Components/Form";


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

  const searchTeachers = teachers.filter((teacher) => teacher.instrument.toLowerCase().includes(search.toLocaleLowerCase()))
 
  return (
    <Router>
      <nav className="nav">
        <h1 className="brand-name">Teacher Findr</h1>
          <Link className="home" to="/">Home</Link>
          <Link className="add-new" to="/form">+ Add New</Link>
            <Search search={search} setSearch={setSearch} />
      </nav>
      <Routes>
        <Route path="/form" element={<Form onTeacherFormSubmit={onTeacherFormSubmit}/>} />
        <Route path="/teacher/:id" element={<TeacherProfile teachers={teachers}/>} />
        <Route exact path="/" element={<TeacherContainer teachers={searchTeachers} onDeleteClick={onDeleteClick} />} />
        <Route path ="*" element="404 PAGE NOT FOUND"/>
      </Routes>
    </Router>
    
  );
}

export default App;
