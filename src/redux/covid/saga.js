import { all, fork, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
  GET_COVID_STATS,
  getCovidStatsSuccess,
  getCovidStatsError
} from '../actions'

function * getCovidStats () {
  try {
    const response = yield axios.get(`https://covidnigeria.herokuapp.com/api`)
    console.log(response)

    yield put(getCovidStatsSuccess(response.data.data))
  } catch (error) {
    console.log(error)
    console.log(error.response)
    let message
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error'
          break
        case 404:
          message = error.response.data.message
          break
        case 401:
          message = 'Invalid credentials'
          break
        default:
          message = error.response.data.error[0]
      }
    } else if (error.message) {
      message = error.message
    }
    yield put(getCovidStatsError(message))
  }
}

export function * watchGetCovidStats () {
  yield takeEvery(GET_COVID_STATS, getCovidStats)
}

export default function * rootSaga () {
  yield all([fork(watchGetCovidStats)])
}
