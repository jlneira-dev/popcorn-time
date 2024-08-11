import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header"
import { About } from "./components/About"
import { MovieList } from "./components/MovieList"
import { MovieDetails } from "./components/MovieDetails";
import { Footer } from "./components/Footer"

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  const deleteMovie = movieId => setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))


  const handleSubmit = e => {
    e.preventDefault();

    const newMovie = {
      id: Math.max(...moviesToDisplay.map(movie => movie.id)) + 1,
      title: title,
      year: parseInt(year),
    }

    setMoviesToDisplay([newMovie, ...moviesToDisplay])
  }

  return (
    <>
      <Header numberOfMovies ={moviesToDisplay.length}/>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <section className="box">
        <h2>Create your own movie:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              required
              placeholder="The Godfather" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label>
            Year:
            <input 
              type="number" 
              name="year" 
              required
              placeholder="1999" 
              min={1900}
              max={2100}
              value={year} 
              onChange={e => setYear(e.target.value)}
            />
          </label>
          <p>
            <button>Create</button>
            </p>
        </form>
      </section>

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
