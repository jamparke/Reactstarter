//bring in react
import React from "react";
// bring in react dom to actually render it to the dom
import ReactDom from "react-dom";
// create a new component to produce some html
const App = function() {
  return <div>Hi! </div>;
};

// take the components generate html and put in on the page
ReactDom.render(<App />);
