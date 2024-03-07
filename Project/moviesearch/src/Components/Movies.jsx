import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'
import { TextField } from '@mui/material'
const Movies = () => {
    const[searchTerm, setSearchTerm] = useState('')
    const[moviesData, setMoviesData] = useState([])
    useEffect(() => 
    {
        let API_keys = '5e201a03';
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_keys}`)
        .then((response) => response.json())
        .then((data) => setMoviesData(data.Search))
    },[searchTerm])
  return (
    <div>
      <header>
        <TextField id='outlined-basic' label="Enter a movie" variant='outlined' onChange={(e)=>setSearchTerm(e.target.value)} />
      </header>
      <MoviesList data={moviesData}/>
      <MoviesList />
    </div>
  )
}

export default Movies
