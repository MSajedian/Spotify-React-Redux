import { initialState } from '../store'

const albumReducer = (state = initialState.album, action) => {
  switch (action.type) {
    case 'GET_ALBUM':
      return {
        ...state,
        album: action.payload,
      }
    case 'GET_ALBUM_SONGS':
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

export default albumReducer
