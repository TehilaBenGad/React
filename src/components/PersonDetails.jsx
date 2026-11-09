import React from 'react'
import CourseDetails1 from './CourseDetails1';
import CourseDetails2 from './CourseDetails2';

function PersonDetails() {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <text>name: tehila ben gad</text>
        <text>age: 20</text>
        <CourseDetails1 name="Science" mark={88} />
        <CourseDetails2 name="Math" mark={95} />
    </div>
  )
}

export default PersonDetails