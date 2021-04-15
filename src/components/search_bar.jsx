import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
    this.props.search(event.currentTarget.value);
  };

  render() {
    return (
      <input
        value={this.state.term}
        placeholder="speak with gifs"
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
