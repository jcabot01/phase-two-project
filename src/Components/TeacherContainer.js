import React from 'react'
import TeacherCard from './TeacherCard'

function TeacherContainer({ teachers, onDeleteClick }) {

  //probably need isliked logic and state
  //probably need a deleteHandler; first do a DELETE fetch to db.json (delete backend), then send a callback up to APP to setTeachers w/ .filter(render teachers != deletedTeacher)
  
  
  return (
    <section>
      <div className='teachers-container'>
          <TeacherCard
            teachers = {teachers}
            onDeleteClick = {onDeleteClick}
          />
      </div>
    </section>
  )
}

export default TeacherContainer