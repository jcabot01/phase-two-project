import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function TeacherCard({ teachers:{id}, teachers, onDeleteClick }) {
  const [isLiked, setIsLiked] = useState("false");


  function handleClick(){
    fetch(`http://localhost:3000/teachers/${id}`, {//pull in id from click)
      method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => onDeleteClick(id))
  }

  

  return (
    <>
      {teachers.map((teacher, index) => (
        <div className='teacher-card-div' key={index}>
        <h2 className='teacher-name'>{teacher.name}</h2>
        <Link to={`/teacher/${teacher.name}`}>
          <img 
            className='teacher-image' 
            src={teacher.image} 
            alt={teacher.name}        
          />
        </Link>
        <h3 className='instrument'>{teacher.instrument}</h3>
        <p className='years'>Experience: {teacher.years} years</p>
        {isLiked ? (
          <button className='favorite-btn' 
            onClick={() => setIsLiked(false)} 
          >
            ☆
          </button>
        ) : (
          <button 
            onClick={() => setIsLiked(true)} 
          >
            ⭐
          </button>
        )}
        <button className='delete-btn' onClick={handleClick}>🗑️</button>
      </div>
      ))}
      
    </>
  )
}

export default TeacherCard