import { useState } from 'react'
import { fetchMoviesFromDatabase } from '../../NetworkConnections'
import MovieList from '../MovieList/MovieList'
import SingleMovie from '../SingleMovie /SingleMovie'

//function taking in attributes as a parameter 
export default function SearchBar (props){
    const [movies, setMovies] = useState([])
    const [searchName, setSearchName] = useState('')

    function searchMovies(){
        fetchMoviesFromDatabase(`search/movie`, `&query=${searchName}`)
            .then(res => setMovies(res.results))
    }
// Creating a function that handles the change with its perameter as the event
function handleChange(event){
    console.log(event)
    //triggering a specific event and returning the value
        setSearchName(event.target.value)
}
console.log(searchName)
return (
    <div>
       <h1>Explore Movies Optoins:</h1> 
       <input value ={searchName} onChange={handleChange}></input>
       <input onClick= {searchMovies} type='submit'/>
        <MovieList title={props.title} movies={movies} genres = {props.genres}/>
       <div className = 'movie-list'>
            {movies.map(movie => <SingleMovie key={movie.id}movie={movie}/>)}
       </div>
    </div>
    )
}