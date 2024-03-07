import Input from './Input';
import './App.css';
import { createContext, useState } from 'react';


export const myContext = createContext()
function App() {
  
  const [count,setCount] = useState(0)
  return(
    <div className='App' style={{border:'2px solid red',height:'400px',width:'400px'}}>
     
      
      <myContext.Provider value={{count, setCount}}>
      <Input/>
      </myContext.Provider>
      <button onClick={()=>{setCount(count+2)}}>increase</button>
    </div>
    
  )
}

export default App;
