import React, { Component } from "react";

import apiServices from "../../services/tmdbApi";

import styles from "./Reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    apiServices.tmdbApiSearchReviewById(movieId).then((data) =>
      this.setState({
        reviews: data.results,
      })
    );
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length > 0 && (
          <ul>
            {reviews.map((el) => (
              <li key={el.id} className={styles.listItem}>
                <p className={styles.reviewer}>{el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}
