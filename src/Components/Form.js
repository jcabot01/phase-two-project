import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function Form({ onTeacherFormSubmit }) {
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [image, setImage] = useState("");
  const [years, setYears] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperiece] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addNewTeacher = {
      id: uuidv4(),
      name: name,
      instrument: instrument,
      image: image,
      years: years,
      email: email,
      phone: phone,
      experience: experience,
    };

    fetch("http://localhost:3000/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewTeacher),
    })
      .then((res) => res.json())
      .then((newTeacher) => onTeacherFormSubmit(newTeacher))
  };

  function handleName(e) {
    setName(e.target.value)
  };

  function handleInstrument(e) {
    setInstrument(e.target.value)
  };

  function handleImage(e) {
    setImage(e.target.value)
  };

  function handleYears(e) {
    setYears(e.target.value)
  };

  function handleEmail(e) {
    setEmail(e.target.value)
  };

  function handlePhone(e) {
    setPhone(e.target.value)
  };

  function handleExperience(e) {
    setExperiece(e.target.value)
  };

  return (
    <div className='new-teacher-form'>
      <h2>New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='First and Last Name' value={name} onChange={handleName} />
        <input type="text" name="instrument" placeholder='Instrument' value={instrument} onChange={handleInstrument} />
        <input type="text" name="image" placeholder='image URL' value={image} onChange={handleImage} />
        <input type="number" name="years" placeholder='# of years as a teacher' value={years} onChange={handleYears} />
        <input type="text" name="email" placeholder='email@sample.com' value={email} onChange={handleEmail} />
        <input type="tel" name="phone" placeholder='(123)-456-7890' value={phone} onChange={handlePhone} />
        <input type="text" name="experience" placeholder='briefly describe teaching experience' value={experience} onChange={handleExperience} />
      </form>
    </div>
  )
}

export default Form