import React, { Component } from "react";
import Gif from "./gif.jsx";

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((el) => {
      return <Gif id={el.id} key={el.id} />;
    });
  };

  render() {
    return <div className="gif-list">{this.renderList()}</div>;
  }
}

export default GifList;
