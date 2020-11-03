import React from "react";

import { Link } from "react-router-dom";

export default function FindedFilmsList({ movies, location }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.name ? movie.name : movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
