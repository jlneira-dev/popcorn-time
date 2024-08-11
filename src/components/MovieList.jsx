import { MovieSummary } from "./MovieSummary";

export function MovieList ({moviesToDisplay, callbackToDelete}) {

    return (
        <section className="MovieList">

            <h1>List of Movies:</h1>

            {moviesToDisplay.map(movieDetails => {
                return <MovieSummary 
                    key={movieDetails.id} 
                    movieDetails={movieDetails}
                    callbackToDelete={callbackToDelete}
                />
            })}

        </section>
    );
}