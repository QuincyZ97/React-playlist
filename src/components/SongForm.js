import { addSong } from '../0_actions'
import { deleteAll } from '../0_actions'
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
        <div className="input" >

        <form onSubmit={(event) => handleSubmit(event)}> 
        <input className="input__field" id="title" name="title" type="text" placeholder="Song name" />
        <input className="input__field" id="artist" name="artist" type="text" placeholder="Artist name" />
        <select className="input__field" id="genre" name="genre">
            <option value="Rock">Rock</option>
            <option value="Rap">Rap</option>
            <option value="Pop">Pop</option>
            <option value="Other">Other</option>
        </select>
        <input className="input__field" type="number" id="rating" name="rating" min="1" max="5" placeholder="1-5" />
        <input className="input__btn" type="submit" value="Add song"/>
        </form>
            
        <button className="removeBtn" onClick={() => dispatch(deleteAll())}>Remove all</button>
        </div>
    );
}
  
export default SongForm
