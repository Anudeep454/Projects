import React from 'react'

function Note() {
  function handleClick(props){
      props.onDelete(props.id);
  }
  return (
    <div>
      <h1>{props.title}</h1>  
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note
