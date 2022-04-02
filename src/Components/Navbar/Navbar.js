/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';


export default function navbar(){
    return (
<nav className="navbar navbar-expand-lg">
  <div className="navbar container">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="home-button">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="tv-show-button">
          <a className="nav-link">TV Shows </a>
        </li>
        <li className="movie-button">
          <a className="nav-link">Movies</a>
        </li>
        <li className="fandango-button ">
            <button>
          <a href='https://www.fandango.com/' target='empty'>Check whats in theaters</a>
            </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}