import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBG2rI95W-sVbKVX6kaHRnkT7zMWCq1Cjc'

//Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      searchText: 'goats',
      selectedVideo: null
     };

    this.search = this.search.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  render() {
    return (
      <div className='app'>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          searchPostfix={this.state.searchPostfix}
          doSearch={this.search}
        />
        <VideoList
          videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }

  search(event) {
    event.preventDefault();
    const searchTerm = `${this.state.searchText} ${this.state.searchPostfix}`;
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      const selectedVideo = videos[0]
      this.setState({videos, selectedVideo})
    });
  }

  onSearchTextChange(searchText) {
    this.setState({searchText});
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }
}

//Take this component's generated HTML and put it on the page(in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
