import React, { Component } from "react";

import apiServices from "../services/tmdbApi";

import FindedFilmsList from "../components/FindedFilmsList/FindedFilmsList";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    apiServices.tmdmApiTrendings().then((data) =>
      this.setState({
        movies: data.results,
      })
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <FindedFilmsList movies={movies} location={this.props.location} />
      </div>
    );
  }
}
