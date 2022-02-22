import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeacherContainer from "./Components/TeacherContainer"
import Search from "./Components/Search";
import TeacherProfile from "./Components/TeacherProfile";
import Form from "./Components/Form";


function App() {
  const [search, setSearch] = useState("")
  const [teachers, setTeachers] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/teachers") 
    .then((res) => res.json())
    .then((teacherObjs) => setTeachers(teacherObjs))  
  })


  //maybe turn the <nav> into a NavBar component, call it here, but insert
  //<Home>, <Search>, and <Form> inside the NavBar component.
  //Also, Home could be called something better, like TeacherCardContainer 
  //interpolate `${teachers.id}` for specific profile page
  return (
    <Router>
      <nav className="nav">
        <h1 className="brand-name">Teacher Findr</h1>
        <Link className="home" to="/">Home</Link>
        <Link className="add-new" to="/form">+ Add New</Link>
        <Search search={search} setSearch={setSearch} />
      </nav>
      <Routes>
        <Route path="/" element={<TeacherContainer teachers={teachers}/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<TeacherProfile />} />
      </Routes>
    </Router>
    
  );
}

export default App;
