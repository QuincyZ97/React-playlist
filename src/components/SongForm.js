import { addSong } from '../0_actions'
import {useDispatch} from 'react-redux';

function SongForm() {
    const dispatch = useDispatch();
    const inputSong = { title: "aa", artist: "ab", genre: "test", rating: 5, id: 1 };

    return (
        <form onSubmit={(e) => e.preventDefault()}> 
            
        <input id="title" type="text" placeholder="Song name" />
            
        <input id="artist" type="text" placeholder="Artist name" />

        <select id="genre" name="genre">
            <option value="Rock">Rock</option>
            <option value="Rap">Rap</option>
            <option value="Pop">Pop</option>
            <option value="Other">Other</option>
        </select>

        <input type="number" id="rating" name="rating" min="1" max="5" />

        <input type="submit" value="Add song" onClick={() => dispatch(addSong(inputSong)) } />
                    
        </form>
    );
}
  
export default SongForm
