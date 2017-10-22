//bring in react from node modules
import React from "react";
// bring in react dom  from node modules to actually render it to the dom
import ReactDom from "react-dom";

// bring in individual components
import SearchBar from "./components/search_bar";

//Youtube api access key
const API_KEY = "AIzaSyBDU9BwCNM05Uibq4FDr7jChHC0kHV72Dg";

// create a new component to produce some html
const App = () => {
  return <SearchBar />;
};

// take the components generate html and put in on the page
ReactDom.render(<App />, document.querySelector(".container"));
