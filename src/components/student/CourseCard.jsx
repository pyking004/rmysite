import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div>
        <h3>{course.title}</h3>
        <p>{course.dur}</p>
        <p>{course.fee}</p>
        <h3>{course.trainer}</h3>
    </div>
  )
}

export default CourseCard;