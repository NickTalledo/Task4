import React, { useEffect } from 'react';
import { useState } from 'react';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';
import ArraySort from './components/ArraySort';

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength, setMaxLength] = useState(0);

  useEffect(()=> {
    const moviesClone= [...movieData];
    const filteredMovies = moviesClone.filter(movie => {
      return movie.title.toUpperCase().includes(search.toUpperCase()) &&
      ([NaN, 0].includes(parseInt(maxLength,10)) || parseInt(maxLength, 10) >= movie.length)
    })
    setMovies(filteredMovies);
  },[search, maxLength]);

  return (
    <>
    <div>
      
    <section>
      {/* Header Bar for Searching */}
      <SearchBar 
      search={search} 
      setSearch={setSearch}
      maxLength={maxLength}
      setMaxLength={setMaxLength}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
      <ArraySort />
      </section>
      </div>
    </>
  )
}

export default App;
