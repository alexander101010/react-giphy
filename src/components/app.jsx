import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import { GIPHY_API_KEY } from "../config.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "KEtgWlYYoN6Ni",
    };
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  };

  search = (query) => {
    //API CALL
    giphy(GIPHY_API_KEY).search(
      {
        q: query,
        rating: "r",
        limit: 10,
      },
      (err, res) => {
        this.setState({
          gifs: res.data,
        });
      }
    );
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.selectGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
