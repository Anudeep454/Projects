import React from 'react'
import useCustomHook from './CustomHook'
function FirstComponent(props) {
  const handleSubmit = useCustomHook(0, "FirstComponent");
  return (
    <div>
      <h1>This is First Component</h1>
      <button onClick={handleSubmit}>Click Me</button>
    </div>
  )         
}

export default FirstComponent;
            