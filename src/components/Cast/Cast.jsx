import React, { Component } from "react";

import apiServices from "../../services/tmdbApi";

import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    apiServices.tmdbApiSearchCastById(movieId).then((data) =>
      this.setState({
        cast: data.cast,
      })
    );
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        {cast.length > 0 && (
          <ul >
            {cast.map((el) => (
              <li key={el.cast_id} className={styles.castListItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.name}
                  className={styles.profile}
                />
                <p className={styles.name}>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
