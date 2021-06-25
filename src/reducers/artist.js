import { initialState } from '../store'

const artistReducer = (state = initialState.artist, action) => {
  switch (action.type) {
    // case 'GET_SONGS':
    //   return {
    //     ...state,
    //     stock: action.payload,
    //   }

    // case 'SET_ERROR':
    //   return {
    //     ...state,
    //     error: action.payload,
    //   }

    // case 'SET_LOADING':
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   }

    default:
      return state
  }
}

export default artistReducer
