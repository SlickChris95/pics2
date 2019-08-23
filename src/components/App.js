import React from 'react';
import axios from 'axios';
import SearchBar from './Searchbar.js';
import config from '../config';



class App extends React.Component {
  state = {images: []};
//async-wait
onSearchSubmit = async (term) => {
  const response = await axios.get('/search/photos',{
    params: { query: term },
  });
  console.log(this)
  this.setState({images: response.data.results});
}

  render(){
    return(
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
       </div>
    );
  }
}

export default App
