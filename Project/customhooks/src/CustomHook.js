import { useState, useEffect } from 'react'

function useCustomHook(initializer, componentName) {
    const[count, setCount] = useState(initializer)

    function resetCounter(){
        setCount(count+1);
    }
    
    useEffect(()=>{
        console.log("The button on the "+componentName+" is clicked "+count+" times.")
    },[count,componentName]);
  return resetCounter;
}

export default useCustomHook;
