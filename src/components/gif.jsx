import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  };

  render() {
    if (!this.props.id) null;
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} alt="" className="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
