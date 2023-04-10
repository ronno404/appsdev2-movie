import React from "react";

export const MovieItem = ({ movie }) => {
  return (
    <div className="container">
      <span>{movie.mov_id}</span>
      <span>{movie.mov_title}</span>
      <span>{movie.mov_year}</span>
      <span>{movie.mov_time}</span>
      <span>{movie.mov_lang}</span>
      <span>{movie.mov_dt_rel}</span>
      <span>{movie.mov_rel_country}</span>
      <button>Movie Details</button>
    </div>
  );
};
