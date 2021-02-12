import React from 'react';
import SongForm from './components/SongForm'
import SongList from './components/SongList'

function App() { 
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
        <SongList />
      </div>
    </div>
  );
}

export default App;
