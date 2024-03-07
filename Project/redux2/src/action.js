
let nextId = 0;
export const Add = (message) =>
{
    return{
        type:"ADD",
        payload: {
            id: nextId++,
            text: message
        }
    }
}
export const deleteTodo = (id) =>{
    return{
        type:"DELETE",
        payload:{
            id: id,
        }
    }
}

export const ToggleTodo = (id) =>{
    return{
        type:"TOGGLE",
        payload:{
            id: id,
        }
    }
}