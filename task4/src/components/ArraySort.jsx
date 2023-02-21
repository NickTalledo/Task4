
import { useState, useEffect } from "react";
import movies from "../utils/movies";

const ArraySort = () =>{
    const [sortedMovies, setSortedMovies] = useState([]);
    const [direction, setDirection] = useState('asc');
    
    useEffect(()=> {
        setSortedMovies([...movies]);
    }, [])
    
    const sortLength = () => {
    
        if(direction === 'asc'){
            setSortedMovies(sortedMovies.sort((a,b) => b.length - a.length));
            setDirection('desc');
        }
        else{
            setSortedMovies(sortedMovies.sort((a,b) => a.length - b.length));
            setDirection('asc');
        }
    }
    return <div>
        <h3>Movies in Runtime Order: </h3>
        <p>{sortedMovies.map(movies => `${movies.title} - ${movies.length}`).join(' | | ')}</p>
        <button onClick={sortLength}>Resort</button><small>{direction}</small>
    </div>
}

export default ArraySort;