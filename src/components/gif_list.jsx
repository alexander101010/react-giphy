import React, { Component } from "react";
import Gif from "./gif.jsx";

// pass the selectGif on to the Gifs that are in the list and then handle the click in the Gif component

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => (
        <Gif id={id} key={id} selectGif={selectGif} />
      ))}
    </div>
  );
};

// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map((el) => {
//       return (
//         <Gif id={el.id} key={el.id} onClick={this.props.updateSelectedGif} />
//       );
//     });
//   };

//   render() {
//     return <div className="gif-list">{this.renderList()}</div>;
//   }
// }

export default GifList;
