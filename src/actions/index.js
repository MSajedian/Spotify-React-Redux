
export const getDataAction = (fetchType, query) => {
  return async (dispatch, getState) => {
    if (fetchType === "search") {
      try {
        let resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        // console.log(getState())
        if (resp.ok) {
          let result = await resp.json();
          let songs = result.data;
          dispatch({
            type: 'GET_RESULTS_SONGS',
            payload: songs,
          })
          dispatch({
            type: 'SET_ERROR',
            payload: false,
          })
        } else {
          console.log('error')
          dispatch({
            type: 'SET_ERROR',
            payload: true,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    }
    if (fetchType === "album") {
      try {
        let resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`)
        // console.log(getState())
        if (resp.ok) {
          let album = await resp.json();
          let songs= album.tracks.data
          dispatch({
            type: 'GET_ALBUM',
            payload: album,
          })
          dispatch({
            type: 'GET_ALBUM_SONGS',
            payload: songs,
          })
          dispatch({
            type: 'SET_ERROR',
            payload: false,
          })
        } else {
          console.log('error')
          dispatch({
            type: 'SET_ERROR',
            payload: true,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    }
  }
}

// export const addJobToFavouriteAction = (job) => ({
//   type: 'ADD_JOB_TO_FAVOURITE',
//   payload: job,
// })

// export const removeJobFromFavouriteAction = (index) => ({
//   type: 'REMOVE_JOB_FROM_FAVOURITE',
//   payload: index,
// })
