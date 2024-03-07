import React, { useEffect, useState } from "react";

import axios from 'axios';
import { useLocation, useNavigate, useParams } from "react-router-dom";


const Update = () => {
	const[formData, setFormData] = useState({
		id:0,
		name:"",
		marks:0
	})
	let navigate = useNavigate();
	let location = useLocation();
	console.log(location)
	let params = new URLSearchParams(location.search)
	let id = params.get('Id')
	console.log(id)

useEffect(() => {
	axios.get(`http://localhost:3000/students/${id}`)
	.then((res) =>{
		console.log(res.data)
		setFormData(res.data)
	})
	.catch((err) =>
	{
		console.log(err)
	})
},[]);

const handleSubmit = (e) =>
{
	e.preventDefault();
	axios.put(`http://localhost:3000/students/${id}`, formData)
	.then((res) =>{
		alert('updated succesfully');
		navigate('/')
	})
	.catch((err)=>console.log(err))
}

return(
	<div>
		<h1>Update the details</h1>
		<form className="form border border-black m-2 p-5"
		onSubmit={(e)=>handleSubmit(e)}>
			<label htmlFor="">Id</label>
			<input type="text"
				   value={formData.id}
				   onChange={(e) => setFormData({...formData, id: e.target.value})}
				   className='form-control'
				   />

			<label htmlFor="">Name</label>
			<input type="text"
				   value={formData.name}
				   onChange={(e) => setFormData({...formData, name: e.target.value})}
				   className="form-control"
				   />

			<label htmlFor="">Marks</label>
			<input type="number"
				   value={formData.marks}
				   onChange={(e) => setFormData({...formData, marks: e.target.value})}
				   className="form-control"
				   />
			<br/>

			<button type="submit" >{" "}
			 						Update{" "}</button>
		</form>
	</div>
)
}
export default Update;