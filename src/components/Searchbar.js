import React from 'react'

//we will use a class component because we will need
//state

class SearchBar extends React.Component {
  state = {term: ''};

  //keeps form from submiting automatically
  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render(){
    return (
      <div className="ui segment">
        <form onSubmit ={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
              value={this.state.term}
              onChange={(e)=>this.setState({term: e.target.value.toUpperCase()})}
            />
          </div>
        </form>

      </div>

    );
  }

}

export default SearchBar
