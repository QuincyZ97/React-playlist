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
              <th className="song-row__item">Song
                <button onClick={() => dispatch(sortList("tA"))}><i class="arrow up"></i></button>
                <button onClick={() => dispatch(sortList("tD"))}><i class="arrow down"></i></button>
              </th> 
              <th className="song-row__item">Artist
                <button onClick={() => dispatch(sortList("aA"))}><i class="arrow up"></i></button>
                <button onClick={() => dispatch(sortList("aD"))}><i class="arrow down"></i></button>
              </th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating
                <button onClick={() => dispatch(sortList("rA"))}><i class="arrow up"></i></button>
                <button onClick={() => dispatch(sortList("rD"))}><i class="arrow down"></i></button>
              </th>
            </tr>
            </tbody>
          </table>
        <SongList />
      </div>
    </div>
  );
}

//Dispatch note:
// tA = title Ascending tD = title Descending
// aA = artist Ascending aD = artist Descending
// rA = rating Ascending rD = rating Descending
export default App;
