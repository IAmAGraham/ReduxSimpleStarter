import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAz0JEJqpfEAgudUa8o1WtE4Mi-pz4LaxI';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { videos: []}

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) =>{
      this.setState({ videos })
    })
  }

  render(){
    <div>
      <SearchBar />
      <VideoList vidoes={this.state.videos} />
    </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
