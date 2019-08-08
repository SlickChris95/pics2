import React from 'react';
import axios from 'axios';
import SearchBar from './Searchbar.js';
import config from '../config';

const accessKey = config.access_key;
const secret_key = config.secret_key;

class App extends React.Component {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization:
        'Client-ID ' + accessKey
      }
    });
  }
  render(){
    return(
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
       </div>
    );
  }
}

export default App
