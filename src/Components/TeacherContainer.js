import React from 'react'
import TeacherCard from './TeacherCard'

function TeacherContainer({ teachers, onDeleteClick }) {

  //probably need isliked logic and state
  //probably need a deleteHandler; first do a DELETE fetch to db.json (delete backend), then send a callback up to APP to setTeachers w/ .filter(render teachers != deletedTeacher)
  
  
  return (
    <main>
      <ul className='cards'>
        {teachers.map((teacher) => (
          <TeacherCard
            key = {teacher.id}
            teacher = {teacher}
            onDeleteClick = {onDeleteClick}
          />
        ))}
      </ul>
    </main>
  )
}

export default TeacherContainer