import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let a = 25;
  let arr:(string|number)[] = ["anup","Anudeep",2]//collection of same data types is array but we can use union operator to define two data types in array
  let arr2:[string,number,number] = ["anup",8,24]//Tuple

  interface something{
    name:string,
    age?:number,
    isGood:boolean
  }

  interface nothing extends something{
    gender:string
  }

  let obj:something ={
    name: "anup",
    age:22,
    isGood:true
  }
function click(a:number, b:number):number{
    return a+b
}
  return (
    <>
      <p>Count: {count}</p>
      <p>{a}</p>
      <button onClick={()=>click(8,6)}>click me</button>
    </>
  )
}

export default App
