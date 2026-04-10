import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
  return (
    <div style={{
        border:"1px solid #ddd",
        borderRadius:"10px",
        padding:"16px",
        marginBottom:"16px",
        boxShadow:"0 2px 6px rgba(0,0,0,0.08)",
        float:"left",
        marginRight:"10px"
      }}>
        <h3>{course.title}</h3>
        <p>{course.dur}</p>
        <p>{course.fee}</p>
        <h3>{course.trainer}</h3>
        <Link to={`/student/course/${course.cid}`}>View Course</Link>
    </div>
  )
}

export default CourseCard;