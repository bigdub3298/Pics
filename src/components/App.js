import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
require("dotenv").config();

export class App extends Component {
  onSearchSubmit(term) {}

  render() {
    console.log(process.env);
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
