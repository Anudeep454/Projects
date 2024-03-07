import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Add} from './action'
const AddToDo = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    
  return (
    <div>
      <input type='text' onChange={(e)=>setValue(e.target.value)} />
      <button onSubmit={Add}>Add</button>
    </div>
  )
}

export default AddToDo
