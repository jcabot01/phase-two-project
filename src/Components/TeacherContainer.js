import React from 'react'
import TeacherCard from './TeacherCard'

function TeacherContainer({ teachers, onDeleteClick }) {

  return (
    <section>
      <div className='teachers-container'>
        {teachers.map((teacher) => (
          <TeacherCard
            key = {teacher.id}
            id = {teacher.id}
            name = {teacher.name}
            instrument = {teacher.instrument}
            image = {teacher.image}
            years = {teacher.years}
            onDeleteClick = {onDeleteClick}
          />
        ))}
      </div>
    </section>
  )
}

export default TeacherContainer