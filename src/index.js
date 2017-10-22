//bring in react from node modules
import React, { Component } from "react";
// bring in react dom  from node modules to actually render it to the dom
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

// bring in individual components
import SearchBar from "./components/search_bar";

//Youtube api access key
const API_KEY = "AIzaSyBDU9BwCNM05Uibq4FDr7jChHC0kHV72Dg";

// create a new component to produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return <SearchBar />;
  }
}

// take the components generate html and put in on the page
ReactDom.render(<App />, document.querySelector(".container"));
