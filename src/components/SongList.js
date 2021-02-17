import SongItem from './SongItem'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from '../0_actions'

function SongList() {
    const userSongList = useSelector(state => state.songs);
    const dispatch = useDispatch();
    
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
    <div>
        <button onClick={() => dispatch(deleteAll())}>Remove all</button>
        <table>
            <tbody>
                {SongDisplay}
            </tbody>
        </table>
    </div>
    );
}
  
export default SongList