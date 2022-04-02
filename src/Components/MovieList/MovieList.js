import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase} from "../../NetworkConnections"
import SingleMovie from "../SingleMovie /SingleMovie";

// universal function for MovieList invoking the props as the parameter 
export default function MovieList(props){
    //setting movies and setMovies to useState invoking props.movie 
    const [movies, setMovies] = useState(props.movies);
    useEffect(()=> {
        if(movies) return
        fetchMoviesFromDatabase(props.list)
            .then(res => setMovies(res.results));
    // eslint-disable-next-line    
    }, [])

    useEffect(() =>{
        setMovies(props.movies)
    },[props.movies])
    
    // if(movies.length > 0 && !movies[0].poster_path);
    // movies.map(function (movie){
    //     fetch(`https:api.themoviedb.org/3/find/${movie.id}?api_key=${API_KEY}&language = en-US&external_source=imdb_db)${query}`)
    // })
    return <div className = 'movie-list-containter'> 
        <h2>{props.title}</h2>
        <div className = 'movie-list'>
            {movies?.map(movie => <SingleMovie key={movie.id} movie={movie} movieGenres={props.movieGenres} tvGenres={props.tvGenres}/>)}

        </div> 
</div>
}

