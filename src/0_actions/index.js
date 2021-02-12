export const addSong = (songInput) => {
    return {
        type: "ADD_SONG",
        payload: songInput
    }
}

export const deleteSong = (songId) => {
    return {
        type: "DELETE_SONG",
        payload: songId
    }
}