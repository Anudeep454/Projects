import './App.css';
import React from 'react';
function Name(){

  return(
    <h2 className="myText">This is a component</h2>
  );
}
export default Name

export class Name2 extends React.Component{

  render(){
    return(
      <h2 className="myText1">This is a class component</h2>
      
    );
  }
}


