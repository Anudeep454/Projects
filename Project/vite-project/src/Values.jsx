import React from 'react';
import { useState } from 'react';

function Values(props){

    const[inpVal,setinpVal] = useState('');

    const parentValue = () =>{
        console.log(inpVal)
        props.fun(inpVal)
    }

    return(
        <div className="inpV">
            <p>I'm a child</p>
        <input type="text" onChange={(e) => 
        {
            console.log(e.target.value)
            setinpVal(e.target.value)
        }
        }/>
        <button onClick={parentValue}></button>
        </div>
    )
}