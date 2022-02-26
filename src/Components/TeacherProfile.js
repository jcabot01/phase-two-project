import React from 'react';
import { useParams } from "react-router-dom";

function TeacherProfile({ teachers }) {
  const { name } = useParams();
  
  
  return (
    <section>
      <div className='profile-container'>
        {teachers
          .filter((teacher) => teacher.name === name)
          .map((teacher, index) => (
            <div key={index} className='profile-card'>
              <h2 className='teacher-name'>{teacher.name}</h2>
              <img 
                className='teacher-image' 
                src={teacher.image} 
                alt={teacher.name}
              />
              <h3 className='instrument'>{teacher.instrument}</h3>
              <p className='years'>Experience: {teacher.years} years</p>
              <ul className='contact'>
              <li>Phone #: {teacher.phone}</li> 
              <li>Email: {teacher.email}</li>
              </ul>
              <p><b>Teaching Experience:</b> {teacher.experience}</p>
            </div>
        ))}
      </div>
      </section>
  )
}

export default TeacherProfile