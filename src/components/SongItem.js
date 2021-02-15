import { useDispatch } from 'react-redux';
import { deleteSong } from '../0_actions'

function SongItem(props) {
    const dispatch = useDispatch();
    
    return (
        <tr key={props.id}>
            <td><button onClick={() => dispatch(deleteSong(props.id))}> X </button>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td> 
            <td>{props.rating}</td>
            
        </tr>
);
}

export default SongItem
