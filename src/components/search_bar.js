import React, { Component } from "react";
// the above is the same as this: const Component = React.Component

// create a new class component and give it all the functionality of react.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "Starting value" };
  }
  render() {
    //on input change send input to onInputChange()
    return (
      <div>
        <input value={this.state.tem} onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
      // this.state.term = even.target.value BAD!!!!
    );
  }

  //   //this change is an object with alot of data in it
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
}

export default SearchBar;
