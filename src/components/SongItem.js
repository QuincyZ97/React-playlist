function SongItem(props) {
    
    return (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td> 
            <td>{props.rating}</td>
        </tr>
);
}

export default SongItem