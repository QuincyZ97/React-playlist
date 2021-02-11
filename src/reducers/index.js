import addSong from './addSong'
import deleteSong from './deleteSong'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    songs: addSong ,
    deleteSong
})

export default rootReducer