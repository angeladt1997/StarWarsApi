import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './results.css';

export class SearchResults extends Component {
    render() {
        let searchResults = ''
        if (this.props.searchType === 'people') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Name: {result.name}</p>
                        <p>Height: {result.height}</p>
                        <p>Mass: {result.mass}</p>
                    </li>
                )
            })
        } else if (this.props.searchType === 'films') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Film Title: {result.title}</p>
                        <p>Episode: {result.episode_id}</p>
                        <p>Release Date: {result.release_date}</p>
                    </li>
                )
            })
        } else if (this.props.searchType === 'planets') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Planet: {result.name}</p>
                        <p>Climate &#38; Terrain: {result.climate} / {result.terrain}</p>
                        <p>Population: {result.population}</p>
                    </li>
                )
            })
        } else if (this.props.searchType === 'species') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Species Name: {result.name}</p>
                        <p>Designation: {result.designation}</p>
                        <p>Language: {result.language}</p>
                        <p>Avg. height: {result.average_height}</p>
                    </li>
                )
            })
        } else if (this.props.searchType === 'starships') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Ship Name: {result.name}</p>
                        <p>Passenger Capacity: {result.passengers}</p>
                        <p>Hyperdrive Rating &#38; Speed: {result.hyperdrive_rating} / {result.max_atmosphering_speed}</p>
                        <p>Class: {result.starship_class}</p>
                    </li>
                )
            })
        } else if (this.props.searchType === 'vehicles') {
            searchResults = this.props.searchResults.map((result , i) => {
                return (
                    <li key ={i}>
                        <p>Vehicle Name: {result.name}</p>
                        <p>Passenger Capacity: {result.passengers}</p>
                        <p>Speed: {result.max_atmosphering_speed}</p>
                        <p>Class: {result.vehicle_class}</p>
                    </li>
                )
            })
        }

        return (
            <div className="displayResults">
                <ul className="resultList">
                    {searchResults}
                </ul>
            </div>
        )
    }
}
SearchResults.propTypes ={
    searchResults: PropTypes.array.isRequired,
    searchType: PropTypes.string.isRequired
}

SearchResults.defaultProps = {
    searchResults: [],
    searchType: ''
};

export default SearchResults