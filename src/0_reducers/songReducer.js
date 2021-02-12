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
            return newState
        case "DELETE_SONG":
            return state;
      }
  }

export default songReducer