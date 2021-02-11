const deleteSong = (id) => {
    return {
        type: "DELETE_SONG",
        payload: id
    }
}

export default deleteSong