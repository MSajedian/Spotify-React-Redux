import { initialState } from '../store'

const searchResultReducer = (state = initialState.searchResult, action) => {
  switch (action.type) {
    case 'GET_RESULTS_SONGS':
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

export default searchResultReducer
