import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header"
import { MovieList } from "./components/MovieList"
import { Footer } from "./components/Footer"

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = movieId => {
    setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))
}

  return (
    <>
      <Header numberOfMovies ={moviesToDisplay.length}/>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie}/>}/>
        <Route path="/about" element={<p>This is the about page</p>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
