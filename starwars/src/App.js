import React, { Component } from 'react';
import './App.css';
import ListContainer from "./components/ListContainer"
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.setState(state => (
      this.getCharacters(`https://swapi.co/api/people/?page=${state.page}`)
    ))
  }

  next = () => {
    this.componentDidMount();
    return(
      this.setState(state => ({
        page: state.page + 1,
      }))
      )
  }

  prev = () => {
    this.componentDidMount();
    return(
      this.setState(state => ({
        page: state.page - 1,
      }))
    )
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <div className="list-container">
            <ListContainer charactersArray={this.state.starwarsChars} next={this.next} prev={this.prev}/>
          </div>
      </div>
    );
  }
}

export default App;
