const addSong = (id) => {
    return {
        type: "ADD_SONG",
        payload: id
    }
}

export default addSong