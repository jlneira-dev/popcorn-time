export function Movie ({movieDetails, callbackToDelete}) {
    
    return (
        <div className="card">
            <img src={movieDetails.imgURL} alt="Movie poster" />
            <h3>{movieDetails.title}</h3>
            <p>Year: {movieDetails.year}</p>
            <p>Rating: {movieDetails.rating}</p>
        
            <p>
                <button onClick={() => callbackToDelete(movieDetails.id)}>Delete</button>
            </p>
        
        </div>
    )
}