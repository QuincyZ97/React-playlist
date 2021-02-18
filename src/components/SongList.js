import SongItem from './SongItem'
import React from 'react';
import { useSelector } from 'react-redux';


function SongList() {
    const userSongList = useSelector(state => state.songs);
    
    const SongDisplay = userSongList.map(song =>
        <SongItem
            key={song.id}
            id={song.id}
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
  
export default SongList