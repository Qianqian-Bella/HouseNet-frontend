import React from "react";
import { Component } from "react";

class SearchComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is the search page for {this.props.params.name}.</h1>
      </div>
    );
  }
}

export default SearchComponent;
