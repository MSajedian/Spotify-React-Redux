import { initialState } from '../store'

const artistReducer = (state = initialState.artist, action) => {
  switch (action.type) {
    case 'GET_ARTIST':
      return {
        ...state,
        artist: action.payload,
      }
    case 'GET_ARTIST_SONGS':
      return {
        ...state,
        songs: action.payload,
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }


    default:
      return state
  }
}

export default artistReducer
