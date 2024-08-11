import { useState } from "react";

export function AddMovie ({callbackToCreate}) {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        const movieDetails = {
          title: title,
          year: parseInt(year),
        }

        callbackToCreate(movieDetails);
    
    }

    return (
        <section className="AddMovie box">
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
    )
}