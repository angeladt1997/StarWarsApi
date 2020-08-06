import React, { Component } from 'react'
import SearchResults from './results/results'
import './App.css'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchType: 'people',
      searchTerm: '',
      error: null,
      loading: false,
      waiting: false,
    };
  }

  searchChanged(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.searchTerm.value,
      searchType: e.target.searchType.value

    }, this.handleSearch)
  }

  
  handleSearch() {
    const baseURL = `https://swapi-thinkful.herokuapp.com/api/${this.state.searchType}/?search=${this.state.searchTerm}`;
    this.setState({
      loading: true,
      waiting: true,
      results: [],
      error: null,
    })

    return fetch(baseURL)
          .then(response => {
            if(response.status>400) {
              throw new Error('Cannot search database. Try again later.')
            }
            return response.json()})
          .then(results => {
            if(results.results.length === 0) {
              throw new Error('No results found across the galaxy!')
          } 
            setTimeout(() => {
              this.setState({
                waiting: false,
                results: results.results,
                error: null,
                loading:false
              })
            }, 6000)
          })
          .catch(error =>
            setTimeout(() => {
              this.setState({
              error: error.message,
              loading:false,
              waiting: false
            })
          }, 4500))
  }

  render() {
    
    return (
      <main className={(this.state.loading || this.state.waiting) ? 'searching' : ''}>
      <h1>Into the Spiderverse </h1>
      <div role="search">
            <form className="searchBar" onSubmit={e => this.searchChanged(e)}>
                <label htmlFor="searchType">Select bounty type:</label>
                <select id="searchType" name="searchType">
                  <option value="people">folks</option>
                  <option value="films">flicks</option>
                  <option value="planets">planets</option>
                  <option value="species">species</option>
                  <option value="starships">zoom zoom ships</option>
                  <option value="vehicles">whips</option>
                </select>
                <label htmlFor="searchTerm" >What it is you looking for?:</label>
                <input type="searchTerm" name="searchTerm" id="searchTerm" defaultValue="Skywalker"></input>
                <button type="submit">Search the Galaxy</button>
                </form>
      </div>
      <SearchResults searchResults={this.state.results} searchType={this.state.searchType}/>
      {this.state.error ? <div className="errorDisplay">{this.state.error}</div> : ''}
      {(this.state.loading || this.state.waiting) ? <div className="loadingMessage"> Prepare to exit hyperdrive</div> : ''}
    </main>
    )
  }
}

export default App
