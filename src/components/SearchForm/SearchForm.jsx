import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    searchValue: "",
  };

  searchValueChange = (e) => {
      this.setState({ searchValue: e.target.value })
  }

  searchValueSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
  }

  render() {
    return (
      <form onSubmit={this.searchValueSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.searchValueChange}
        />
      </form>
    );
  }
}
