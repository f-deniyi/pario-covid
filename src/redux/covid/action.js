// eslint-disable-next-line import/no-cycle
import {
  GET_COVID_STATS,
  GET_COVID_STATS_SUCCESS,
  GET_COVID_STATS_ERROR
} from '../actions'

export const getCovidStats = () => ({
  type: GET_COVID_STATS
})
export const getCovidStatsSuccess = data => ({
  type: GET_COVID_STATS_SUCCESS,
  payload: { data }
})
export const getCovidStatsError = error => ({
  type: GET_COVID_STATS_ERROR,
  payload: { error }
})
