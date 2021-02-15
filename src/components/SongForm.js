import { addSong } from '../0_actions'
import {useDispatch, useSelector} from 'react-redux';

function SongForm() {
    
    const userSongList = useSelector(state => state.songs);
    const dispatch = useDispatch();
    
// ###############Form input to state###########################
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const nameInput = event.target.title.value
        const artistInput = event.target.artist.value
        const genreInput = event.target.genre.value
        const ratingInput = event.target.rating.value

        if (nameInput && artistInput && ratingInput) {
            const inputSong = {
                title: nameInput,
                artist: artistInput,
                genre: genreInput,
                rating: ratingInput,
                id: userSongList.length + 1
            };
            dispatch(addSong(inputSong));
        } else {
            alert("Please fill in all the fields")
        }
      }
    
    
// ################################################
    return (
        <form onSubmit={(event) => handleSubmit(event)}> 
            
        <input id="title" name="title" type="text" placeholder="Song name" />
            
        <input id="artist" name="artist" type="text" placeholder="Artist name" />

        <select id="genre" name="genre">
            <option value="Rock">Rock</option>
            <option value="Rap">Rap</option>
            <option value="Pop">Pop</option>
            <option value="Other">Other</option>
        </select>

        <input type="number" id="rating" name="rating" min="1" max="5" />

        <input type="submit" value="Add song"/>
                    
        </form>
    );
}
  
export default SongForm
