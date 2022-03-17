import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'


export default function navbarMenu(){
    return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-name" href="#">CauseFlix</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="home-button">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="tv-show-button">
          <a className="nav-link" href="#">TV Shows </a>
        </li>
        <li className="movie-button">
          <a className="nav-link" href="#">Movies</a>
        </li>
        <li className="documentary-button ">
          <a className="nav-link disabled">Documentaries </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}