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
            const getType = (sortType) => {
                // SORT TITLE
                if (sortType === "tA") { return function (a, b) { if (a.title.toLowerCase() < b.title.toLowerCase()) return -1; } }
                else if (sortType === "tD") { return function (a, b) { if (a.title.toLowerCase() > b.title.toLowerCase()) return -1; } }
                // SORT ARTIST
                else if (sortType === "aA")  { return function (a, b) { if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1; } }
                else if (sortType === "aD") { return function (a, b) { if (a.artist.toLowerCase() > b.artist.toLowerCase()) return -1; } }
                // SORT RATING
                else if (sortType === "rA") { return function (a, b) { if (a.rating < b.rating) return -1;}}
                else if (sortType === "rD")   { return function (a, b) { if (a.rating > b.rating) return -1;}}
            }
        
            const sortState = [...state].slice().sort( getType(action.payload) );
            return sortState
      }
  }

export default songReducer


