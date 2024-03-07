import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {

  const[formDetails, setFormDetails] = useState({
    id:0,
    name:"",
    marks:0
  })
  let navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/students", formDetails)
      .then((res)=>{
        alert("added succesfully");
        navigate('/');
      }).catch((err)=>
        console.log(err)
      )
  }
  return (
	<div>
    <h1>Create Students Details</h1>
    <form  onSubmit={(e)=>handleSubmit(e)}>
      <div>
        
        <input type='text'
               className='form-control'
               value={formDetails.id}
               onChange={(e)=> setFormDetails({...formDetails, id:e.target.value})}
               placeholder='Enter your id'
               />

        
        <input type='text'
               className='form-control'
               value={formDetails.name}
               onChange={(e)=> setFormDetails({...formDetails, name:e.target.value})}
               placeholder='Enter your Name'
               />

        
        <input type='text'
               className='form-control'
               value={formDetails.marks}
               onChange={(e)=> setFormDetails({...formDetails, marks:e.target.value})}
               placeholder='Enter your marks'
               />
      </div>
            <button type='submit'>Submit</button>
    </form>
	</div>
  )
}

export default Create
