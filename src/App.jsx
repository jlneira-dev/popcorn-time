import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header"
import { About } from "./components/About"
import { AddMovie } from "./components/AddMovie";
import { MovieList } from "./components/MovieList"
import { MovieDetails } from "./components/MovieDetails";
import { Footer } from "./components/Footer"

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const createMovie = movieDetails => {   
    const newMovie = {...movieDetails, id: Math.max(...moviesToDisplay.map(movie => movie.id)) + 1,} 
    setMoviesToDisplay([newMovie, ...moviesToDisplay])
  }

  const deleteMovie = movieId => setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))

  return (
    <>
      <Header numberOfMovies ={moviesToDisplay.length}/>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <AddMovie callbackToCreate={createMovie}/>

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay}/>}/> 
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
