import SongItem from './SongItem'
import React from 'react';

function songList(props) {
    console.log(props.songs)

    const SongDisplay = props.songs.map(song =>
        <SongItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
        />)
    
    return (
        <table>
            <tbody>
                {SongDisplay}
            </tbody>
        </table>
    );
}
  
export default songList