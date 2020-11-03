import React, { Component } from "react";

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

import apiServices from "../services/tmdbApi";

import styles from './MovieDetailPage.module.css'

export default class MovieDetailPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    this.apiQueryById();
  }

  getMovieIdFromUrl = () => {
    return this.props.match.params.movieId;
  };

  apiQueryById = () => {
    const movieId = this.getMovieIdFromUrl();

    apiServices.tmdbApiSearchById(movieId).then((data) =>
      this.setState({
        movie: data,
      })
    );
  };

  handleBtnBack = (location) => {
    const { state } = location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    return this.props.history.push(`/`);
  };

  render() {
    const { movie } = this.state;
    const { match, location } = this.props;

    return (
      <BrowserRouter>
        <div>
          <button type="button" onClick={() => this.handleBtnBack(location)}>
            &larr; Go Back
          </button>

          <br />

          {movie && <MovieDetail movieObject={movie} />}

          <div>
            <h4>Additional Info</h4>
            <ul className={styles.addInfoList}>
              <li>
                <Link to={`${match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
