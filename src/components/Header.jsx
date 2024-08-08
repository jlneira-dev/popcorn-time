import "./Header.css";

export function Header ({numberOfMovies}) {
    return (
        <header className="Header">
            <h1> 🍿 Popcorn Time! 🍿 </h1>
            <h2> Number of movies: {numberOfMovies}</h2>
        </header>
    )
}