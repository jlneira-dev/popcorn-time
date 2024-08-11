import { Link, useParams } from "react-router-dom"

export function MovieDetails ({moviesToDisplay}) {

    const {movieId} = useParams();

    const movie = moviesToDisplay.find(movieObj => movieObj.id === parseInt(movieId))
    
    return (
        <div>
            <img src={movie.imgURL} alt="Movie poster" />
            <h1> {movie.title} </h1>
            <h1> {movie.year} </h1>
            <p>Rating: {movie.rating}</p>
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    )
}