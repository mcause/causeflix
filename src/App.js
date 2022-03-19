import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie /SingleMovie';
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar/SearchBar';
import { useEffect, useState } from 'react/cjs/react.development';
import { fetchMoviesFromDatabase,GenreContext } from './NetworkConnections';

function App() {
  const [movieGenres, setMovieGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])

  useEffect(() => {
    //fetch the entire list of genres 
    fetchMoviesFromDatabase('genre/movie/list')
      .then(res => setMovieGenres(res.genres))

    fetchMoviesFromDatabase('genre/tv/list')
      .then(res => setTvGenres(res.genres))
  }, []);

  return (
    <GenreContext.Provider value={[tvGenres, movieGenres]}>
      <div className="main-container">
        <Navbar />
        <SearchBar/>
        <SingleMovie id='24'/>
        <MovieList list='trending/movies/day' title='Trending Movies Today:' movieGenres={movieGenres} tvGenres={tvGenres} />
      </div>
    </GenreContext.Provider>
  );
}

export default App;
