import React from 'react'
import useCustomHook from './CustomHook'

function SecondComponent(props) {
    const handleSubmit = useCustomHook(0, "SecondComponent");
  return (
    <div>
      <h1>This is the Second Component</h1>
      <button onClick={handleSubmit}>Click Me</button>
    </div>
  )
}

export default SecondComponent;

