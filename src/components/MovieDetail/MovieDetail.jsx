import React from "react";

import styles from "./MovieDetail.module.css";

export default function MovieDetail({ movieObject }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieObject;

  console.log(styles);

  return (
    <div>
      <div className={styles.mainInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={styles.poster}
        />
        <div>
          <h2>
            {title} ({release_date.substr(0, 4)})
          </h2>
          <span>User Score: {vote_average}</span>
          <h4>Overview</h4>
          <div>{overview}</div>
          <h5 className={styles.genres}>Genres</h5>

          <ul className={styles.genresList}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
