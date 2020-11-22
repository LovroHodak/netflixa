import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from './SearchMovies'

class Main extends React.Component{
  render(){
    return(
      <div className="container" >
        <h1 className="title" >NETFLIXA</h1>
        <SearchMovies />
      </div>
      
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))