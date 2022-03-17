import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase} from "../../NetworkConnections";

export default function TvShow(){
    // useState - to create state
    const[movie, setMovie] = useState(props.movie);
    // useEffect - only fore code when the component is loaded for the first time 
    useEffect(()=>{
        if(movie)return;
        //do some fetching 
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res));
    }, [])

    return <div className = 'movie-card'>
        <h2>{movie?.original_title}</h2>
        {movie && <img alt = {`poster for${movie?.original_title}`} src = {`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        <p>{movie?.overview}</p>
    </div>
}
