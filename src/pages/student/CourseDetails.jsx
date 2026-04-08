import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {cid} = useParams();
  return (
    <div>
        <h3> Course Id : {cid} CourseDetails Component</h3>
    </div>
  )
}

export default CourseDetails;