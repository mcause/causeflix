import { useContext, useEffect, useState } from "react"
import { fetchMoviesFromDatabase, GenreContext} from "../../NetworkConnections";


export default function SingleMovie(props){
    // useState - to create state
    const[movie, setMovie] = useState(props.movie);
    const [searchName, setSearchName] = useState('')
    const genres = useContext(GenreContext)[movie?.original_title ? 1 :0]
    // useEffect - only fire code when the component is loaded for the first time 
    useEffect(()=>{
        
        // fetchMoviesFromDatabase('genre/movie/list')
        //     .then(res => setGenres(res.genres))
        if(movie)return;
        //do some fetching 
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res));
        
    }, [])

    // const genres = movie?.original_title ? props.movieGenres : props.tvGenres 

    return <div className = 'movie-card'>
        <h4>{movie?.original_title || movie?.original_name }</h4>
        {movie && <img 
        alt = {`poster for${movie?.original_title}`} 
        src = {`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        <p>{movie?.overview}</p>
        {/* Mapping over genre of movies to turn the ids into names */}
        <p>{movie?.genre_ids?.map(
            (genre_id,i) => <p>{genres.find(genre=> genre_id === genre.id)?.name}{i !== movie.genre_ids.length -1 && ','}</p>)}</p>
            {console.log(movie?.genre_ids)}
    </div>
}

