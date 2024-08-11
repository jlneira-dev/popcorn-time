export function MovieSummary ({movieDetails, callbackToDelete}) {
    
    return (
        <div className="card">
            <h3>{movieDetails.title}</h3>
            <p>Year: {movieDetails.year}</p>
        
            <p>
                <button onClick={() => callbackToDelete(movieDetails.id)}>Delete</button>
                <Link to={`/movies/${movieDetails.id}`}>More Details</Link>
            </p>
        
        </div>
    )
}