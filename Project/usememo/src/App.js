import React, { useMemo, useState } from 'react'

function App() {
  const[number, setNumber] = useState(0);
  
  const squaredNum = useMemo(() =>{
    return squareNum(number);
  },[number]);

  const onChangeHandler = (e) =>{
    setNumber(e.target.value);
  }
  const[counter, setCounter] = useState(0);

    return (
    <div>
      <h1>This is an example of useMemo</h1>
      <input type='number'
             placeholder='Enter a number'
             value={number}
             onChange={onChangeHandler}
             ></input> 
             <div>OUTPUT: {squaredNum}</div>
             <button onClick={()=>setCounter(counter+1)}>Counter++</button>
             <div>Counter:{counter}</div>  
    </div>
  )
}

function squareNum(number){
  console.log(number)
 return Math.pow(number,2);
}
export default App
