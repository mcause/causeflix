import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie /SingleMovie';
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="main-container">
      <SingleMovie id = '24'/>
      <MovieList list = 'trending/movies/day' title='Trending Movies Today:'/>
    </div>
  );
}
// function TrendingMovies () {
//   return <MovieList/>
// }

export default App;
