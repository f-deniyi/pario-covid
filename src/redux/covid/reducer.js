import {
  GET_COVID_STATS,
  GET_COVID_STATS_SUCCESS,
  GET_COVID_STATS_ERROR
} from '../actions'

const INIT_STATE = {
  loading: false,
  stats: null
}

const covidReducer = (state = INIT_STATE, action) => {
  console.log(action.payload)
  switch (action.type) {
    case GET_COVID_STATS:
      return {
        ...state,
        loading: true
      }
    case GET_COVID_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        stats: action.payload.data
      }
    case GET_COVID_STATS_ERROR:
      return {
        ...state,
        loading: false
      }

    default:
      return { ...state }
  }
}

export default covidReducer
