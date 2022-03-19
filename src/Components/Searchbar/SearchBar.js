import {useEffect, useState } from 'react'
import { fetchMoviesFromDatabase } from '../../NetworkConnections'
import SingleMovie from '../SingleMovie /SingleMovie'

export default function SearchBar (){
    const [movies, setMovies] = useState([])
    const [searchName, setSearchName] = useState('')

    function searchMovies(){
        fetchMoviesFromDatabase(`search/movie`, `&query=${searchName}`)
            .then(res => setMovies(res.results))
    }

function handleChange(event){
    setSearchName(event.taget.value)
}

console.log(searchName)
return (
    <div>
       <h1>Explore Movies By Search</h1> 
       <input value ={searchName} onChange={handleChange}></input>
       <input onClick= {searchMovies} type='submit'/>
       <h2>{props.title}</h2>
       <div className = 'movie-list'>
            {movies.map(movie => <SingleMovie key={movie.id}movie={movie}/>)}
       </div>
    </div>
    )
}