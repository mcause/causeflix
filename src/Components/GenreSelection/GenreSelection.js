import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import MovieList from "../MovieList/MovieList";
import { useState } from 'react';

export default function GenreSelection(props){
    // console.log(props.movieGenres);
    const [movies, setMovies] = useState([])
    const onGenreChange = e => {
        if(!e.target.value)return;

        fetchMoviesFromDatabase('discover/movie',`?with_genres=${e.target.value}`)  
            .then(res => setMovies(res.results));
        
    }
    return <div>
        <select onChange={onGenreChange}>
            {props.movieGenres.map(genre => <option key={genre.id}>
            {genre.name}</option>)}
        </select>
        <MovieList movies ={movies}/>
    </div>
}