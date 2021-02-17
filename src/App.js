import React from 'react';
import SongForm from './components/SongForm'
import SongList from './components/SongList'
import { useDispatch } from 'react-redux';
import { sortList } from './0_actions'

function App() { 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <SongForm />
        <table>
          <tbody>
            <tr className="song-header">  
              <th className="song-row__item">Song <button onClick={() => dispatch(sortList("title"))}>Sort</button> </th> 
              <th className="song-row__item">Artist <button onClick={() => dispatch(sortList("artist"))}>Sort</button> </th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating <button onClick={() => dispatch(sortList("rating"))}>Sort</button> </th>
            </tr>
            </tbody>
          </table>
        <SongList />
      </div>
    </div>
  );
}

export default App;
