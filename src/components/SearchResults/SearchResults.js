import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/TrackList'

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults" >
                <h2>Results</h2>
                <TrackList tracklist={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
            </div>
        );
    }
};

export default SearchResults;
