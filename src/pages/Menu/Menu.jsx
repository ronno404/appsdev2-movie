import React, { useState, useEffect } from "react";
import "../../components/MovieItem/MovieItem";
import './Menu.css'

export const Menu = () => {
  const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setMovies(data))
//       .catch(error => console.log(error));
//   }, []);

console.log('el')

  return (
    <div className="container">
      <h1>Menu</h1>
      {movies.map((movie, index) => (
        <MovieItem key={index} {...movie} />
      ))}
    </div>
  );
}
 