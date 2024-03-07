import React, { useContext} from 'react'
import { myContext } from './App'

const Value = () => {
    const {count, setCount} = useContext(myContext)
  return (
    <div style={{border:'2px solid red',height:'100px',width:'100px'}}>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default Value
