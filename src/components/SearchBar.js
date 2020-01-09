import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="What would you like to see?"
              id="search-term"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
