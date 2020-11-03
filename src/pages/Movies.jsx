import React, { Component } from "react";

import SearchForm from "../components/SearchForm/SearchForm";
import FindedFilmsList from "../components/FindedFilmsList/FindedFilmsList";

import apiServices from "../services/tmdbApi";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search.length === 0) {
      this.setState({
        movies: [],
      });
    }

    this.apiQueryFromUrl();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      "query"
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      "query"
    );

    if (prevQuery !== nextQuery) {
      this.apiQueryFromUrl();
    }
  }

  apiQueryFromUrl = () => {
    const { location } = this.props;

    const queryFromUrlString = new URLSearchParams(location.search).get(
      "query"
    );

    if (queryFromUrlString) {
      apiServices.tmdbApiSearchByName(queryFromUrlString).then((data) => {
        this.setState({
          movies: data.results,
        });
      });
    }
  };

  handleSearchFormSubmit = (searchQueryText) => {
    const { history, location } = this.props;

    history.push({
      ...location,
      search: `query=${searchQueryText}`,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
         <SearchForm onSubmit={this.handleSearchFormSubmit} />
        {movies.length > 0 && <FindedFilmsList movies={movies} location={this.props.location}/>}
      </div>
    );
  }
}
