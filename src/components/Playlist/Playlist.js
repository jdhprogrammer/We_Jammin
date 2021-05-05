import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/TrackList'

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist" >
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <TrackList tracklist={this.props.playlist} onRemove={this.props.onRemove} isRemoval={true} />
                <button className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</button>
            </div>
        )
    }
};

export default Playlist;

