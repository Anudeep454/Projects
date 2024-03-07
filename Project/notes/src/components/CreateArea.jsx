import React, { useState } from 'react'

function CreateArea(props) {
    const[note, setNote] = useState({
        title: "",
        content: ""
    });

function handleChange(event){
    const {name, value} = event.target;
    setNote((prevNote) => {
        return{
            ...prevNote,
            [name] : value
        };
    });
}

function handleSubmit(event){
    props.onAdd(note)
    setNote({
        title: "",
        content: ""
    });
event.preventDefault();
}
  return (
    <div>
        <form>
            <input 
            type='text' 
            name='title' 
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
             />

            <textarea
             name='content'
             onChange={handleChange}
             value={note.content} 
             placeholder='Enter note...'
             rows={3}
             />

             <button onClick={handleSubmit}>Add Note</button>
        </form>
    </div>
  )
}

export default CreateArea
