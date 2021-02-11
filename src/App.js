import React from 'react';
import SongForm from './components/SongForm'
import SongList from './components/SongList'
import { useSelector } from 'react-redux';


function App() {
  const userSongList = useSelector(state => state.songs);
  
  return (
    <div className="App">
      <div>
        <SongForm />
        <table>
          <tbody>
            <tr className="song-header">  
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
            </tbody>
          </table>
        <SongList songs={userSongList}/>
      </div>
    </div>
  );
}

export default App;
