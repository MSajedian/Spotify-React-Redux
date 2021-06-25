import { initialState } from '../store'

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'ADD_TRACK_TO_ISPLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      }

    case 'ADD_TRACK_TO_FAVOURITETRACKS':
      return {
        ...state,
        favouriteTracks: [ ...state.favouriteTracks, action.payload ],
      }
    case 'REMOVE_TRACK_FROM_FAVOURITETRACKS':
      
      let newfavouriteTracks = state.favouriteTracks.filter((track) => track.id !== action.payload.id)

      return {
        ...state,
        favouriteTracks: newfavouriteTracks,
      }

    default:
      return state
  }
}

export default userReducer
