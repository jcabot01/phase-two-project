import React from 'react';
import { useParams } from "react-router-dom";

function TeacherProfile({ name, image, instrument, years, email, phone, experience }) {
  const { id } = useParams();

  
  return (
    <div>
      teacher stuff {id}
      <h2 className='teacher-name'>{name}</h2>
      <img 
        className='teacher-image' 
        src={image} 
        alt={name}
      />
      <h3 className='instrument'>{instrument}</h3>
      <p className='years'>Experience: {years} years</p>
      <ul className='contact'>
       <li>Phone #: {phone}</li> 
       <li>Email: {email}</li>
      </ul>
      <p><b>Teaching Experience:</b> {experience}</p>

    </div>
  )
}

export default TeacherProfile