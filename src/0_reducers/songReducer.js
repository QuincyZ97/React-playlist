const initialState = [{
    title: "Hotel California",
    artist: "Eagles",
    genre: "Rock",
    rating: 5,
    id: 1
}];

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case "ADD_SONG":
            const newState = [...state, action.payload]
            return newState;
        case "DELETE_SONG":
            const removedItem = state.filter(item => { return item.id !== action.payload })
            return removedItem;
        case "DELETE_ALL":
            const clearedState = []
            return clearedState
        case "SORT_LIST":

            const getType = ( sortType ) => {
                if (sortType === "title") {
                    return function (a, b) {
                        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                        return 0;
                    }
                } else if (sortType === "artist") {
                    return function (a, b) {
                        if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
                        if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
                        return 0;
                    }
                } else {
                    return function (a, b) {
                        if (a.rating < b.rating) return 1;
                        if (a.rating > b.rating) return -1;
                        return 0;
                    }
                }
            }
        
            const sortState = [...state].sort( getType(action.payload) );

            return sortState
      }
  }

export default songReducer


