export const Incr = () =>
{
    return {type:"INCR"}
}

export const Decr = () =>
{
    return {type: "DECR"}
}

export const Login = () => {
    return {type:"LOG_IN"}
}

export const Logout = () => {
    return {type:"LOG_OUT"}
}

export const fetchData = async(dispatch) => {
    try{
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({type:"Fetch_Success", payload: data})
    }

    catch{
        return{type:"Fetch_Fail", payload: err}
    }
}