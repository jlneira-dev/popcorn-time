import { useState } from "react";
import movies from "../data/movies.json"
import { Movie } from "./Movie";

export function MovieList () {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = movieId => {
        setMoviesToDisplay(moviesToDisplay.filter(movie => movie.id !== movieId))
    }
    
    return (
        <section className="MovieList">

            <h1>List of Movies:</h1>
            <h2>Number of Movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map(movieDetails => {
                return <Movie 
                    key={movieDetails.id} 
                    movieDetails={movieDetails}
                    callbackToDelete={deleteMovie}
                />
            })}

        </section>
    );
}