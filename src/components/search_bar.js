import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form className='search-bar' onSubmit={this.props.doSearch}>
        <input
          onChange={this.onInputChange}
          value={this.props.searchText}
        />
      <input type="submit" value="Search" />
      </form>
    );
  }

  onInputChange(event) {
    this.props.onSearchTextChange(event.target.value);
  }
}

export default SearchBar;
