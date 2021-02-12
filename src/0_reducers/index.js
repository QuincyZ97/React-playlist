import songReducer from './songReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    songs: songReducer
})

export default rootReducers