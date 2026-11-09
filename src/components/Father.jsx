import React from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

function Father() {
  return (
    <div  style={{ backgroundColor: 'lightblue' , padding: '20px' }}>
      <h1>name: tehila ben gad</h1>
      <h1>phone:054-8544372</h1>
      <h1>age: 20</h1>
      <Child1/>
      <Child2/>
    </div>
  )
}

export default Father