import React from 'react'
import {useSelector} from 'react-redux'
import {deleteTodo, ToggleTodo} from './action'
const ToDoList = () =>
{
    const todos = useSelector((state)=> state)
    console.log(todos)
  return (
    <div>
        <table className='table table-stripped'>
            <tbody>
              {todos.map((todo, index) => (
            <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>{todo.completed}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>{
                      console.log(todo.id)
                      deleteTodo(todo.id)
                    }}>Delete</button>
                    <button className='btn btn-warning'
                                        onClick={()=>{
                                          console.log(todo.id)
                                          ToggleTodo(todo.id)
                                        }}>Toggle</button>
                </td>
            </tr>
            ))}
            
            </tbody>
            </table>
       </div>
   
  )
}

export default ToDoList
