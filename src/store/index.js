import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import searchResultReducer from '../reducers/searchResult'
import albumReducer from '../reducers/album'
import artistReducer from '../reducers/artist'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  searchResult: {
    songs: [],
  },
  album: {
    album: {},
    songs: [],
  },
  artist: {
    artist: {},
    songs: [],
  },
  user: {
    favouriteSongs: [],
    isPlaying: {},
  }
}

const bigReducer = combineReducers({
  searchResult: searchResultReducer,
  album: albumReducer,
  artist: artistReducer,
  user: userReducer,
})

const configureStore = () =>
  createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
