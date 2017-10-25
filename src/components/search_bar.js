// import React, { Component } from "react";
// // the above is the same as this: const Component = React.Component

// // create a new class component and give it all the functionality of react.
// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: "" };
//   }
//   render() {
//     //on input change send input to onInputChange()
//     return (
//       <div className="search-bar">
//         <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
//       </div>
//     );
//   }

//   onInputChange(term) {
//     this.setState({ term });
//     this.props.onSearchTermChange(term);
//   }
// }

// export default SearchBar;

import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
