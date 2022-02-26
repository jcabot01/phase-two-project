import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function TeacherCard({ teacher: { id, name, image, instrument, years, email, phone, experience }, onDeleteClick }) {
  const [isLiked, setIsLiked] = useState("false");


  function handleClick(){
    fetch(`http://localhost:3000/teachers/${id}`, {//pull in id from click)
      method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => onDeleteClick(id))
  }

  

  return (
    <li>
      <div className='teacher-card-div' key={id}>
        <h2 className='teacher-name'>{name}</h2>
        <Link to={`/teacher/${name}`}>
          <img 
            className='teacher-image' 
            src={image} 
            alt={name}
            id={id}
         
          />
        </Link>
        <h3 className='instrument'>{instrument}</h3>
        <p className='years'>Experience: {years} years</p>
        {isLiked ? (
          <button className='favorite-btn' onClick={() => setIsLiked(false)} >☆</button>
        ) : (
          <button onClick={() => setIsLiked(true)} >⭐</button>
        )}
        <button className='delete-btn' onClick={handleClick}>🗑️</button>
      </div>
    </li>
  )
}

export default TeacherCard