import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function TeacherCard({ id, name, instrument, image, years, onDeleteClick }) {
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
      
        <div className='teacher-card-div' key={id}>
        <h2 className='teacher-name'>{name}</h2>
        <Link to={`/teacher/${name}`}>
          <img 
            className='teacher-image' 
            src={image} 
            alt={name}        
          />
        </Link>
        <h3 className='teacher-instrument'>{instrument}</h3>
        <p className='teacher-years'>Experience: {years} years</p>
        {isLiked ? (
          <button 
            className='favorite-btn' 
            onClick={() => setIsLiked(false)} 
          >
            ☆
          </button>
        ) : (
          <button
            className='favorite-btn' 
            onClick={() => setIsLiked(true)} 
          >
            ⭐
          </button>
        )}
        <button className='delete-btn' onClick={handleClick}>🗑️</button>
      </div>
    </>
  )
}

export default TeacherCard