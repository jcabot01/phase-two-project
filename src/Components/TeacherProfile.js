import React from 'react';
import { useParams } from "react-router-dom";

function TeacherProfile({ teachers }) {
  const { name } = useParams();
  
  return (
    <section>
      <div className='profile-container'>
        {teachers
          .filter((teacher) => teacher.name === name)
          .map((teacher) => (
            <div key={teacher.id} className='profile-card'>
              <h2 className='profile-teacher-name'>{teacher.name}</h2>
              <img 
                className='profile-teacher-image' 
                src={teacher.image} 
                alt={teacher.name}
              />
              <div className='profile-teacher-info'>
                <h3 className='profile-instrument'>{teacher.instrument}</h3>
                <br></br>
                <p className='profile-years'><b>Experience:</b> {teacher.years} years</p>
                <br></br>
                <ul className='contact'>
                <li className='contact'><b>Phone #:</b> {teacher.phone}</li> 
                <li className='contact'><b>Email:</b> {teacher.email}</li>
                </ul>
                <br></br>
                <p className='profile-experience-title'><b>Teaching Experience:</b></p>
                  <p className='experience-info'>{teacher.experience}</p>
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default TeacherProfile